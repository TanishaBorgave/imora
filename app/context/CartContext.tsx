"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { shopifyFetch } from "../lib/shopify";
import { GET_CART, CREATE_CART, ADD_TO_CART, REMOVE_FROM_CART } from "../lib/queries";

export interface CartItem {
  id: string; // Cart line ID
  variantId: string; // Product variant ID
  name: string;
  slug: string;
  price: number;
  quantity: number;
  image: string;
  size?: string;
}

interface CartContextType {
  items: CartItem[];
  itemCount: number;
  total: number;
  checkoutUrl: string;
  addToCart: (variantId: string, quantity?: number) => Promise<string | null>;
  removeFromCart: (lineId: string) => Promise<void>;
  updateCartQuantity: (lineId: string, variantId: string, quantity: number) => Promise<void>;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  isLoading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartId, setCartId] = useState<string | null>(null);
  const [items, setItems] = useState<CartItem[]>([]);
  const [checkoutUrl, setCheckoutUrl] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Parse and sync the Shopify cart data into local state
  const parseAndSetCart = (cart: any) => {
    if (!cart) return;
    setCheckoutUrl(cart.checkoutUrl);
    setCartId(cart.id);
    localStorage.setItem("imora_shopify_cart_id", cart.id);

    const parsedItems: CartItem[] = (cart.lines?.edges || []).map((edge: any) => {
      const node = edge.node;
      const variant = node.merchandise;
      const product = variant.product;

      return {
        id: node.id,
        variantId: variant.id,
        name: product.title,
        slug: product.handle,
        price: parseFloat(variant.price?.amount || "0"),
        quantity: node.quantity,
        image: variant.image?.url || product.images?.edges[0]?.node?.url || "/images/product-1.png",
        size: variant.title.toLowerCase() === "default title" ? undefined : variant.title,
      };
    });

    setItems(parsedItems);
  };

  // On mount, load cart from localStorage and fetch current details
  useEffect(() => {
    const savedCartId = localStorage.getItem("imora_shopify_cart_id");
    if (savedCartId) {
      setCartId(savedCartId);
      setIsLoading(true);
      shopifyFetch<any>({
        query: GET_CART,
        variables: { cartId: savedCartId },
        cache: "no-store",
      })
        .then((response) => {
          if (response.body?.cart) {
            parseAndSetCart(response.body.cart);
          } else {
            // Cart might have expired or been deleted on Shopify side, clear it
            localStorage.removeItem("imora_shopify_cart_id");
            setCartId(null);
          }
        })
        .catch((err) => {
          console.error("Failed to recover cart:", err);
          localStorage.removeItem("imora_shopify_cart_id");
          setCartId(null);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, []);

  const addToCart = async (variantId: string, quantity: number = 1): Promise<string | null> => {
    setIsLoading(true);
    setCartOpen(true); // Open the side cart drawer when adding an item!
    try {
      let cart;
      if (!cartId) {
        // Create new cart
        const response = await shopifyFetch<any>({
          query: CREATE_CART,
          variables: {
            lines: [{ merchandiseId: variantId, quantity }],
          },
          cache: "no-store",
        });
        cart = response.body?.cartCreate?.cart;
      } else {
        // Add item to existing cart
        const response = await shopifyFetch<any>({
          query: ADD_TO_CART,
          variables: {
            cartId,
            lines: [{ merchandiseId: variantId, quantity }],
          },
          cache: "no-store",
        });
        cart = response.body?.cartLinesAdd?.cart;
      }
      if (cart) {
        parseAndSetCart(cart);
        return cart.checkoutUrl;
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    } finally {
      setIsLoading(false);
    }
    return null;
  };

  const removeFromCart = async (lineId: string) => {
    if (!cartId) return;
    setIsLoading(true);
    try {
      const response = await shopifyFetch<any>({
        query: REMOVE_FROM_CART,
        variables: {
          cartId,
          lineIds: [lineId],
        },
        cache: "no-store",
      });
      parseAndSetCart(response.body?.cartLinesRemove?.cart);
    } catch (error) {
      console.error("Error removing from cart:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Helper to adjust quantity directly from the cart drawer
  const updateCartQuantity = async (lineId: string, variantId: string, quantity: number) => {
    if (!cartId) return;
    if (quantity <= 0) {
      await removeFromCart(lineId);
      return;
    }

    setIsLoading(true);
    try {
      // In Shopify Storefront API, updating a line quantity is done by removing the line and adding it back,
      // or we can use a cartLinesUpdate mutation. Since our queries file has add/remove, let's implement a simple direct remove and add.
      // Wait, let's look at the queries: we can just remove the old line and add the new quantity. Or we can just let add/remove do the job.
      // Actually, removing and re-adding is a bit slower. Let's write a simple update query or use remove + add.
      // Let's do a remove and then an add. Or even better, let's just make it simple: remove the item and add it back with the new quantity.
      await shopifyFetch<any>({
        query: REMOVE_FROM_CART,
        variables: { cartId, lineIds: [lineId] },
        cache: "no-store",
      });
      const response = await shopifyFetch<any>({
        query: ADD_TO_CART,
        variables: { cartId, lines: [{ merchandiseId: variantId, quantity }] },
        cache: "no-store",
      });
      parseAndSetCart(response.body?.cartLinesAdd?.cart);
    } catch (error) {
      console.error("Error updating cart quantity:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        itemCount,
        total,
        checkoutUrl,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        cartOpen,
        setCartOpen,
        isLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

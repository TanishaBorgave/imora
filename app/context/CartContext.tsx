"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  id: string;
  variantId: string;
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

  useEffect(() => {
    const savedCartId = localStorage.getItem("imora_shopify_cart_id");
    if (savedCartId) {
      setCartId(savedCartId);
      setIsLoading(true);
      fetch(`/api/cart?cartId=${encodeURIComponent(savedCartId)}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.cart) {
            parseAndSetCart(data.cart);
          } else {
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
    setCartOpen(true);
    try {
      let data;
      if (!cartId) {
        const res = await fetch("/api/cart", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ lines: [{ merchandiseId: variantId, quantity }] }),
        });
        data = await res.json();
      } else {
        const res = await fetch("/api/cart/items", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cartId, lines: [{ merchandiseId: variantId, quantity }] }),
        });
        data = await res.json();
      }
      if (data.cart) {
        parseAndSetCart(data.cart);
        return data.cart.checkoutUrl;
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
      const res = await fetch("/api/cart/items", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartId, lineIds: [lineId] }),
      });
      const data = await res.json();
      parseAndSetCart(data.cart);
    } catch (error) {
      console.error("Error removing from cart:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateCartQuantity = async (lineId: string, variantId: string, quantity: number) => {
    if (!cartId) return;
    if (quantity <= 0) {
      await removeFromCart(lineId);
      return;
    }
    setIsLoading(true);
    try {
      await fetch("/api/cart/items", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartId, lineIds: [lineId] }),
      });
      const res = await fetch("/api/cart/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartId, lines: [{ merchandiseId: variantId, quantity }] }),
      });
      const data = await res.json();
      parseAndSetCart(data.cart);
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

"use client";

import { useState } from "react";
import { useCart } from "../../context/CartContext";

export default function ProductActions({ product, slug }: { product: any, slug: string }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isBuying, setIsBuying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();
  const isEnvMissing = !process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || !process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;

  const getSelectedVariantId = () => {
    if (!product.variants || product.variants.length === 0) {
      return product.variantId || null;
    }
    if (product.variants.length === 1 && product.variants[0].title.toLowerCase() === "default title") {
      return product.variants[0].id;
    }
    if (!selectedSize) return null;
    const match = product.variants.find(
      (v: any) => v.title.toLowerCase() === selectedSize.toLowerCase()
    );
    return match ? match.id : product.variants[0].id;
  };

  const handleAddToCart = async () => {
    if (isEnvMissing) {
      setError("Shopify environment variables are missing on Vercel.");
      return;
    }
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      setError("Please select a size first.");
      return;
    }
    setError(null);
    setIsAdding(true);

    try {
      const variantId = getSelectedVariantId();
      if (!variantId) {
        throw new Error("Variant not found");
      }
      await addToCart(variantId, 1);
      // Optional: show a success toast or open cart drawer
    } catch (err) {
      console.error(err);
      setError("Failed to add to cart.");
    } finally {
      setIsAdding(false);
    }
  };

  const handleBuyNow = async () => {
    if (isEnvMissing) {
      setError("Shopify environment variables are missing.");
      return;
    }
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      setError("Please select a size first.");
      return;
    }
    setError(null);
    setIsBuying(true);

    try {
      const variantId = getSelectedVariantId();
      if (!variantId) throw new Error("Variant not found");
      
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lines: [{ merchandiseId: variantId, quantity: 1 }] }),
      });
      const data = await res.json();
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        throw new Error("No checkout URL returned");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to initiate checkout.");
      setIsBuying(false);
    }
  };

  return (
    <div>
      {/* Size Selector */}
      {product.sizes && product.sizes.length > 0 && (
        <div style={{ marginBottom: 32 }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9A8A7A", marginBottom: 10 }}>Size</p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {product.sizes.map((size: string) => (
              <button
                key={size}
                onClick={() => {
                  setSelectedSize(size);
                  setError(null);
                }}
                style={{
                  padding: "10px 20px",
                  border: selectedSize === size ? "2px solid #3B2F2F" : "1px solid #E0D6CC",
                  borderRadius: 2,
                  background: selectedSize === size ? "#3B2F2F" : "transparent",
                  color: selectedSize === size ? "#F8F3EE" : "#3B2F2F",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <p style={{
          color: "#c2410c",
          fontSize: "0.82rem",
          fontFamily: "var(--font-sans)",
          margin: "0 0 12px 0",
          fontWeight: 500
        }}>
          {error}
        </p>
      )}

      {/* Add to Cart */}
      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        style={{
          width: "100%",
          maxWidth: 400,
          padding: "16px 32px",
          background: isAdding ? "#5C4A4A" : "#3B2F2F",
          color: "#F8F3EE",
          fontFamily: "var(--font-sans)",
          fontSize: "0.78rem",
          fontWeight: 500,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          border: "none",
          borderRadius: 2,
          cursor: isAdding ? "not-allowed" : "pointer",
          transition: "background 0.3s",
          marginBottom: 16,
        }}
        onMouseEnter={(e) => { if (!isAdding) e.currentTarget.style.background = "#5C4A4A"; }}
        onMouseLeave={(e) => { if (!isAdding) e.currentTarget.style.background = "#3B2F2F"; }}
      >
        {isAdding ? "Adding..." : "Add to Cart"}
      </button>

      {/* Buy Now */}
      <button
        onClick={handleBuyNow}
        disabled={isBuying}
        style={{
          width: "100%",
          maxWidth: 400,
          padding: "16px 32px",
          background: "transparent",
          color: "#3B2F2F",
          fontFamily: "var(--font-sans)",
          fontSize: "0.78rem",
          fontWeight: 500,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          border: "1px solid #3B2F2F",
          borderRadius: 2,
          cursor: isBuying ? "not-allowed" : "pointer",
          transition: "all 0.3s",
        }}
        onMouseEnter={(e) => { if (!isBuying) { e.currentTarget.style.background = "#3B2F2F"; e.currentTarget.style.color = "#F8F3EE"; } }}
        onMouseLeave={(e) => { if (!isBuying) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#3B2F2F"; } }}
      >
        {isBuying ? "Processing..." : "Buy Now"}
      </button>
    </div>
  );
}

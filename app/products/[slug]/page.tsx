"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { allProducts } from "../../data/products";
import { useParams } from "next/navigation";
import { useCart } from "../../context/CartContext";
import { getProductBySlug } from "../../lib/shopify-products";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const initialProduct = allProducts.find((p) => p.slug === slug);

  const [product, setProduct] = useState<any>(initialProduct);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isBuying, setIsBuying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [demoMode, setDemoMode] = useState(false);

  const { addToCart } = useCart();
  const isEnvMissing = !process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || !process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;

  useEffect(() => {
    async function loadShopifyProduct() {
      if (!slug || isEnvMissing) {
        if (isEnvMissing) {
          setDemoMode(true);
        }
        return;
      }
      try {
        const shopifyProd = await getProductBySlug(slug);
        if (shopifyProd) {
          setProduct(shopifyProd);
          setDemoMode(false);
        } else {
          // Product handle not found in Shopify, enable demo fallback
          setDemoMode(true);
        }
      } catch (err) {
        console.error("Failed to load product from Shopify:", err);
        setDemoMode(true);
      }
    }
    loadShopifyProduct();
  }, [slug, isEnvMissing]);

  if (!product) {
    return (
      <>
        <Header />
        <main style={{ paddingTop: 120, textAlign: "center", minHeight: "60vh" }}>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", color: "#3B2F2F" }}>Product Not Found</h1>
          <Link href="/collections" style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "#D9A273", marginTop: 16, display: "inline-block" }}>← Back to Collections</Link>
        </main>
        <Footer />
      </>
    );
  }

  const relatedProducts = allProducts.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const getSelectedVariantId = () => {
    if (!product) return null;
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
      setError("Shopify environment variables are missing on Vercel. Please set them in settings.");
      return;
    }
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      setError("Please select a size first.");
      return;
    }
    setError(null);
    setIsAdding(true);

    try {
      let variantId = getSelectedVariantId();
      if (!variantId || demoMode) {
        alert(
          `Demo Mode: The product "${product.name}" (handle: "${slug}") is not in your Shopify store. We'll add a test snowboard product to your cart so you can test the cart and checkout pages!`
        );
        variantId = "gid://shopify/ProductVariant/49081459540196"; // Fallback test snowboard
      }

      const checkoutUrl = await addToCart(variantId);
      if (!checkoutUrl) {
        setError("Could not add item to cart. Please verify Shopify configuration.");
      }
    } catch (err) {
      console.error("Error adding to cart:", err);
      setError("Failed to add product to cart. Please try again.");
    } finally {
      setIsAdding(false);
    }
  };

  const handleBuyNow = async () => {
    if (isEnvMissing) {
      setError("Shopify environment variables are missing on Vercel. Please set them in settings.");
      return;
    }
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      setError("Please select a size first.");
      return;
    }
    setError(null);
    setIsBuying(true);

    try {
      let variantId = getSelectedVariantId();
      if (!variantId || demoMode) {
        alert(
          `Demo Mode: The product "${product.name}" (handle: "${slug}") is not in your Shopify store. We'll add a test snowboard product to your cart and take you directly to checkout!`
        );
        variantId = "gid://shopify/ProductVariant/49081459540196"; // Fallback test snowboard
      }

      const checkoutUrl = await addToCart(variantId);
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      } else {
        setError("Failed to generate checkout link. Please try again.");
      }
    } catch (err) {
      console.error("Error buying now:", err);
      setError("Failed to proceed to checkout. Please try again.");
    } finally {
      setIsBuying(false);
    }
  };

  return (
    <>
      <Header />
      <main style={{ paddingTop: 80 }}>
        {/* Breadcrumb */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 24px" }}>
          <nav style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "#9A8A7A", display: "flex", gap: 8, alignItems: "center" }}>
            <Link href="/" style={{ color: "#9A8A7A" }}>Home</Link>
            <span>/</span>
            <Link href="/collections" style={{ color: "#9A8A7A" }}>Collections</Link>
            <span>/</span>
            <span style={{ color: "#3B2F2F" }}>{product.name}</span>
          </nav>
        </div>

        {/* Product Detail */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 80px", display: "grid", gridTemplateColumns: "1fr", gap: 40 }} className="md:!grid-cols-2">
          {/* Image */}
          <div style={{ position: "relative", aspectRatio: "3 / 4", borderRadius: 32, overflow: "hidden", background: "#EDE5DA" }}>
            <Image src={product.image} alt={product.name} fill style={{ objectFit: "cover" }} priority />
            {product.badge && <span className="badge-sale" style={{ position: "absolute", top: 16, left: 16 }}>{product.badge}</span>}
          </div>

          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "20px 0" }}>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#D9A273", marginBottom: 12 }}>
              {product.category.replace(/-/g, " ")}
            </p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 400, color: "#3B2F2F", lineHeight: 1.3, marginBottom: 16 }}>
              {product.name}
            </h1>

            {/* Price */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 500, color: "#3B2F2F" }}>₹{product.price.toLocaleString("en-IN")}</span>
              {product.originalPrice && <span style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "#9A8A7A", textDecoration: "line-through" }}>₹{product.originalPrice.toLocaleString("en-IN")}</span>}
            </div>

            {/* Description */}
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "#5C4A4A", lineHeight: 1.8, marginBottom: 32, maxWidth: 480 }}>
              {product.description}
            </p>

            {/* Fabric */}
            {product.fabric && (
              <div style={{ marginBottom: 24 }}>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9A8A7A", marginBottom: 6 }}>Fabric</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "#3B2F2F" }}>{product.fabric}</p>
              </div>
            )}

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

            {/* Environment Variables Missing Warning */}
            {isEnvMissing && (
              <div style={{
                color: "#7f1d1d",
                fontSize: "0.78rem",
                fontFamily: "var(--font-sans)",
                margin: "0 0 16px 0",
                background: "#fef2f2",
                padding: "10px 14px",
                borderRadius: 4,
                border: "1px solid #fca5a5",
                lineHeight: 1.4,
                maxWidth: 400
              }}>
                <strong>⚠️ Vercel Configuration Missing:</strong>
                <div style={{ marginTop: 4 }}>
                  Your Shopify API credentials are not set up on Vercel. Please add <code>NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN</code> and <code>NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN</code> in your Vercel Project Settings, then redeploy.
                </div>
              </div>
            )}

            {/* Demo Mode Notice */}
            {demoMode && !isEnvMissing && (
              <div style={{
                color: "#b45309",
                fontSize: "0.75rem",
                fontFamily: "var(--font-sans)",
                margin: "0 0 16px 0",
                background: "rgba(251, 191, 36, 0.1)",
                padding: "10px 14px",
                borderRadius: 4,
                border: "1px solid rgba(251, 191, 36, 0.3)",
                lineHeight: 1.4,
                maxWidth: 400
              }}>
                <strong>Demo Mode:</strong> This product is not in your Shopify store yet. Adding it to cart will use a test product variant.
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
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 80px" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", fontWeight: 400, color: "#3B2F2F", marginBottom: 32 }}>You may also like</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }} className="md:!grid-cols-4">
              {relatedProducts.map((p) => (
                <div key={p.id}><Link href={`/products/${p.slug}`} className="hover-zoom" style={{ display: "block" }}>
                  <div style={{ position: "relative", aspectRatio: "3 / 4", borderRadius: 32, overflow: "hidden", background: "#EDE5DA", marginBottom: 12 }}>
                    <Image src={p.image} alt={p.name} fill sizes="25vw" style={{ objectFit: "cover" }} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "#3B2F2F", marginBottom: 4 }}>{p.name}</h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", fontWeight: 500, color: "#3B2F2F" }}>₹{p.price.toLocaleString("en-IN")}</p>
                </Link></div>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

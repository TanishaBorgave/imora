import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getProductBySlug, getAllProducts } from "../../lib/shopify-products";
import ProductActions from "./ProductActions";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return (
      <>
        <Header />
        <main style={{ paddingTop: 120, textAlign: "center", minHeight: "60vh" }}>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", color: "#3B2F2F" }}>Product Not Found</h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "#5C4A4A", marginTop: 8 }}>
            We couldn't find the product you're looking for.
          </p>
          <Link href="/collections" style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "#D9A273", marginTop: 16, display: "inline-block" }}>← Back to Collections</Link>
        </main>
        <Footer />
      </>
    );
  }

  // Fetch all products to find related ones by category
  const allProducts = await getAllProducts();
  const relatedProducts = allProducts.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <>
      <Header />
      <main style={{ paddingTop: 120, paddingBottom: 80 }}>
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "grid", gap: 40, marginBottom: 80 }} className="md:grid-cols-2 md:gap-16 items-start">
          
          {/* Product Images */}
          <div style={{ position: "sticky", top: 120 }}>
            <div style={{ position: "relative", aspectRatio: "3 / 4", borderRadius: 4, overflow: "hidden", background: "#EDE5DA", marginBottom: 16 }}>
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw" 
                style={{ objectFit: "cover" }} 
                priority 
              />
            </div>
            {product.hoverImage && (
              <div style={{ position: "relative", aspectRatio: "3 / 4", borderRadius: 4, overflow: "hidden", background: "#EDE5DA" }}>
                <Image 
                  src={product.hoverImage} 
                  alt={`${product.name} detail`} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw" 
                  style={{ objectFit: "cover" }} 
                />
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9A8A7A", marginBottom: 12 }}>
                {product.category.replace("-", " ")}
              </p>
              <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "2.2rem", fontWeight: 400, color: "#3B2F2F", lineHeight: 1.2, marginBottom: 16 }}>
                {product.name}
              </h1>
            </div>

            <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 32 }}>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 500, color: "#3B2F2F" }}>₹{product.price.toLocaleString("en-IN")}</span>
              {product.originalPrice && <span style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "#9A8A7A", textDecoration: "line-through" }}>₹{product.originalPrice.toLocaleString("en-IN")}</span>}
            </div>

            {/* Description */}
            {product.description && (
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "#5C4A4A", lineHeight: 1.8, marginBottom: 32, maxWidth: 480 }}>
                {product.description}
              </p>
            )}

            {/* Fabric */}
            {product.fabric && (
              <div style={{ marginBottom: 24 }}>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9A8A7A", marginBottom: 6 }}>Fabric</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "#3B2F2F" }}>{product.fabric}</p>
              </div>
            )}

            {/* Client Component for Interactions */}
            <ProductActions product={product} slug={slug} />

          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 80px" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", fontWeight: 400, color: "#3B2F2F", marginBottom: 32 }}>You may also like</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }} className="md:grid-cols-4">
              {relatedProducts.map((p) => (
                <div key={p.id}>
                  <Link href={`/products/${p.slug}`} className="hover-zoom" style={{ display: "block" }}>
                    <div style={{ position: "relative", aspectRatio: "3 / 4", borderRadius: 4, overflow: "hidden", background: "#EDE5DA", marginBottom: 12 }}>
                      <Image src={p.image} alt={p.name} fill sizes="25vw" style={{ objectFit: "cover" }} />
                    </div>
                    <h3 style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "#3B2F2F", marginBottom: 4 }}>{p.name}</h3>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", fontWeight: 500, color: "#3B2F2F" }}>₹{p.price.toLocaleString("en-IN")}</p>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

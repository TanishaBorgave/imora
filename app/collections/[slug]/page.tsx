import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import { categories } from "../../data/categories";
import { getProductsByCategory, getAllProducts } from "../../lib/shopify-products";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return { title: "Collection — Imora" };
  return {
    title: `${category.name} — Imora`,
    description: category.description,
  };
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  let products = await getProductsByCategory(slug);
  // If no products match the category exactly, show all products as placeholder
  if (products.length === 0) {
    const allProducts = await getAllProducts();
    products = allProducts.slice(0, 6);
  }

  return (
    <>
      <Header />
      <main style={{ paddingTop: 80 }}>
        {/* Page Header */}
        <section style={{ textAlign: "center", padding: "60px 24px 40px" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#D9A273", marginBottom: 12 }}>
            Collection
          </p>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#3B2F2F", marginBottom: 12 }}>
            {category.name}
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "#5C4A4A", maxWidth: 440, margin: "0 auto", lineHeight: 1.7 }}>
            {category.description}
          </p>
        </section>

        {/* Product Grid */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 80px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }} className="md:!grid-cols-3 lg:!grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

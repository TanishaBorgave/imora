import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { categories } from "../data/categories";

export const metadata = {
  title: "Collections — Imora",
  description: "Browse all Imora collections. Short kurtis, relaxed tops, kaftans, co-ord sets, indie dresses, and more.",
};

export default function CollectionsPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 80 }}>
        {/* Page Header */}
        <section style={{ textAlign: "center", padding: "60px 24px 40px" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#D9A273", marginBottom: 12 }}>
            Browse
          </p>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#3B2F2F", marginBottom: 12 }}>
            All Collections
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "#5C4A4A", maxWidth: 440, margin: "0 auto", lineHeight: 1.7 }}>
            Find your kind of comfort — from breezy kurtis to flowing kaftans.
          </p>
        </section>

        {/* Collections Grid */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 80px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }} className="md:!grid-cols-3">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/collections/${cat.slug}`} className="hover-zoom" style={{ display: "block", position: "relative", borderRadius: 15, overflow: "hidden", aspectRatio: "3 / 4", background: "#EDE5DA" }}>
                <Image src={cat.image} alt={cat.name} fill sizes="(max-width: 768px) 50vw, 33vw" style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(59,47,47,0.55) 0%, rgba(59,47,47,0.05) 60%)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px 20px" }}>
                  <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", fontWeight: 400, color: "#FFFFFF", marginBottom: 4 }}>{cat.name}</h2>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "rgba(255,255,255,0.7)" }}>{cat.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

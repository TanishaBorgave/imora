"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EditorialBanner() {
  return (
    <section id="editorial-banner" style={{ display: "grid", gridTemplateColumns: "1fr", minHeight: 400 }} className="md:!grid-cols-2">
      {/* Left: Text Block */}
      <div style={{ background: "var(--color-brown)", display: "flex", flexDirection: "column", justifyContent: "center", padding: "48px 24px", order: 1 }} className="md:!p-16 lg:!p-24">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--color-terracotta)", marginBottom: 16 }}>
            Our Story
          </p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 300, color: "#FFFFFF", lineHeight: 1.2, marginBottom: 16 }}>
            Made for the
            <br />
            <em style={{ fontStyle: "italic", color: "var(--color-terracotta)" }}>free & expressive</em>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: 420, marginBottom: 28 }}>
            Every piece at Imora is crafted with intention — natural fabrics, earthy palettes, and silhouettes that let you breathe. We believe comfort is the most beautiful thing you can wear.
          </p>
          <Link href="/about" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FFFFFF", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: 4, transition: "all 0.3s" }}>
            Read Our Story
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </motion.div>
      </div>

      {/* Right: Image */}
      <div style={{ position: "relative", minHeight: 300, order: 2 }}>
        <Image src="/images/hero.png" alt="Imora editorial" fill style={{ objectFit: "cover", objectPosition: "center 20%" }} />
      </div>
    </section>
  );
}

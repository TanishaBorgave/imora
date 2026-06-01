"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/images/product-1.png", alt: "Imora look 1" },
  { src: "/images/product-2.png", alt: "Imora look 2" },
  { src: "/images/product-3.png", alt: "Imora look 3" },
  { src: "/images/product-4.png", alt: "Imora look 4" },
  { src: "/images/product-5.png", alt: "Imora look 5" },
  { src: "/images/product-1.png", alt: "Imora look 6" },
];

export default function InstagramGallery() {
  return (
    <section id="instagram-gallery" style={{ padding: "48px 16px", background: "var(--color-cream)" }} className="md:!px-8">
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--color-terracotta)", marginBottom: 8 }}>
            @imora.in
          </p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 400, color: "var(--color-brown)" }}>
            Follow the mood
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 4 }} className="md:!grid-cols-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="hover-zoom"
              style={{ position: "relative", aspectRatio: "1", borderRadius: 2, overflow: "hidden", cursor: "pointer" }}
            >
              <Image src={img.src} alt={img.alt} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 33vw, 16vw" />
              <div style={{ position: "absolute", inset: 0, background: "rgba(59,47,47,0)", transition: "background 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(59,47,47,0.15)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(59,47,47,0)"; }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

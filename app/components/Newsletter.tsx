"use client";

import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section id="newsletter" className="section-padding" style={{ background: "var(--color-cream-dark)" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}
      >
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--color-terracotta)", marginBottom: 10 }}>
          Stay Close
        </p>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "var(--color-brown)", marginBottom: 12 }}>
          Join our circle
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--color-brown-light)", lineHeight: 1.7, marginBottom: 32 }}>
          Be the first to know about new collections, exclusive offers, and stories from the studio.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{ display: "flex", gap: 0, maxWidth: 440, margin: "0 auto", borderRadius: 4, overflow: "hidden", border: "1px solid var(--color-terracotta)" }}
        >
          <input
            type="email"
            placeholder="Your email address"
            required
            style={{ flex: 1, padding: "14px 18px", border: "none", background: "#FFFFFF", fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--color-brown)", outline: "none" }}
          />
          <button
            type="submit"
            style={{ padding: "14px 24px", background: "var(--color-terracotta)", color: "#FFFFFF", fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", border: "none", cursor: "pointer", transition: "background 0.3s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--color-terracotta-dark)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "var(--color-terracotta)"; }}
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PosterBanner() {
  return (
    <section
      id="poster-banner"
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        margin: "16px 0",
        borderRadius: 12,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "21 / 9",
          minHeight: 280,
        }}
      >
        <Image
          src="/images/product-5.png"
          alt="Imora — New Season"
          fill
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(26,26,26,0.75) 0%, rgba(26,26,26,0.3) 50%, rgba(217,162,115,0.2) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "32px 24px",
            zIndex: 1,
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.6rem",
              fontWeight: 500,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "var(--color-terracotta)",
              marginBottom: 14,
            }}
          >
            New Season · Summer 2025
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.6rem, 4vw, 3.2rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#FFFFFF",
              lineHeight: 1.2,
              maxWidth: 600,
              marginBottom: 12,
            }}
          >
            Soft silhouettes for
            <br />
            everyday stories
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.75rem, 1.2vw, 0.88rem)",
              color: "rgba(255,255,255,0.6)",
              maxWidth: 400,
              lineHeight: 1.7,
              marginBottom: 24,
            }}
          >
            Handcrafted in natural cotton. Designed to let you breathe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/collections"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "var(--font-sans)",
                fontSize: "0.68rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                border: "1px solid rgba(255,255,255,0.4)",
                borderRadius: 28,
                padding: "12px 28px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
              }}
            >
              Explore Collection
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

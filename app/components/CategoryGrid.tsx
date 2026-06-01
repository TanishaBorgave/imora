"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { categories } from "../data/categories";

export default function CategoryGrid() {
  return (
    <>
      <style>{`
        .cat-section {
          padding: 48px 0 56px;
          background: var(--color-cream);
          overflow: hidden;
        }

        .cat-scroll {
          display: flex;
          justify-content: center;
          gap: 24px;
          padding: 0 32px;
          overflow-x: auto;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .cat-scroll::-webkit-scrollbar { display: none; }

        /* ── Arch card ── */
        .arch-card {
          position: relative;
          flex-shrink: 0;
          width: clamp(260px, 28vw, 380px);
          aspect-ratio: 3 / 4;
          border-radius: 999px 999px 16px 16px;
          overflow: hidden;
          text-decoration: none;
          display: block;
          cursor: pointer;
        }

        /* Golden border — outer glow layer */
        .arch-border {
          position: absolute;
          inset: 0;
          border-radius: 999px 999px 16px 16px;
          padding: 4px;
          background: linear-gradient(
            160deg,
            rgba(217, 162, 115, 0.9) 0%,
            rgba(196, 154, 108, 0.7) 30%,
            rgba(217, 162, 115, 0.95) 60%,
            rgba(196, 139, 92, 0.8) 100%
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          z-index: 2;
          transition: all 0.4s ease;
        }

        /* Subtle outer glow */
        .arch-card::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 999px 999px 18px 18px;
          border: 1.5px solid rgba(217, 162, 115, 0.3);
          pointer-events: none;
          z-index: 1;
          transition: border-color 0.4s ease;
        }

        .arch-card:hover::before {
          border-color: rgba(217, 162, 115, 0.55);
        }

        .arch-card:hover .arch-border {
          background: linear-gradient(
            160deg,
            rgba(196, 139, 92, 1) 0%,
            rgba(217, 162, 115, 1) 40%,
            rgba(196, 139, 92, 0.95) 100%
          );
        }

        /* Image container */
        .arch-img {
          position: absolute;
          inset: 4px;
          border-radius: 995px 995px 12px 12px;
          overflow: hidden;
          z-index: 0;
        }

        .arch-card:hover .arch-img img {
          transform: scale(1.05);
        }

        .arch-img img {
          transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        }

        /* Bottom gradient for text */
        .arch-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 55%;
          background: linear-gradient(
            to top,
            rgba(30, 20, 15, 0.65) 0%,
            rgba(30, 20, 15, 0.3) 40%,
            transparent 100%
          );
          z-index: 1;
          border-radius: 0 0 12px 12px;
          pointer-events: none;
        }

        /* Text overlay */
        .arch-text {
          position: absolute;
          bottom: 32px;
          left: 0;
          right: 0;
          z-index: 3;
          text-align: center;
          padding: 0 20px;
        }

        .arch-title {
          font-family: var(--font-serif);
          font-size: clamp(1.2rem, 2.2vw, 1.75rem);
          font-weight: 500;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          line-height: 1.3;
          text-shadow: 0 2px 12px rgba(0,0,0,0.25);
        }

        @media (max-width: 1024px) {
          .cat-scroll {
            justify-content: flex-start;
            gap: 18px;
            padding: 0 20px;
          }
          .arch-card {
            width: clamp(220px, 65vw, 320px);
          }
        }

        @media (max-width: 640px) {
          .arch-card {
            width: clamp(200px, 72vw, 300px);
          }
          .arch-text {
            bottom: 24px;
          }
        }
      `}</style>

      <section id="shop-by-category" className="cat-section">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: "center",
            fontFamily: "var(--font-sans)",
            fontSize: "0.58rem",
            fontWeight: 500,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--color-terracotta)",
            marginBottom: 32,
          }}
        >
          Shop by Category
        </motion.p>

        {/* Arch cards row */}
        <div className="cat-scroll">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <Link href={`/collections/${cat.slug}`} className="arch-card">
                {/* Golden border */}
                <div className="arch-border" />

                {/* Image */}
                <div className="arch-img">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 640px) 72vw, (max-width: 1024px) 40vw, 380px"
                    style={{ objectFit: "cover", objectPosition: "center 15%" }}
                  />
                </div>

                {/* Gradient overlay */}
                <div className="arch-gradient" />

                {/* Text */}
                <div className="arch-text">
                  <h3 className="arch-title">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

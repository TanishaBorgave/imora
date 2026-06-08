"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "../data/products";

interface Props {
  title: string;
  subtitle?: string;
  label?: string;
  products: Product[];
  viewAllHref?: string;
}

export default function ProductCarousel({
  title,
  subtitle,
  label,
  products,
  viewAllHref,
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <style>{`
        /* ── Premium product card ── */
        .pcard {
       
          display: block;
          text-decoration: none;
          position: relative;
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
          
        }

        .pcard:hover {
          transform: scale(1.015);
        }

        /* Image frame — sharp geometric */
        .pcard-frame {
          position: relative;
          aspect-ratio: 3 / 4.2;
          border-radius: 20px;
          border: 2px solid rgba(196, 139, 92, 1);
          overflow: hidden;
          background: #EDE5DA;
          margin-bottom: 16px;
          box-shadow:
            0 4px 16px rgba(59, 47, 47, 0.08),
            0 1px 3px rgba(59, 47, 47, 0.06);
          transition: all 0.5s ease;
        }

        .pcard:hover .pcard-frame {
          box-shadow:
            0 16px 36px rgba(59, 47, 47, 0.16),
            0 4px 12px rgba(217, 162, 115, 0.1);
        }

        /* Inner ring inside the frame */
        .pcard-ring {
          position: absolute;
          inset: 8px;
          border: 1px solid rgba(217, 162, 115, 0.15);
          border-radius: 0;
          z-index: 3;
          pointer-events: none;
          transition: all 0.5s ease;
        }

        .pcard:hover .pcard-ring {
          border-color: rgba(217, 162, 115, 0.45);
          inset: 6px;
        }

        /* Wishlist Heart Button */
        .pcard-heart {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 5;
          width: 32px;
          height: 32px;
          border-radius: 0;
          background: rgba(255, 255, 255, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          opacity: 0;
          transform: translateY(-4px);
          transition: all 0.35s ease;
        }

        .pcard:hover .pcard-heart {
          opacity: 1;
          transform: translateY(0);
        }

        .pcard-heart:hover {
          background: #FFFFFF;
          transform: scale(1.1);
        }

        /* Ribbon Sale Badge */
        .pcard-ribbon {
          position: absolute;
          top: 14px;
          left: 14px;
          z-index: 4;
          background: var(--color-terracotta);
          color: #FFFFFF;
          font-family: var(--font-sans);
          font-size: 0.58rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 10px;
          box-shadow: 0 4px 10px rgba(217, 162, 115, 0.3);
        }

        /* Quick-view glassmorphism bar */
        .pcard-quickview {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 4;
          padding: 12px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(8px);
          border-top: 1px solid rgba(217, 162, 115, 0.15);
          text-align: center;
          transform: translateY(100%);
          transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .pcard:hover .pcard-quickview {
          transform: translateY(0);
        }

        .pcard-quickview span {
          font-family: var(--font-sans);
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--color-brown);
        }

        /* Product details styling */
        .pcard-info {
          text-align: center;
          padding: 0 8px;
        }

        .pcard-name {
          font-family: var(--font-serif);
          font-size: 1.05rem;
          font-weight: 400;
          color: var(--color-brown);
          line-height: 1.45;
          margin-bottom: 8px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.3s ease;
        }

        .pcard:hover .pcard-name {
          color: var(--color-terracotta);
        }

        .pcard-price-row {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .pcard-price {
          font-family: var(--font-sans);
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-brown);
        }

        .pcard-original {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          color: #9A8A7A;
          text-decoration: line-through;
        }

        .pcard-discount {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 600;
          color: #6B8F5E;
        }

        .pcard-fabric {
          margin-top: 6px;
          font-family: var(--font-body);
          font-size: 0.78rem;
          color: var(--color-brown-light);
          letter-spacing: 0.06em;
          opacity: 0.75;
          text-transform: uppercase;
        }

        /* ── Carousel Nav Arrows ── */
        .pc-arrow {
          width: 38px;
          height: 38px;
          border-radius: 0;
          border: 1.5px solid var(--color-divider);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-brown);
          transition: all 0.35s ease;
          background: transparent;
          cursor: pointer;
        }

        .pc-arrow:hover {
          background: var(--color-brown);
          color: #FFFFFF;
          border-color: var(--color-brown);
          box-shadow: 0 4px 12px rgba(59, 47, 47, 0.12);
        }
      `}</style>

      <section
        style={{ padding: "56px 16px", overflow: "hidden" }}
        className="md:!px-8 lg:!px-16"
      >
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: 32,
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {label && (
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.6rem",
                    fontWeight: 500,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "var(--color-terracotta)",
                    marginBottom: 8,
                  }}
                >
                  {label}
                </p>
              )}
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
                  fontWeight: 400,
                  color: "var(--color-brown)",
                }}
              >
                {title}
              </h2>
              {subtitle && (
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    color: "var(--color-brown-light)",
                    marginTop: 6,
                    maxWidth: 400,
                    lineHeight: 1.6,
                  }}
                >
                  {subtitle}
                </p>
              )}
            </motion.div>

            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              {viewAllHref && (
                <Link
                  href={viewAllHref}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--color-brown)",
                    borderBottom: "1px solid var(--color-terracotta)",
                    paddingBottom: 3,
                  }}
                >
                  View All
                </Link>
              )}
              <div
                style={{ display: "flex", gap: 6 }}
                className="hidden sm:flex"
              >
                <button
                  onClick={() => scroll("left")}
                  aria-label="Scroll left"
                  className="pc-arrow"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M19 12H5" />
                    <path d="m12 19-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => scroll("right")}
                  aria-label="Scroll right"
                  className="pc-arrow"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="no-scrollbar"
            style={{
              display: "flex",
              gap: 24,
              overflowX: "auto",
              paddingBottom: 12,
              paddingTop: 4,
              paddingRight: 12,
            }}
          >
            {products.map((product, i) => {
              const discount = product.originalPrice
                ? Math.round(
                    ((product.originalPrice - product.price) /
                      product.originalPrice) *
                      100
                  )
                : 0;

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  style={{
                    width: "clamp(180px, 40vw, 255px)",
                    flexShrink: 0,
                  }}
                >
                  <Link
                    href={`/products/${product.slug}`}
                    className="pcard"
                  >
                    {/* Sharp geometric image container */}
                    <div className="pcard-frame">
                      {/* Inner gold decorative ring */}
                      <div className="pcard-ring" />

                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 70vw, (max-width: 1024px) 40vw, 255px"
                        style={{
                          objectFit: "cover",
                          objectPosition: "center 15%",
                        }}
                        className="transition-transform duration-700 ease-out hover:scale-105"
                      />

                      {/* Wishlist Heart Button */}
                      <button
                        className="pcard-heart"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                        aria-label="Add to wishlist"
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="var(--color-terracotta)"
                          strokeWidth="1.8"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                      </button>

                      {/* Ribbon Sale Badge */}
                      {product.badge && (
                        <div className="pcard-ribbon">{product.badge}</div>
                      )}

                      {/* Glassmorphic Quick View */}
                      <div className="pcard-quickview">
                        <span>Quick View →</span>
                      </div>
                    </div>

                    {/* Product Metadata Info */}
                    <div className="pcard-info">
                      <h3 className="pcard-name">{product.name}</h3>
                      <div className="pcard-price-row">
                        <span className="pcard-price">
                          ₹{product.price.toLocaleString("en-IN")}
                        </span>
                        {product.originalPrice && (
                          <span className="pcard-original">
                            ₹{product.originalPrice.toLocaleString("en-IN")}
                          </span>
                        )}
                        {discount > 0 && (
                          <span className="pcard-discount">
                            ({discount}% OFF)
                          </span>
                        )}
                      </div>
                      {product.fabric && (
                        <p className="pcard-fabric">{product.fabric}</p>
                      )}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

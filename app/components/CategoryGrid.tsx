"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { categories } from "../data/categories";

export default function CategoryGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isJumpingRef = useRef(false);

  // Duplicate categories to form 3 groups: [Group A, Group B, Group C]
  const repeatedCategories = [
    ...categories.map((cat, idx) => ({ ...cat, uniqueKey: `${cat.slug}-copy-0-${idx}` })),
    ...categories.map((cat, idx) => ({ ...cat, uniqueKey: `${cat.slug}-copy-1-${idx}` })),
    ...categories.map((cat, idx) => ({ ...cat, uniqueKey: `${cat.slug}-copy-2-${idx}` })),
  ];

  // Set up the initial scroll position to the start of Group B.
  useEffect(() => {
    const container = scrollRef.current;
    if (!container || categories.length === 0) return;

    const groupLength = categories.length;

    const setInitialScroll = () => {
      const children = container.children;
      if (children.length < groupLength * 3) return;

      const firstGroupStart = (children[0] as HTMLElement).offsetLeft;
      const secondGroupStart = (children[groupLength] as HTMLElement).offsetLeft;
      
      isJumpingRef.current = true;
      container.scrollLeft = secondGroupStart - firstGroupStart;

      setTimeout(() => {
        isJumpingRef.current = false;
      }, 50);
    };

    setInitialScroll();

    // Fallbacks to handle late image/font loads shifting offsets
    const timer1 = setTimeout(setInitialScroll, 100);
    const timer2 = setTimeout(setInitialScroll, 500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container || isJumpingRef.current || categories.length === 0) return;

    const groupLength = categories.length;
    const children = container.children;
    if (children.length < groupLength * 3) return;

    const firstGroupStart = (children[0] as HTMLElement).offsetLeft;
    const secondGroupStart = (children[groupLength] as HTMLElement).offsetLeft;
    const thirdGroupStart = (children[groupLength * 2] as HTMLElement).offsetLeft;
    const groupWidth = thirdGroupStart - secondGroupStart;

    const currentScroll = container.scrollLeft;
    const boundaryLeft = secondGroupStart - firstGroupStart;
    const boundaryRight = thirdGroupStart - firstGroupStart;

    // Buffer to handle floating point rounding differences safely
    if (currentScroll < boundaryLeft - 10) {
      isJumpingRef.current = true;
      container.scrollLeft = currentScroll + groupWidth;
      setTimeout(() => {
        isJumpingRef.current = false;
      }, 50);
    } else if (currentScroll >= boundaryRight - 10) {
      isJumpingRef.current = true;
      container.scrollLeft = currentScroll - groupWidth;
      setTimeout(() => {
        isJumpingRef.current = false;
      }, 50);
    }
  };
  return (
    <>
      <style>{`
        .cat-section {
          padding: 48px 0 56px;
          background: var(--color-cream);
          overflow: hidden;
        }

        /* OUTER WRAPPER */
        .cat-container {
          width: min(97vw, 1650px);
          margin: 0 auto;
        }

        /* SCROLL TRACK */
        .cat-scroll {
          display: flex;
          gap: 24px;
          margin-left:0.7rem;
          overflow-x: auto;
          overflow-y: hidden;

          padding-left: 8px;
          padding-right: 120px;
          padding-bottom: 10px;

          scrollbar-width: none;
          -ms-overflow-style: none;
          position: relative;

          mask-image: linear-gradient(
            to right,
            black 0%,
            black 93%,
            transparent 100%
          );

          -webkit-mask-image: linear-gradient(
            to right,
            black 0%,
            black 93%,
            transparent 100%
          );
        }

        .cat-scroll::-webkit-scrollbar {
          display: none;
        }

        /* Extra space after last card */
        .cat-scroll::after {
          content: "";
          flex: 0 0 80px;
        }

        .cat-card-wrapper {
          flex-shrink: 0;
        }

        /* ARCH CARD */
        .arch-card {
          position: relative;
          width: clamp(250px, 16vw, 300px);
          aspect-ratio: 3 / 4;

          border-radius: 999px 999px 16px 16px;
          overflow: hidden;

          display: block;
          text-decoration: none;
          cursor: pointer;

          /* Outer border directly on the card to prevent desync */
          border: 1.5px solid rgba(217, 162, 115, 0.3);
          transition: border-color 0.4s ease;
        }

        .arch-card:hover {
          border-color: rgba(217, 162, 115, 0.55);
        }

        .arch-border {
          position: absolute;
          inset: 3px; /* Offset inward by 3px */
          border-radius: 996px 996px 13px 13px; /* Concentric radius */
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

        .arch-card:hover .arch-border {
          background: linear-gradient(
            160deg,
            rgba(196, 139, 92, 1) 0%,
            rgba(217, 162, 115, 1) 40%,
            rgba(196, 139, 92, 0.95) 100%
          );
        }

        .arch-img {
          position: absolute;
          inset: 7px; /* Offset inward by 7px */

          border-radius: 992px 992px 9px 9px; /* Concentric radius */
          overflow: hidden;

          z-index: 0;
        }

        .arch-img img {
          transition: transform 0.7s cubic-bezier(
            0.25,
            0.46,
            0.45,
            0.94
          ) !important;
        }

        .arch-card:hover .arch-img img {
          transform: scale(1.05);
        }

        .arch-gradient {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;

          height: 55%;

          background: linear-gradient(
            to top,
            rgba(30, 20, 15, 0.65) 0%,
            rgba(30, 20, 15, 0.3) 40%,
            transparent 100%
          );

          z-index: 1;
          pointer-events: none;

          border-radius: 0 0 12px 12px;
        }

        .arch-text {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 32px;

          text-align: center;
          padding: 0 20px;

          z-index: 3;
        }

        .arch-title {
          font-family: var(--font-serif);
          font-size: clamp(1.2rem, 2vw, 1.7rem);
          font-weight: 500;

          color: #fff;

          text-transform: uppercase;
          letter-spacing: 0.08em;
          line-height: 1.3;

          text-shadow: 0 2px 12px rgba(0,0,0,0.25);
        }

        /* TABLET */
        @media (max-width: 1024px) {
          .cat-scroll {
            gap: 18px;
            padding-right: 80px;
          }

          .arch-card {
            width: clamp(220px, 42vw, 320px);
          }
        }

        /* MOBILE */
        @media (max-width: 640px) {
          .cat-scroll {
            gap: 20px;

            scroll-snap-type: x mandatory;

            padding-left: 12px;
            padding-right: 32px;
          }

          .cat-card-wrapper {
            scroll-snap-align: start;
            width: calc(100vw - 56px);
          }

          .arch-card {
          padding-left: 20px;
            width: 100%;
          }

          .arch-text {
            bottom: 24px;
          }
        }
      `}</style>

      <section id="shop-by-category" className="cat-section">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: "center",
            fontFamily: "var(--font-sans)",
            fontSize: "1rem",
            fontWeight: 500,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--color-terracotta)",
            marginBottom: 32,
          }}
        >
          Shop by Category
        </motion.p>

        <div className="cat-container">
          <div ref={scrollRef} onScroll={handleScroll} className="cat-scroll">
            {repeatedCategories.map((cat, i) => (
              <motion.div
                key={cat.uniqueKey}
                className="cat-card-wrapper"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: (i % categories.length) * 0.1 }}
              >
                <Link
                  href={`/collections/${cat.slug}`}
                  className="arch-card"
                >
                  <div className="arch-border" />

                  <div className="arch-img">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="(max-width: 640px) 72vw,
                             (max-width: 1024px) 40vw,
                             300px"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center 15%",
                      }}
                    />
                  </div>

                  <div className="arch-gradient" />

                  <div className="arch-text">
                    <h3 className="arch-title">
                      {cat.name}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Look {
  id: string;
  title: string;
  video: string;
  poster: string;
  href: string;
}

const looks: Look[] = [
  {
    id: "look-1",
    title: "Ahana Sage Block Print Short Kurti",
    video: "https://videos.pexels.com/video-files/8467472/8467472-sd_540_960_25fps.mp4",
    poster: "/images/product-1.png",
    href: "/products/ahana-sage-block-print-short-kurti",
  },
  {
    id: "look-2",
    title: "Meera Terracotta Flowing Cotton Kaftan",
    video: "https://videos.pexels.com/video-files/7685601/7685601-hd_1080_1920_30fps.mp4",
    poster: "/images/product-2.png",
    href: "/products/meera-terracotta-flowing-cotton-kaftan",
  },
  {
    id: "look-3",
    title: "Rumi Mustard Oversized Relaxed Top",
    video: "https://videos.pexels.com/video-files/7685324/7685324-hd_1080_1920_30fps.mp4",
    poster: "/images/product-3.png",
    href: "/products/rumi-mustard-oversized-relaxed-top",
  },
  {
    id: "look-4",
    title: "Noor Indigo Block Print Midi Dress",
    video: "https://videos.pexels.com/video-files/6146197/6146197-hd_1080_1920_25fps.mp4",
    poster: "/images/product-4.png",
    href: "/products/noor-indigo-block-print-midi-dress",
  },
  {
    id: "look-5",
    title: "Tara Stripe Cotton Co-ord Set",
    video: "https://videos.pexels.com/video-files/6146187/6146187-sd_506_960_25fps.mp4",
    poster: "/images/product-5.png",
    href: "/products/tara-stripe-cotton-coord-set",
  },
];

export default function ShopTheLook() {
  const [active, setActive] = useState(0);
  const total = looks.length;

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + total) % total);
  }, [total]);

  /* Calculate position of each card relative to active */
  function getOffset(index: number): number {
    let diff = index - active;
    if (diff > Math.floor(total / 2)) diff -= total;
    if (diff < -Math.floor(total / 2)) diff += total;
    return diff;
  }

  return (
    <>
      <style>{`
        /* ── Section ── */
        .stl-section {
          padding: 64px 0 80px;
          background: var(--color-cream);
          overflow: hidden;
        }

        .stl-heading {
          text-align: center;
          margin-bottom: 48px;
        }

        .stl-label {
          font-family: var(--font-sans);
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--color-terracotta);
          margin-bottom: 12px;
        }

        .stl-title {
          font-family: var(--font-serif);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 400;
          color: var(--color-brown);
          line-height: 1.15;
        }

        /* ── Carousel container ── */
        .stl-carousel {
          position: relative;
          width: 100%;
          height: clamp(480px, 60vw, 680px);
          perspective: 1400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── Individual card (Sharp Geometric) ── */
        .stl-card {
          position: absolute;
          width: clamp(260px, 30vw, 380px);
          height: clamp(400px, 50vw, 600px);
          border-radius: 0;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.7s cubic-bezier(0.4, 0.0, 0.2, 1);
          box-shadow: 0 12px 40px rgba(59, 47, 47, 0.15);
          text-decoration: none;
          display: block;
          background: #000;
        }

        .stl-card.is-active {
          z-index: 5;
          box-shadow:
            0 24px 70px rgba(59, 47, 47, 0.25),
            0 0 0 1px rgba(217, 162, 115, 0.4);
        }

        .stl-card:not(.is-active) {
          filter: brightness(0.7) saturate(0.8);
        }

        .stl-card:not(.is-active):hover {
          filter: brightness(0.85) saturate(0.95);
        }

        /* ── Card Video / Image ── */
        .stl-card-media {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .stl-card.is-active:hover .stl-card-media {
          transform: scale(1.03);
        }

        /* ── Bottom overlay (active card only) ── */
        .stl-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 56px 24px 32px;
          background: linear-gradient(
            to top,
            rgba(20, 15, 10, 0.95) 0%,
            rgba(20, 15, 10, 0.5) 60%,
            transparent 100%
          );
          z-index: 2;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .stl-product-name {
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.95);
          letter-spacing: 0.04em;
          line-height: 1.5;
          max-width: 260px;
        }

        .stl-view-btn {
          display: inline-block;
          padding: 12px 42px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(8px);
          color: #FFFFFF;
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          border-radius: 0;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.25);
        }

        .stl-view-btn:hover {
          background: var(--color-terracotta);
          border-color: var(--color-terracotta);
        }

        /* ── Nav controls ── */
        .stl-nav-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          margin-top: 40px;
        }

        .stl-nav {
          width: 48px;
          height: 48px;
          border-radius: 0;
          background: transparent;
          border: 1px solid rgba(217, 162, 115, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: var(--color-brown);
          font-size: 1.2rem;
        }

        .stl-nav:hover {
          background: var(--color-brown);
          color: #fff;
          border-color: var(--color-brown);
        }

        /* ── Dots ── */
        .stl-dots {
          display: flex;
          justify-content: center;
          gap: 10px;
          align-items: center;
        }

        .stl-dot {
          width: 8px;
          height: 8px;
          border-radius: 0;
          background: var(--color-divider);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all 0.35s ease;
        }

        .stl-dot.is-active {
          width: 32px;
          height: 4px;
          background: var(--color-terracotta);
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .stl-carousel {
            height: clamp(420px, 85vw, 520px);
          }
          .stl-card {
            width: clamp(240px, 60vw, 300px);
            height: clamp(360px, 75vw, 460px);
          }
          .stl-nav {
            width: 42px;
            height: 42px;
            font-size: 1rem;
          }
        }
      `}</style>

      <section id="shop-the-look" className="stl-section">
        <motion.div
          className="stl-heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="stl-label">Styled for you</p>
          <h2 className="stl-title">Shop The Look</h2>
        </motion.div>

        {/* 3D Carousel */}
        <div className="stl-carousel">
          {looks.map((look, i) => {
            const offset = getOffset(i);
            const isActive = offset === 0;
            const absOffset = Math.abs(offset);

            if (absOffset > 2) return null;

            const translateX = offset * (typeof window !== "undefined" && window.innerWidth < 768 ? 180 : 250);
            const scale = isActive ? 1 : absOffset === 1 ? 0.75 : 0.55;
            const rotateY = offset * -12;
            const zIndex = 5 - absOffset;
            const opacity = absOffset > 2 ? 0 : 1;

            return (
              <div
                key={look.id}
                className={`stl-card ${isActive ? "is-active" : ""}`}
                style={{
                  transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                  zIndex,
                  opacity,
                }}
                onClick={() => {
                  if (!isActive) setActive(i);
                }}
              >
                {/* Media: Video if active, Image poster if inactive for performance */}
                {isActive ? (
                  <video
                    src={look.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="stl-card-media"
                    poster={look.poster}
                  />
                ) : (
                  <Image
                    src={look.poster}
                    alt={look.title}
                    fill
                    sizes="(max-width: 768px) 60vw, 380px"
                    style={{ objectFit: "cover", objectPosition: "center 15%" }}
                    className="stl-card-media"
                  />
                )}

                {/* Bottom overlay — only on active card */}
                {isActive && (
                  <motion.div
                    className="stl-overlay"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                  >
                    <p className="stl-product-name">{look.title}</p>
                    <Link href={look.href} className="stl-view-btn">
                      View
                    </Link>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <div className="stl-nav-container">
          <button
            className="stl-nav"
            onClick={prev}
            aria-label="Previous look"
          >
            ‹
          </button>
          <div className="stl-dots">
            {looks.map((_, i) => (
              <button
                key={i}
                className={`stl-dot ${i === active ? "is-active" : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Go to look ${i + 1}`}
              />
            ))}
          </div>
          <button
            className="stl-nav"
            onClick={next}
            aria-label="Next look"
          >
            ›
          </button>
        </div>
      </section>
    </>
  );
}

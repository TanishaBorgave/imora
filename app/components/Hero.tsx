"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { image: "/images/hero-new1.png" },
  { image: "/images/hero-new2.png" },
  { image: "/images/hero-new3.png" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <>
      <style>{`
        .hero-banner {
          position: relative;
          width: 100%;
          height: min(75vh, 620px);
          overflow: hidden;
          background: #1A1A1A;
        }
        .hero-banner-content {
          position: absolute;
          right: 8%;
          top: 50%;
          transform: translateY(-50%);
          text-align: right;
          max-width: 420px;
          z-index: 3;
        }
        .hero-shop-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 40px;
          background: #FFFFFF;
          border: none;
          border-radius: 28px;
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--color-brown);
          text-decoration: none;
          transition: all 0.35s ease;
          cursor: pointer;
        }
        .hero-shop-btn:hover {
          background: var(--color-terracotta);
          color: #FFFFFF;
        }
        .hero-indicator {
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all 0.4s ease;
        }
        @media (max-width: 768px) {
          .hero-banner {
            height: min(60vh, 480px);
          }
          .hero-banner-content {
            right: auto;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            max-width: 90%;
          }
        }
      `}</style>

      <section id="hero" className="hero-banner">
        {/* Background Image Slideshow */}
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ position: "absolute", inset: 0 }}
          >
            <Image
              src={slides[current].image}
              alt="Imora collection"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "left 10%" }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Top gradient overlay for transparent header visibility */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "140px",
            background:
              "linear-gradient(to bottom, rgba(13,13,13,0.5) 0%, rgba(13,13,13,0.25) 60%, transparent 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to left, rgba(26,26,26,0.85) 0%, rgba(26,26,26,0.5) 40%, rgba(26,26,26,0.08) 70%, transparent 100%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* Bottom gradient */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "30%",
            background:
              "linear-gradient(to top, rgba(26,26,26,0.5) 0%, transparent 100%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* Text Content */}
        <div className="hero-banner-content">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              height: 1,
              background: "#FFFFFF",
              opacity: 0.8,
              marginBottom: 20,
              marginLeft: "auto",
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.6rem",
              fontWeight: 500,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              marginBottom: 14,
            }}
          >
            New Collection
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4 }}
            style={{
              fontFamily: "var(--font-serif, Georgia, serif)",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              color: "#FFFFFF",
              marginBottom: 12,
            }}
          >
            The Summer Edit
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.85rem",
              fontWeight: 300,
              lineHeight: 1.6,
              color: "#FFFFFF",
              marginBottom: 28,
            }}
          >
            Effortlessly elegant kurtis
            <br />
            crafted for every occasion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/collections" className="hero-shop-btn">
              Shop Now
            </Link>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div
          style={{
            position: "absolute",
            bottom: 24,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 8,
            zIndex: 3,
          }}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="hero-indicator"
              style={{
                width: current === i ? 28 : 8,
                height: 8,
                borderRadius: 4,
                background:
                  current === i ? "#FFFFFF" : "rgba(255,255,255,0.35)",
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
}

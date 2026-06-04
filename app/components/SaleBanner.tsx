"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function useCountdown(targetDate: Date) {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0) return;
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);
  return t;
}

export default function SaleBanner() {
  const [saleEnd] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    d.setHours(23, 59, 59, 0);
    return d;
  });
  const { d, h, m, s } = useCountdown(saleEnd);

  return (
    <>
      <style>{`
        .sale-hero {
          position: relative;
          min-height: 520px;
          display: flex;
          overflow: hidden;
        }

        /* Left text panel */
        .sale-hero-text {
          position: relative;
          z-index: 2;
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 64px 56px 64px 64px;
          background: var(--color-brown);
        }

        /* Decorative corner accent */
        .sale-hero-text::after {
          content: '';
          position: absolute;
          top: 32px;
          left: 32px;
          right: 32px;
          bottom: 32px;
          border: 1px solid rgba(217, 162, 115, 0.12);
          pointer-events: none;
        }

        .sale-label {
          font-family: var(--font-sans);
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--color-terracotta);
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }

        .sale-headline {
          font-family: var(--font-serif);
          font-size: clamp(2.8rem, 5.5vw, 4.5rem);
          font-weight: 300;
          color: #fff;
          line-height: 1.05;
          margin-bottom: 8px;
          position: relative;
          z-index: 1;
        }

        .sale-headline em {
          font-style: italic;
          display: block;
          color: var(--color-terracotta);
          font-size: 0.65em;
          margin-top: 4px;
        }

        .sale-offer {
          font-family: var(--font-sans);
          font-size: clamp(0.7rem, 1.2vw, 0.85rem);
          font-weight: 400;
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.02em;
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 340px;
          position: relative;
          z-index: 1;
        }

        /* Countdown — elegant inline */
        .sale-timer-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 36px;
          position: relative;
          z-index: 1;
        }

        .sale-timer-label {
          font-family: var(--font-sans);
          font-size: 0.55rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }

        .sale-timer-digits {
          display: flex;
          gap: 4px;
          align-items: baseline;
          font-family: var(--font-serif);
          font-size: 1.4rem;
          font-weight: 300;
          color: rgba(255,255,255,0.8);
          letter-spacing: 0.02em;
          font-variant-numeric: tabular-nums;
        }

        .sale-timer-digits .sep {
          opacity: 0.25;
          margin: 0 2px;
          font-size: 1rem;
        }

        .sale-timer-digits .unit {
          font-family: var(--font-sans);
          font-size: 0.5rem;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          opacity: 0.4;
          margin-left: 1px;
          margin-right: 6px;
        }

        .sale-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 36px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.25);
          color: #fff;
          font-family: var(--font-sans);
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.4s ease;
          position: relative;
          z-index: 1;
        }

        .sale-cta:hover {
          background: rgba(255,255,255,0.08);
          border-color: var(--color-terracotta);
          color: var(--color-terracotta);
          gap: 14px;
        }

        /* Right image panel */
        .sale-hero-img {
          position: relative;
          width: 50%;
          min-height: 520px;
        }

        /* Subtle gradient from left for text readability overlap */
        .sale-hero-img::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 80px;
          background: linear-gradient(to right, var(--color-brown), transparent);
          z-index: 1;
          pointer-events: none;
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .sale-hero {
            flex-direction: column-reverse;
            min-height: auto;
          }

          .sale-hero-text {
            width: 100%;
            padding: 40px 24px 48px;
          }

          .sale-hero-text::after {
            top: 20px;
            left: 16px;
            right: 16px;
            bottom: 20px;
          }

          .sale-hero-img {
            width: 100%;
            min-height: 320px;
          }

          .sale-hero-img::before {
            display: none;
          }

          .sale-headline {
            font-size: 2.4rem;
          }

          .sale-timer-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .sale-hero-text {
            padding: 48px 36px;
          }
        }
      `}</style>

      <section id="flash-sale" className="sale-hero">
        {/* Left — Text */}
        <div className="sale-hero-text">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="sale-label">End of Season</p>
            <h2 className="sale-headline">
              Up to 40%
              <em>off everything</em>
            </h2>
            <p className="sale-offer">
              Natural fabrics, thoughtful designs — now at prices that make saying yes even easier.
            </p>

            <div className="sale-timer-row">
              <span className="sale-timer-label">Ends in</span>
              <div className="sale-timer-digits">
                {String(d).padStart(2, "0")}<span className="unit">d</span>
                <span className="sep">:</span>
                {String(h).padStart(2, "0")}<span className="unit">h</span>
                <span className="sep">:</span>
                {String(m).padStart(2, "0")}<span className="unit">m</span>
                <span className="sep">:</span>
                {String(s).padStart(2, "0")}<span className="unit">s</span>
              </div>
            </div>

            <Link href="/collections" className="sale-cta">
              Shop the Sale
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Right — Image */}
        <div className="sale-hero-img">
          <Image
            src="/images/product-5.png"
            alt="End of season sale — handpicked pieces"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover", objectPosition: "center 15%" }}
          />
        </div>
      </section>
    </>
  );
}

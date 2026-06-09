"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Priya S.",
    location: "Mumbai",
    rating: 5,
    product: "Sage Green Short Kurti",
    text: "Absolutely in love with the fabric quality! The fit is perfect and I've received so many compliments. Will definitely be ordering more.",
  },
  {
    name: "Ananya R.",
    location: "Delhi",
    rating: 5,
    product: "Rust Block-Print Kaftan",
    text: "This kaftan is everything — so breezy, so elegant. I wore it to a brunch and everyone wanted to know where I got it from.",
  },
  {
    name: "Meera K.",
    location: "Bangalore",
    rating: 5,
    product: "Ivory Chikankari Top",
    text: "The craftsmanship is incredible for this price point. You can feel the love in every stitch. Imora has become my go-to for everyday elegance.",
  },
  {
    name: "Kavya D.",
    location: "Jaipur",
    rating: 4,
    product: "Mustard Relaxed Kurti",
    text: "Beautiful color, exactly as shown. The fabric is soft and breathable — perfect for Indian summers. Slightly long for my height but still gorgeous.",
  },
  {
    name: "Ritu M.",
    location: "Pune",
    rating: 5,
    product: "Blush Pink Embroidered Set",
    text: "From packaging to the actual product — everything screams premium. This is hands down the best online shopping experience I've had.",
  },
  {
    name: "Sneha T.",
    location: "Hyderabad",
    rating: 5,
    product: "Teal Handloom Kurta",
    text: "I'm obsessed! The handloom texture adds so much character. It looks way more expensive than it actually is. Already eyeing the kaftan collection next.",
  },
];

export default function CustomerReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -360 : 360,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <style>{`
        .reviews-section {
          padding: 80px 0;
          background: #F8F3EE;
          overflow: hidden;
        }
        .reviews-header {
          padding: 0 48px;
          margin-bottom: 48px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
        }
        .reviews-scroll {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding: 0 48px 16px;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .reviews-scroll::-webkit-scrollbar { display: none; }
        .review-card {
          flex-shrink: 0;
          width: 340px;
          scroll-snap-align: start;
          background: #FFFFFF;
          border: 1px solid rgba(59,47,47,0.08);
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          border-radius:15px;
          transition: all 0.3s ease;
        }
        .review-card:hover {
          border-color: rgba(59,47,47,0.18);
          box-shadow: 0 8px 32px rgba(59,47,47,0.08);
        }
        .reviews-nav-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(59,47,47,0.15);
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          color: #3B2F2F;
        }
        .reviews-nav-btn:hover {
          background: #3B2F2F;
          color: #F8F3EE;
          border-color: #3B2F2F;
        }
        @media (max-width: 768px) {
          .reviews-section { padding: 56px 0; }
          .reviews-header { padding: 0 24px; margin-bottom: 36px; }
          .reviews-scroll { padding: 0 24px 16px; gap: 16px; }
          .review-card { width: 290px; padding: 24px 20px; }
        }
      `}</style>

      <section id="customer-reviews" className="reviews-section">
        {/* Header */}
        <div className="reviews-header">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.62rem",
                fontWeight: 500,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "rgba(59,47,47,0.4)",
                marginBottom: 12,
              }}
            >
              Testimonials
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-serif, Georgia, serif)",
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                fontWeight: 300,
                color: "#3B2F2F",
                letterSpacing: "-0.01em",
              }}
            >
              Loved by You
            </motion.h2>
          </div>

          {/* Navigation arrows */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: "flex", gap: 8 }}
          >
            <button
              className="reviews-nav-btn"
              onClick={() => scroll("left")}
              aria-label="Previous reviews"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              className="reviews-nav-btn"
              onClick={() => scroll("right")}
              aria-label="Next reviews"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Scrollable cards */}
        <div ref={scrollRef} className="reviews-scroll">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              className="review-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: 3 }}>
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg
                    key={s}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill={s < review.rating ? "var(--color-terracotta)" : "none"}
                    stroke="var(--color-terracotta)"
                    strokeWidth="1.5"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Review text */}
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  lineHeight: 1.7,
                  color: "rgba(59,47,47,0.75)",
                  fontWeight: 300,
                  flex: 1,
                }}
              >
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Product purchased */}
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.08em",
                  color: "var(--color-terracotta)",
                  fontWeight: 500,
                }}
              >
                Purchased: {review.product}
              </p>

              {/* Divider */}
              <div style={{ height: 1, background: "rgba(59,47,47,0.06)" }} />

              {/* Customer info + verified badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  {/* Avatar initial */}
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, var(--color-terracotta) 0%, var(--color-brown) 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      color: "#F8F3EE",
                    }}
                  >
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        color: "#3B2F2F",
                        marginBottom: 1,
                      }}
                    >
                      {review.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.62rem",
                        color: "rgba(59,47,47,0.4)",
                      }}
                    >
                      {review.location}
                    </p>
                  </div>
                </div>

                {/* Verified badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.58rem",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    color: "rgba(59,47,47,0.35)",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--color-terracotta)" stroke="none">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Verified
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

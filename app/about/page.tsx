"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh", background: "var(--color-cream)", paddingTop: "120px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

          {/* Hero Header Section */}
          <div style={{ textAlign: "center", marginBottom: "64px" }} className="animate-fade-in-up">
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--color-terracotta)",
              marginBottom: 16
            }}>
              About Imora
            </p>
            <h1 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              color: "var(--color-brown)",
              lineHeight: 1.1,
              marginBottom: 24
            }}>
              Rooted in Comfort, <br />
              <span style={{ fontStyle: "italic", color: "var(--color-terracotta)" }}>Styled with Soul</span>
            </h1>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: "var(--color-brown-light)",
              maxWidth: "700px",
              margin: "0 auto"
            }}>
              Soft silhouettes for everyday stories. Imora is a slow-fashion label crafted for the free and expressive, bringing natural textures and earthy tones into modern wardrobes.
            </p>
          </div>

          {/* Interactive Story Section */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "56px",
            alignItems: "center",
            marginBottom: "80px"
          }}>
            {/* Story Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                color: "var(--color-brown)",
                marginBottom: 24,
                lineHeight: 1.2
              }}>
                Our Journey
              </h2>
              <div style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "var(--color-brown-light)",
                display: "flex",
                flexDirection: "column",
                gap: 16
              }}>
                <p>
                  Imora began with a simple quest: to create garments that feel like a gentle breath of fresh air. We noticed how everyday clothing had become rigid and detached from the natural world, and wanted to design apparel that allows you to move, breathe, and live freely.
                </p>
                <p>
                  Each silhouette we craft is designed with careful intention. We choose breathable cottons, lightweight linens, and soft blends that behave naturally on the skin. We lean into relaxed fits and soft structures because we believe true beauty is found in effortless grace.
                </p>
                <p>
                  Based in Kolhapur, Maharashtra, India, we draw endless inspiration from our heritage of craftsmanship and local textiles, interpreting traditional comfort into modern daily wear.
                </p>
              </div>
            </motion.div>

            {/* Story Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                position: "relative",
                height: "480px",
                width: "100%",
                boxShadow: "0 20px 40px rgba(59, 47, 47, 0.08)",

              }}
            >
              <Image
                src="/images/hero-new1.png"
                alt="Imora craftsmanship"
                fill
                style={{ objectFit: "cover", borderRadius: "15px" }}
                sizes="(max-width: 768px) 100vw, 50vw"

              />
            </motion.div>
          </div>

          {/* Philosophy Highlights */}
          <div style={{
            borderTop: "1px solid var(--color-divider)",
            paddingTop: "64px",
            marginBottom: "80px"
          }}>
            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              color: "var(--color-brown)",
              textAlign: "center",
              marginBottom: "48px"
            }}>
              Our Core Philosophy
            </h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "32px"
            }}>
              {/* Pillar 1 */}
              <div style={{
                background: "rgba(237, 229, 218, 0.4)",
                padding: "32px",
                textAlign: "center",
                transition: "transform 0.3s ease",
              }}
                className="philosophy-card"
              >
                <div style={{ color: "var(--color-terracotta)", fontSize: "2rem", marginBottom: "16px" }}>🌿</div>
                <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.1rem", fontWeight: 600, color: "var(--color-brown)", marginBottom: "12px" }}>
                  Natural Materials
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "var(--color-brown-light)", lineHeight: 1.6 }}>
                  We work closely with premium natural fibers. Our choice of pure cotton, airy linens, and breathable blends feels incredibly soft against the skin and ages beautifully.
                </p>
              </div>

              {/* Pillar 2 */}
              <div style={{
                background: "rgba(237, 229, 218, 0.4)",
                padding: "32px",
                textAlign: "center",
                transition: "transform 0.3s ease",
              }}
                className="philosophy-card"
              >
                <div style={{ color: "var(--color-terracotta)", fontSize: "2rem", marginBottom: "16px" }}>⌛</div>
                <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.1rem", fontWeight: 600, color: "var(--color-brown)", marginBottom: "12px" }}>
                  Slow & Intentional
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "var(--color-brown-light)", lineHeight: 1.6 }}>
                  We reject fast-fashion cycles. We create capsule drops that focus on long-lasting durability, timeless styling, and meticulous attention to structural finishing.
                </p>
              </div>

              {/* Pillar 3 */}
              <div style={{
                background: "rgba(237, 229, 218, 0.4)",
                padding: "32px",
                textAlign: "center",
                transition: "transform 0.3s ease",
              }}
                className="philosophy-card"
              >
                <div style={{ color: "var(--color-terracotta)", fontSize: "2rem", marginBottom: "16px" }}>🎨</div>
                <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.1rem", fontWeight: 600, color: "var(--color-brown)", marginBottom: "12px" }}>
                  Earthy Aesthetics
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "var(--color-brown-light)", lineHeight: 1.6 }}>
                  Our color palettes draw inspiration directly from the soil, clay, autumn leaves, and forest trails. Soft tones that blend harmoniously with any personal collection.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div style={{
            background: "var(--color-brown)",
            padding: "56px 32px",
            color: "white",
            textAlign: "center",
            boxShadow: "0 20px 40px rgba(59, 47, 47, 0.12)",
            borderRadius: "15px"
          }}>
            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "white",
              marginBottom: "16px"
            }}>
              Discover the Collection
            </h2>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.95rem",
              color: "rgba(255, 255, 255, 0.7)",
              maxWidth: "500px",
              margin: "0 auto 32px",
              lineHeight: 1.6
            }}>
              Explore kurtis, tops, kaftans, and co-ord sets designed to match your flow. Find your next favorite look.
            </p>
            <Link href="/collections" style={{
              display: "inline-block",
              background: "var(--color-cream)",
              color: "var(--color-brown)",
              padding: "12px 36px",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: "0.8rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              transition: "transform 0.2s ease",
            }}
              className="about-cta"
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              Shop All Collections
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

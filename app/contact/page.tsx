"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    orderId: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);
    // Simulate submission API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        orderId: "",
        message: ""
      });
    }, 1200);
  };

  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh", background: "var(--color-cream)", paddingTop: "120px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

          {/* Header */}
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
              Contact Us
            </p>
            <h1 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              color: "var(--color-brown)",
              lineHeight: 1.1,
              marginBottom: 24
            }}>
              Let's Connect
            </h1>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              lineHeight: 1.6,
              color: "var(--color-brown-light)",
              maxWidth: "600px",
              margin: "0 auto"
            }}>
              Have a question about sizes, shipping, returns, or just want to say hello? Fill out the form or reach out directly. We'd love to hear from you.
            </p>
          </div>

          {/* Grid Layout */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "64px",
            alignItems: "start"
          }}>
            {/* Left Column: Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "40px"
              }}
            >
              {/* Contact Card */}
              <div style={{
                background: "rgba(237, 229, 218, 0.3)",
                padding: "36px",
                border: "1px solid var(--color-divider)",
                display: "flex",
                flexDirection: "column",
                gap: "28px",
                borderRadius: "15px"
              }}>
                <h2 style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.8rem",
                  color: "var(--color-brown)"
                }}>
                  Direct Reach
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {/* Email */}
                  <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.3rem" }}>📧</span>
                    <div>
                      <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-terracotta)", marginBottom: "4px" }}>
                        Email Us
                      </h4>
                      <a
                        href="mailto:imoraofficial.in@gmail.com"
                        style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--color-brown)", fontWeight: 500, transition: "color 0.2s" }}
                        onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-terracotta)"}
                        onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-brown)"}
                      >
                        imoraofficial.in@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.3rem" }}>📞</span>
                    <div>
                      <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-terracotta)", marginBottom: "4px" }}>
                        Call / WhatsApp
                      </h4>
                      <a
                        href="tel:+919022771058"
                        style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--color-brown)", fontWeight: 500, transition: "color 0.2s" }}
                        onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-terracotta)"}
                        onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-brown)"}
                      >
                        +91 90227 71058
                      </a>
                    </div>
                  </div>

                  {/* Headquarters */}
                  <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.3rem" }}>📍</span>
                    <div>
                      <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-terracotta)", marginBottom: "4px" }}>
                        Location
                      </h4>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--color-brown-light)", lineHeight: 1.5 }}>
                        Kolhapur, Maharashtra, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Hours Notice */}
              <div style={{ padding: "0 12px" }}>
                <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-brown)", marginBottom: "8px" }}>
                  Operating Hours
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--color-brown-light)", lineHeight: 1.6 }}>
                  Our customer service team is active Monday to Saturday, between 10:00 AM and 6:00 PM IST. We generally reply to all inquiries within 24 hours.
                </p>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <div style={{
                background: "var(--color-white)",
                padding: "40px",
                border: "1px solid var(--color-divider)",
                boxShadow: "0 20px 40px rgba(59, 47, 47, 0.04)",
                borderRadius: "15px"
              }}>
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="contact-form"
                      onSubmit={handleSubmit}
                      style={{ display: "flex", flexDirection: "column", gap: "24px" }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Name */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <label htmlFor="form-name" style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--color-brown)" }}>
                          Full Name *
                        </label>
                        <input
                          id="form-name"
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          style={{
                            padding: "12px 16px",
                            border: "1px solid var(--color-divider)",
                            background: "var(--color-cream)",
                            fontFamily: "var(--font-body)",
                            fontSize: "0.9rem",
                            color: "var(--color-brown)",
                            outline: "none",
                            transition: "border-color 0.2s"
                          }}
                          onFocus={(e) => e.target.style.borderColor = "var(--color-terracotta)"}
                          onBlur={(e) => e.target.style.borderColor = "var(--color-divider)"}
                        />
                      </div>

                      {/* Email */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <label htmlFor="form-email" style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--color-brown)" }}>
                          Email Address *
                        </label>
                        <input
                          id="form-email"
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          style={{
                            padding: "12px 16px",
                            border: "1px solid var(--color-divider)",
                            background: "var(--color-cream)",
                            fontFamily: "var(--font-body)",
                            fontSize: "0.9rem",
                            color: "var(--color-brown)",
                            outline: "none",
                            transition: "border-color 0.2s"
                          }}
                          onFocus={(e) => e.target.style.borderColor = "var(--color-terracotta)"}
                          onBlur={(e) => e.target.style.borderColor = "var(--color-divider)"}
                        />
                      </div>

                      {/* Phone & Order ID Row */}
                      <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                        gap: "20px"
                      }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                          <label htmlFor="form-phone" style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--color-brown)" }}>
                            Phone Number
                          </label>
                          <input
                            id="form-phone"
                            type="tel"
                            value={formState.phone}
                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                            style={{
                              padding: "12px 16px",
                              border: "1px solid var(--color-divider)",
                              background: "var(--color-cream)",
                              fontFamily: "var(--font-body)",
                              fontSize: "0.9rem",
                              color: "var(--color-brown)",
                              outline: "none",
                              transition: "border-color 0.2s"
                            }}
                            onFocus={(e) => e.target.style.borderColor = "var(--color-terracotta)"}
                            onBlur={(e) => e.target.style.borderColor = "var(--color-divider)"}
                          />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                          <label htmlFor="form-order" style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--color-brown)" }}>
                            Order ID (Optional)
                          </label>
                          <input
                            id="form-order"
                            type="text"
                            value={formState.orderId}
                            onChange={(e) => setFormState({ ...formState, orderId: e.target.value })}
                            style={{
                              padding: "12px 16px",
                              border: "1px solid var(--color-divider)",
                              background: "var(--color-cream)",
                              fontFamily: "var(--font-body)",
                              fontSize: "0.9rem",
                              color: "var(--color-brown)",
                              outline: "none",
                              transition: "border-color 0.2s"
                            }}
                            onFocus={(e) => e.target.style.borderColor = "var(--color-terracotta)"}
                            onBlur={(e) => e.target.style.borderColor = "var(--color-divider)"}
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <label htmlFor="form-message" style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--color-brown)" }}>
                          Your Message *
                        </label>
                        <textarea
                          id="form-message"
                          required
                          rows={5}
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          style={{
                            padding: "12px 16px",
                            border: "1px solid var(--color-divider)",
                            background: "var(--color-cream)",
                            fontFamily: "var(--font-body)",
                            fontSize: "0.9rem",
                            color: "var(--color-brown)",
                            outline: "none",
                            resize: "vertical",
                            transition: "border-color 0.2s"
                          }}
                          onFocus={(e) => e.target.style.borderColor = "var(--color-terracotta)"}
                          onBlur={(e) => e.target.style.borderColor = "var(--color-divider)"}
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                          background: "var(--color-brown)",
                          color: "white",
                          padding: "14px 28px",
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.8rem",
                          fontWeight: 500,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          transition: "all 0.3s ease",
                          cursor: isSubmitting ? "not-allowed" : "pointer",
                          opacity: isSubmitting ? 0.7 : 1,
                          textAlign: "center"
                        }}
                        onMouseEnter={(e) => {
                          if (!isSubmitting) {
                            e.currentTarget.style.background = "var(--color-terracotta)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSubmitting) {
                            e.currentTarget.style.background = "var(--color-brown)";
                          }
                        }}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success-message"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      style={{
                        textAlign: "center",
                        padding: "40px 20px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "20px"
                      }}
                    >
                      <div style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "50%",
                        background: "rgba(122, 139, 111, 0.15)",
                        color: "var(--color-sage)",
                        fontSize: "2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "8px"
                      }}>
                        ✓
                      </div>
                      <h3 style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.8rem",
                        color: "var(--color-brown)",
                        lineHeight: 1.2
                      }}>
                        Message Sent
                      </h3>
                      <p style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.95rem",
                        color: "var(--color-brown-light)",
                        lineHeight: 1.6,
                        maxWidth: "320px"
                      }}>
                        Thank you for reaching out. A support representative will review your message and reply via email within 24 hours.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        style={{
                          marginTop: "12px",
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.75rem",
                          fontWeight: 500,
                          color: "var(--color-terracotta)",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          borderBottom: "1px solid var(--color-terracotta)",
                          paddingBottom: "2px"
                        }}
                      >
                        Send another message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

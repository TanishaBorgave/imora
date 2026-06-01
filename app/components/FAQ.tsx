"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "../data/faqs";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding" style={{ background: "var(--color-cream)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--color-terracotta)", marginBottom: 10 }}>
            Help
          </p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "var(--color-brown)" }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} style={{ borderBottom: "1px solid #E0D6CC" }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 0", textAlign: "left", fontFamily: "var(--font-body)", fontSize: "0.92rem", fontWeight: 400, color: "#3B2F2F", gap: 16 }}
                >
                  <span>{faq.question}</span>
                  <motion.svg
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B2F2F" strokeWidth="1.5" style={{ flexShrink: 0 }}
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "#5C4A4A", lineHeight: 1.8, paddingBottom: 22 }}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

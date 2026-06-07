"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import CartDrawer from "./CartDrawer";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, setCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        id="site-header"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          background: scrolled ? "rgba(248, 243, 238, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--color-divider)" : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: scrolled ? 64 : 72,
            transition: "height 0.4s ease",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "inline-block" }}>
            <img
              src="/images/logo-transparent.png?v=4"
              alt="Imora"
              style={{
                width: 111,
                height: 31,
                objectFit: "contain",
                display: "block",
                filter: scrolled ? "none" : "brightness(0) invert(1)",
                transition: "filter 0.4s ease",
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: 36,
            }}
            className="hidden md:flex"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: scrolled ? "var(--color-brown)" : "#ffffff",
                  transition: "color 0.4s ease",
                  position: "relative",
                  textShadow: scrolled ? "none" : "0 1px 3px rgba(0,0,0,0.3)",
                }}
                className="nav-link"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {/* Search */}
            <button
              aria-label="Search"
              style={{ color: scrolled ? "var(--color-brown)" : "#ffffff", padding: 4, transition: "color 0.4s ease", filter: scrolled ? "none" : "drop-shadow(0 1px 2px rgba(0,0,0,0.3))" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>

            {/* User */}
            <button
              aria-label="Account"
              style={{ color: scrolled ? "var(--color-brown)" : "#ffffff", padding: 4, transition: "color 0.4s ease", filter: scrolled ? "none" : "drop-shadow(0 1px 2px rgba(0,0,0,0.3))" }}
              className="hidden sm:block"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>

            {/* Cart */}
            <button
              aria-label="Cart"
              onClick={() => setCartOpen(true)}
              style={{ color: scrolled ? "var(--color-brown)" : "#ffffff", padding: 4, position: "relative", transition: "color 0.4s ease", filter: scrolled ? "none" : "drop-shadow(0 1px 2px rgba(0,0,0,0.3))" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" x2="21" y1="6" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span
                style={{
                  position: "absolute",
                  top: 0,
                  right: -2,
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: "var(--color-terracotta)",
                  color: "white",
                  fontSize: "0.6rem",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {itemCount}
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              aria-label="Menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden"
              style={{ color: scrolled ? "var(--color-brown)" : "#ffffff", padding: 4, transition: "color 0.4s ease" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                {mobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="17" x2="20" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMobileOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99,
              background: "rgba(59, 47, 47, 0.2)",
              backdropFilter: "blur(4px)",
            }}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "min(320px, 85vw)",
              zIndex: 101,
              background: "var(--color-cream)",
              padding: "80px 36px 36px",
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              style={{
                position: "absolute",
                top: 24,
                right: 24,
                color: "var(--color-brown)",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 + 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "block",
                    padding: "18px 0",
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    color: "var(--color-brown)",
                    borderBottom: "1px solid var(--color-divider)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <div style={{ marginTop: "auto", paddingTop: 36 }}>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "0.85rem",
                  color: "var(--color-brown-light)",
                  fontStyle: "italic",
                  lineHeight: 1.6,
                }}
              >
                Rooted in comfort,
                <br />
                styled with soul.
              </p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      <CartDrawer />
    </>
  );
}

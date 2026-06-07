"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const {
    items,
    total,
    checkoutUrl,
    cartOpen,
    setCartOpen,
    removeFromCart,
    updateCartQuantity,
    isLoading,
  } = useCart();

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1000,
              background: "rgba(59, 47, 47, 0.4)",
              backdropFilter: "blur(6px)",
            }}
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "min(440px, 100vw)",
              zIndex: 1001,
              background: "var(--color-cream, #F8F3EE)",
              boxShadow: "-10px 0 30px rgba(0, 0, 0, 0.08)",
              display: "flex",
              flexDirection: "column",
              borderLeft: "1px solid var(--color-divider, #E0D6CC)",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "24px 32px",
                borderBottom: "1px solid var(--color-divider, #E0D6CC)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-serif, serif)",
                  fontSize: "1.3rem",
                  fontWeight: 400,
                  color: "#3B2F2F",
                  margin: 0,
                }}
              >
                Shopping Bag ({items.reduce((sum, item) => sum + item.quantity, 0)})
              </h2>
              <button
                onClick={() => setCartOpen(false)}
                aria-label="Close cart"
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "#3B2F2F",
                  padding: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Cart Items List */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "24px 32px",
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              {isLoading && items.length === 0 ? (
                <div style={{ textAlign: "center", marginTop: 40, fontFamily: "var(--font-sans)", color: "#9A8A7A" }}>
                  Updating cart...
                </div>
              ) : items.length === 0 ? (
                <div
                  style={{
                    textAlign: "center",
                    marginTop: 60,
                    fontFamily: "var(--font-body)",
                    color: "#9A8A7A",
                  }}
                >
                  <p style={{ fontSize: "0.95rem", marginBottom: 16 }}>Your bag is currently empty.</p>
                  <button
                    onClick={() => setCartOpen(false)}
                    style={{
                      background: "transparent",
                      border: "1px solid #3B2F2F",
                      padding: "10px 24px",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.75rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      color: "#3B2F2F",
                      borderRadius: 2,
                    }}
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: "flex",
                      gap: 16,
                      borderBottom: "1px solid rgba(224, 214, 204, 0.5)",
                      paddingBottom: 20,
                    }}
                  >
                    {/* Item Image */}
                    <div
                      style={{
                        position: "relative",
                        width: 80,
                        height: 106,
                        borderRadius: 2,
                        overflow: "hidden",
                        background: "#EDE5DA",
                        flexShrink: 0,
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="80px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>

                    {/* Item Info */}
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                      <div>
                        <h3
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.85rem",
                            fontWeight: 400,
                            color: "#3B2F2F",
                            margin: "0 0 4px 0",
                            lineHeight: 1.4,
                          }}
                        >
                          {item.name}
                        </h3>
                        {item.size && (
                          <span
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: "0.72rem",
                              color: "#9A8A7A",
                              background: "rgba(224, 214, 204, 0.4)",
                              padding: "2px 6px",
                              borderRadius: 2,
                            }}
                          >
                            Size: {item.size}
                          </span>
                        )}
                      </div>

                      {/* Quantity Controls & Price */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginTop: 10,
                        }}
                      >
                        {/* Selector */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            border: "1px solid #E0D6CC",
                            borderRadius: 2,
                          }}
                        >
                          <button
                            onClick={() => updateCartQuantity(item.id, item.variantId, item.quantity - 1)}
                            style={{
                              border: "none",
                              background: "transparent",
                              padding: "4px 10px",
                              cursor: "pointer",
                              color: "#3B2F2F",
                            }}
                          >
                            -
                          </button>
                          <span
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: "0.78rem",
                              fontWeight: 500,
                              minWidth: 20,
                              textAlign: "center",
                            }}
                          >
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateCartQuantity(item.id, item.variantId, item.quantity + 1)}
                            style={{
                              border: "none",
                              background: "transparent",
                              padding: "4px 10px",
                              cursor: "pointer",
                              color: "#3B2F2F",
                            }}
                          >
                            +
                          </button>
                        </div>

                        {/* Price */}
                        <span
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.85rem",
                            fontWeight: 500,
                            color: "#3B2F2F",
                          }}
                        >
                          ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {items.length > 0 && (
              <div
                style={{
                  padding: "24px 32px 36px",
                  borderTop: "1px solid var(--color-divider, #E0D6CC)",
                  background: "#F5EDE4",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 20,
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  <span style={{ fontSize: "0.85rem", color: "#5C4A4A" }}>Subtotal</span>
                  <span style={{ fontSize: "1.05rem", fontWeight: 600, color: "#3B2F2F" }}>
                    ₹{total.toLocaleString("en-IN")}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    color: "#9A8A7A",
                    lineHeight: 1.5,
                    marginBottom: 20,
                  }}
                >
                  Shipping & taxes calculated at checkout. Shopify secure checkout.
                </p>
                <a
                  href={checkoutUrl}
                  target="_self"
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "16px",
                    background: "#3B2F2F",
                    color: "#F8F3EE",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    textAlign: "center",
                    textDecoration: "none",
                    borderRadius: 2,
                    transition: "background 0.3s",
                    boxShadow: "0 4px 12px rgba(59, 47, 47, 0.15)",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#5C4A4A"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#3B2F2F"; }}
                >
                  {isLoading ? "Updating Order..." : "Proceed to Checkout"}
                </a>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

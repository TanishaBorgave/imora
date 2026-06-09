"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BackButton() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <button
      onClick={handleBack}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        background: "transparent",
        color: "var(--color-terracotta)",
        fontFamily: "var(--font-sans)",
        fontSize: "0.8rem",
        fontWeight: 500,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        border: "none",
        cursor: "pointer",
        padding: "8px 0",
        marginBottom: "24px",
        transition: "color 0.2s ease",
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          transform: isHovered ? "translateX(-4px)" : "translateX(0)",
          transition: "transform 0.2s ease",
        }}
      >
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
      </svg>
      Go Back
    </button>
  );
}

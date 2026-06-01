export default function Marquee() {
  const items = [
    "Slow Fashion",
    "✦",
    "Handcrafted Stories",
    "✦",
    "Cotton & Soul",
    "✦",
    "Made in India",
    "✦",
    "For the Free-Spirited",
    "✦",
    "Earthy by Nature",
    "✦",
  ];
  const repeated = items.join("  ");

  return (
    <section
      id="marquee"
      style={{
        overflow: "hidden",
        padding: "32px 0",
        borderTop: "1px solid #E0D6CC",
        borderBottom: "1px solid #E0D6CC",
        background: "#F8F3EE",
      }}
    >
      <div className="animate-marquee" style={{ display: "flex", width: "fit-content" }}>
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.4rem, 3vw, 2.4rem)",
            fontWeight: 300,
            color: "#3B2F2F",
            letterSpacing: "0.08em",
            whiteSpace: "nowrap",
            opacity: 0.65,
            paddingRight: 48,
          }}
        >
          {repeated}
        </span>
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.4rem, 3vw, 2.4rem)",
            fontWeight: 300,
            color: "#3B2F2F",
            letterSpacing: "0.08em",
            whiteSpace: "nowrap",
            opacity: 0.65,
            paddingRight: 48,
          }}
        >
          {repeated}
        </span>
      </div>
    </section>
  );
}

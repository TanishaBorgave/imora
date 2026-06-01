import Link from "next/link";

const footerLinks = [
  { label: "Privacy Policy", href: "/policies/privacy" },
  { label: "Refund Policy", href: "/policies/refund" },
  { label: "Terms of Service", href: "/policies/terms" },
  { label: "Shipping Policy", href: "/policies/shipping" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/imora.in", icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  )},
  { label: "LinkedIn", href: "https://linkedin.com/company/imora", icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  )},
];

export default function Footer() {
  return (
    <footer id="site-footer" style={{ background: "var(--color-brown)", color: "#FFFFFF", padding: "56px 24px 32px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        {/* Top Row */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 400, letterSpacing: "0.18em", marginBottom: 12, color: "#FFFFFF" }}>IMORA</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: 280 }}>
              Soft silhouettes for everyday stories.
              <br />Rooted in comfort, styled with soul.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16, color: "var(--color-terracotta)" }}>Quick Links</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link href="/collections" style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "rgba(255,255,255,0.6)", transition: "color 0.2s" }}>Collections</Link>
              <Link href="/about" style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "rgba(255,255,255,0.6)" }}>About Us</Link>
              <Link href="/contact" style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "rgba(255,255,255,0.6)" }}>Contact</Link>
            </div>
          </div>

          {/* Policies */}
          <div>
            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16, color: "var(--color-terracotta)" }}>Policies</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {footerLinks.map(link => (
                <Link key={link.href} href={link.href} style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "rgba(255,255,255,0.6)" }}>{link.label}</Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16, color: "var(--color-terracotta)" }}>Follow Us</h3>
            <div style={{ display: "flex", gap: 14 }}>
              {socialLinks.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} style={{ color: "rgba(255,255,255,0.5)", transition: "color 0.2s" }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} Imora. All rights reserved.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", color: "rgba(255,255,255,0.3)" }}>
            Handcrafted with ♥ in India
          </p>
        </div>
      </div>
    </footer>
  );
}

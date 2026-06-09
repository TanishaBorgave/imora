import Header from "./Header";
import Footer from "./Footer";
import BackButton from "./BackButton";

interface PolicyWrapperProps {
  title: string;
  children: React.ReactNode;
}

export default function PolicyWrapper({ title, children }: PolicyWrapperProps) {
  return (
    <>
      <Header />
      <main 
        style={{ 
          minHeight: "100vh", 
          background: "var(--color-cream)", 
          paddingTop: "120px", 
          paddingBottom: "80px" 
        }}
        className="section-padding"
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {/* Back Button */}
          <BackButton />

          {/* Content Card */}
          <div 
            style={{ 
              background: "var(--color-white)", 
              borderRadius: "32px", 
              border: "1px solid var(--color-divider)",
              boxShadow: "0 8px 30px rgba(59, 47, 47, 0.03)"
            }}
            className="policy-card animate-fade-in-up"
          >
            {/* Title */}
            <h1 
              style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "clamp(2.2rem, 5vw, 3rem)", 
                color: "var(--color-brown)", 
                marginBottom: "32px",
                lineHeight: 1.15 
              }}
            >
              {title}
            </h1>

            {/* Core Body Content */}
            <div 
              style={{ 
                fontFamily: "var(--font-body)", 
                fontSize: "0.95rem", 
                lineHeight: 1.8, 
                color: "var(--color-brown-light)" 
              }}
              className="policy-content"
            >
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

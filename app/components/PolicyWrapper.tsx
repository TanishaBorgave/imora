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

          {/* Core Content Wrapper */}
          <div className="animate-fade-in-up" style={{ marginTop: "24px" }}>
            {/* Title */}
            <h1 
              style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)", 
                color: "var(--color-brown)", 
                marginBottom: "48px",
                lineHeight: 1.15,
                textAlign: "center"
              }}
            >
              {title}
            </h1>

            {/* Core Body Content */}
            <div 
              style={{ 
                fontFamily: "var(--font-body)", 
                fontSize: "0.98rem", 
                lineHeight: 1.8, 
                color: "var(--color-brown)" 
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

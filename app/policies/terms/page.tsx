export default function TermsOfService() {
  return (
    <div style={{ minHeight: "100vh", padding: "64px 24px", background: "#FAFAFA" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", marginBottom: 32, color: "var(--color-brown)" }}>
          Terms of Service
        </h1>
        
        <div style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: 1.8, color: "#333" }}>
          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Agreement to Terms
            </h2>
            <p>
              These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and Imora ("Company," "we," "us," or "our"), governing your access to and use of our website, mobile application, and services.
            </p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Use License
            </h2>
            <p style={{ marginBottom: 12 }}>Permission is granted to temporarily download one copy of the materials for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul style={{ marginLeft: 20, marginBottom: 12 }}>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Disclaimer
            </h2>
            <p>
              The materials on Imora's website are provided on an 'as is' basis. Imora makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Limitations
            </h2>
            <p>
              In no event shall Imora or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Imora's website.
            </p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Accuracy of Materials
            </h2>
            <p>
              The materials appearing on Imora's website could include technical, typographical, or photographic errors. Imora does not warrant that any of the materials on its website are accurate, complete, or current. Imora may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Links
            </h2>
            <p>
              Imora has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Imora of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Modifications
            </h2>
            <p>
              Imora may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Governing Law
            </h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <p style={{ fontSize: "0.85rem", color: "#666", marginTop: 48 }}>
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

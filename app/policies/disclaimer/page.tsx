export default function Disclaimer() {
  return (
    <div style={{ minHeight: "100vh", padding: "64px 24px", background: "#FAFAFA" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", marginBottom: 32, color: "var(--color-brown)" }}>
          Disclaimer
        </h1>
        
        <div style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: 1.8, color: "#333" }}>
          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Website Disclaimer
            </h2>
            <p>
              The information contained on this website is for general informational purposes only. While we endeavor to keep the information accurate and up-to-date, Imora makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website.
            </p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              No Warranties
            </h2>
            <p>
              The website and all content are provided on an "as is" and "as available" basis. Imora makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including any implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Limitation of Liability
            </h2>
            <p>
              In no event shall Imora, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profit, revenue, data, or use, incurred by you or any third party, whether in an action in contract or tort, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Product Information
            </h2>
            <p style={{ marginBottom: 12 }}>
              While we strive to provide accurate product descriptions and images, we do not warrant that:
            </p>
            <ul style={{ marginLeft: 20, marginBottom: 12 }}>
              <li>Product descriptions are completely accurate or error-free</li>
              <li>Product images exactly match the actual product</li>
              <li>Colors appear exactly as shown due to monitor/device variations</li>
              <li>All sizes and dimensions are precisely as stated</li>
              <li>Products will meet your specific expectations</li>
            </ul>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              External Links
            </h2>
            <p>
              The website may contain links to external websites. Imora is not responsible for the content, accuracy, or practices of any external websites. These links are provided for your convenience only, and the inclusion of any link does not imply endorsement by Imora of the linked site or the organization operating it.
            </p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Third-Party Content
            </h2>
            <p>
              Any opinions, advice, statements, services, offers, or other information expressed by third parties are those of the respective authors or distributors and not necessarily those of Imora. Imora does not endorse and is not responsible for the accuracy or reliability of any opinion, advice, or statement made by anyone other than an authorized Imora representative.
            </p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              User-Generated Content
            </h2>
            <p>
              Imora does not endorse or guarantee the accuracy of any user-generated content, including but not limited to reviews, comments, or testimonials. We reserve the right to remove any content that violates our policies.
            </p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Changes to Content
            </h2>
            <p>
              We reserve the right to modify, update, or remove any content on the website, including prices, product descriptions, and policies, without prior notice. Your continued use of the website following such changes constitutes your acceptance of the modifications.
            </p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Technical Issues
            </h2>
            <p>
              Imora is not responsible for technical issues, including but not limited to website downtime, server errors, or disruptions in service. We endeavor to maintain continuous service but cannot guarantee uninterrupted access.
            </p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Governing Law
            </h2>
            <p>
              This disclaimer is governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Severability
            </h2>
            <p>
              If any provision of this disclaimer is found to be unenforceable, the remaining provisions shall continue in effect, and the unenforceable provision shall be reformed to the minimum extent necessary to make it enforceable.
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

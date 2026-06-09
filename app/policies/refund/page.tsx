export default function RefundPolicy() {
  return (
    <div style={{ minHeight: "100vh", padding: "64px 24px", background: "#FAFAFA" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", marginBottom: 32, color: "var(--color-brown)" }}>
          Refund Policy
        </h1>
        
        <div style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: 1.8, color: "#333" }}>
          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Overview
            </h2>
            <p>
              At Imora, your satisfaction is our priority. If you're not completely satisfied with your purchase, we offer a hassle-free refund policy. Please review the details below.
            </p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Refund Eligibility
            </h2>
            <p style={{ marginBottom: 12 }}>You may be eligible for a refund if:</p>
            <ul style={{ marginLeft: 20, marginBottom: 12 }}>
              <li>Your refund request is made within 30 days of purchase</li>
              <li>The item is in original, unworn condition</li>
              <li>The item includes all original tags and packaging</li>
              <li>You provide proof of purchase</li>
            </ul>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Non-Refundable Items
            </h2>
            <p style={{ marginBottom: 12 }}>The following items are not eligible for refunds:</p>
            <ul style={{ marginLeft: 20, marginBottom: 12 }}>
              <li>Items purchased more than 30 days ago</li>
              <li>Worn, washed, or damaged items</li>
              <li>Items without original tags or packaging</li>
              <li>Sale or clearance items (final sale)</li>
              <li>Custom or personalized items</li>
            </ul>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Refund Process
            </h2>
            <ol style={{ marginLeft: 20, marginBottom: 12 }}>
              <li>Contact us at refunds@imora.in with your order number</li>
              <li>Provide photos of the item and original packaging</li>
              <li>Receive return shipping instructions</li>
              <li>Send the item back to us in its original condition</li>
              <li>Once received and verified, your refund will be processed</li>
            </ol>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Refund Timeline
            </h2>
            <p style={{ marginBottom: 12 }}>
              Refunds are processed within 7-10 business days after we receive and inspect your returned item. Please allow an additional 5-7 business days for the refund to appear in your original payment method.
            </p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Shipping Costs
            </h2>
            <p>
              Original shipping charges are non-refundable. If you receive a defective item, we will provide a prepaid return label and process a full refund including original shipping costs.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Questions?
            </h2>
            <p>
              For any questions about our refund policy, please contact us at support@imora.in
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

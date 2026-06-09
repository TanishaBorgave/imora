export default function ShippingPolicy() {
  return (
    <div style={{ minHeight: "100vh", padding: "64px 24px", background: "#FAFAFA" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", marginBottom: 32, color: "var(--color-brown)" }}>
          Shipping Policy
        </h1>
        
        <div style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: 1.8, color: "#333" }}>
          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Shipping Information
            </h2>
            <p>
              We are committed to ensuring your order arrives promptly and in perfect condition. Please review our shipping policy details below.
            </p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Processing Time
            </h2>
            <p>
              Orders are typically processed and shipped within 2-3 business days. During peak seasons (festivals, holidays), processing may take up to 5 business days. You will receive a confirmation email with tracking details once your order ships.
            </p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Shipping Methods & Delivery Times
            </h2>
            <p style={{ marginBottom: 12 }}>We offer multiple shipping options:</p>
            <ul style={{ marginLeft: 20, marginBottom: 12 }}>
              <li><strong>Standard Shipping (5-7 business days):</strong> Delivery within India</li>
              <li><strong>Express Shipping (2-3 business days):</strong> For urgent orders</li>
              <li><strong>Overnight Shipping (Next day):</strong> Available in selected cities</li>
              <li><strong>International Shipping:</strong> Available to select countries, 10-15 business days</li>
            </ul>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Shipping Charges
            </h2>
            <p style={{ marginBottom: 12 }}>
              Shipping costs are calculated based on your location and shipping method selected at checkout.
            </p>
            <ul style={{ marginLeft: 20, marginBottom: 12 }}>
              <li>Free shipping on orders above ₹2,000 (Standard Shipping)</li>
              <li>Orders below ₹2,000: Shipping charges applicable</li>
              <li>Express and Overnight shipping: Additional charges apply</li>
            </ul>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Tracking Your Order
            </h2>
            <p>
              Once your order ships, you will receive an email with a tracking number. You can use this number to track your package in real-time through our carrier's website.
            </p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Delivery Address
            </h2>
            <p style={{ marginBottom: 12 }}>
              Please ensure your delivery address is accurate and complete at the time of checkout. We are not responsible for:
            </p>
            <ul style={{ marginLeft: 20, marginBottom: 12 }}>
              <li>Delays due to incorrect address information</li>
              <li>Undeliverable packages due to address errors</li>
              <li>Packages held at courier facilities due to incomplete address</li>
            </ul>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Damaged or Lost Packages
            </h2>
            <p style={{ marginBottom: 12 }}>
              If your package arrives damaged or is lost during transit:
            </p>
            <ul style={{ marginLeft: 20, marginBottom: 12 }}>
              <li>Contact us immediately at shipping@imora.in with photos</li>
              <li>Provide your order number and tracking details</li>
              <li>We will file a claim with the courier and arrange a replacement or refund</li>
              <li>Please retain the packaging for inspection if needed</li>
            </ul>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              International Shipping
            </h2>
            <p>
              International customers are responsible for any customs duties, taxes, or import fees. Delivery times vary by country and customs clearance. We partner with reliable international couriers to ensure safe delivery.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Need Help?
            </h2>
            <p>
              For shipping inquiries or concerns, please contact us at shipping@imora.in
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

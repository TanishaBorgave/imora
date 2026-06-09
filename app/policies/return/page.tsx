export default function ReturnPolicy() {
  return (
    <div style={{ minHeight: "100vh", padding: "64px 24px", background: "#FAFAFA" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", marginBottom: 32, color: "var(--color-brown)" }}>
          Return Policy
        </h1>
        
        <div style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: 1.8, color: "#333" }}>
          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Easy Returns
            </h2>
            <p>
              We want you to love your Imora collection. If for any reason you're not satisfied with your purchase, we offer a straightforward return process within 30 days of delivery.
            </p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Return Eligibility
            </h2>
            <p style={{ marginBottom: 12 }}>Items are eligible for return if:</p>
            <ul style={{ marginLeft: 20, marginBottom: 12 }}>
              <li>The return request is initiated within 30 days of delivery</li>
              <li>The item is unworn, unwashed, and in original condition</li>
              <li>All original tags, labels, and packaging are intact</li>
              <li>The item has not been customized or altered</li>
              <li>You have a valid proof of purchase (order confirmation)</li>
            </ul>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginbottom: 16, color: "var(--color-brown)" }}>
              Non-Returnable Items
            </h2>
            <p style={{ marginBottom: 12 }}>The following items cannot be returned:</p>
            <ul style={{ marginLeft: 20, marginBottom: 12 }}>
              <li>Items purchased more than 30 days ago</li>
              <li>Worn, washed, or soiled items</li>
              <li>Items with removed or damaged tags</li>
              <li>Final sale or clearance items</li>
              <li>Items damaged due to misuse or negligence</li>
              <li>Customized or personalized products</li>
            </ul>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              How to Initiate a Return
            </h2>
            <ol style={{ marginLeft: 20, marginBottom: 12 }}>
              <li>Email us at returns@imora.in with your order number</li>
              <li>Provide clear photos of the item, tags, and packaging</li>
              <li>Specify your reason for return</li>
              <li>We'll send you return instructions with a prepaid label</li>
              <li>Pack the item securely in original packaging</li>
              <li>Drop off at the designated courier location</li>
            </ol>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Return Shipping
            </h2>
            <p style={{ marginBottom: 12 }}>
              <strong>Free Return Shipping:</strong> For defective items or our errors, we provide a prepaid return label at no charge.
            </p>
            <p>
              <strong>Paid Return Shipping:</strong> For returns due to change of mind or incorrect size, customers can choose to pay return shipping or utilize our prepaid label option.
            </p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Return Processing Timeline
            </h2>
            <ul style={{ marginLeft: 20, marginBottom: 12 }}>
              <li>Upon receiving your return, we inspect the item</li>
              <li>Inspection and verification: 5-7 business days</li>
              <li>Approval notification sent via email</li>
              <li>Refund processing: 7-10 business days after approval</li>
              <li>Refund appearance in your account: 5-7 business days from processing</li>
            </ul>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Exchange Policy
            </h2>
            <p>
              If you'd like to exchange an item for a different size or color, we offer free exchanges within 30 days. Simply indicate your preference when initiating the return, and we'll process your exchange accordingly.
            </p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Defective Items
            </h2>
            <p>
              If you receive a defective item, we'll provide a replacement or full refund including original shipping costs. Please contact us immediately with photos and details of the defect.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Questions?
            </h2>
            <p>
              Contact our customer service team at returns@imora.in or use our contact form on the website.
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

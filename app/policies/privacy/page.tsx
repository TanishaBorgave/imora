export default function PrivacyPolicy() {
  return (
    <div style={{ minHeight: "100vh", padding: "64px 24px", background: "#FAFAFA" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", marginBottom: 32, color: "var(--color-brown)" }}>
          Privacy Policy
        </h1>
        
        <div style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: 1.8, color: "#333" }}>
          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Introduction
            </h2>
            <p>
              At Imora ("we", "us", "our", or "Company"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Information We Collect
            </h2>
            <p style={{ marginBottom: 12 }}>We may collect information about you in a variety of ways. The information we may collect on the site includes:</p>
            <ul style={{ marginLeft: 20, marginBottom: 12 }}>
              <li><strong>Personal Data:</strong> Name, email address, phone number, shipping and billing address, payment information</li>
              <li><strong>Browsing Data:</strong> IP address, browser type, pages visited, time spent on pages</li>
              <li><strong>Cookies and Tracking:</strong> Through cookies, web beacons, and similar technologies</li>
            </ul>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              How We Use Your Information
            </h2>
            <p style={{ marginBottom: 12 }}>We use the information we collect to:</p>
            <ul style={{ marginLeft: 20, marginBottom: 12 }}>
              <li>Process your transactions and send related information</li>
              <li>Email you regarding your order status</li>
              <li>Fulfill and manage your purchases and orders</li>
              <li>Generate a personal profile about you</li>
              <li>Increase the efficiency and operation of our site</li>
              <li>Monitor and analyze usage patterns</li>
              <li>Improve our products, services, and marketing</li>
            </ul>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Disclosure of Your Information
            </h2>
            <p>
              We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.
            </p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Security of Your Information
            </h2>
            <p>
              We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Site.
            </p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Your Rights
            </h2>
            <p style={{ marginBottom: 12 }}>You have the right to:</p>
            <ul style={{ marginLeft: 20, marginBottom: 12 }}>
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: "var(--color-brown)" }}>
              Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at privacy@imora.in or through our contact form on the website.
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

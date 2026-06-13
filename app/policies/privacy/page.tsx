import PolicyWrapper from "../../components/PolicyWrapper";

export default function PrivacyPolicy() {
  return (
    <PolicyWrapper title="Privacy Policy">
      <p style={{ marginBottom: "24px", fontStyle: "italic", opacity: 0.8 }}>
        Last Updated: April 08, 2026
      </p>

      <section>
        <p>
          At IMORA, we respect your privacy and are committed to protecting your personal information while you browse and shop on our website. We implement appropriate security measures to ensure that your data remains safe, secure, and used only for intended purposes.
        </p>
        <p>
          By accessing or using our website, you agree to the terms outlined in this Privacy Policy.
        </p>
      </section>

      <section>
        <h2>What Information Do We Collect?</h2>
        <p>
          We may collect personal information required to process your orders and improve your shopping experience, including:
        </p>
        <ul>
          <li>Name, email address, and contact number</li>
          <li>Billing and shipping address</li>
          <li>Order history and preferences</li>
          <li>Size or fit-related details (if provided)</li>
        </ul>
      </section>

      <section>
        <h2>When Is Your Information Collected?</h2>
        <p>Your information may be collected when you:</p>
        <ul>
          <li>Create an account on our website</li>
          <li>Place an order</li>
          <li>Subscribe to newsletters or updates</li>
          <li>Contact us for support or inquiries</li>
          <li>Browse or interact with our website</li>
        </ul>
      </section>

      <section>
        <h2>How Do We Use Your Information?</h2>
        <p>Your information is used for the following purposes:</p>
        <ul>
          <li>To process and deliver your orders</li>
          <li>To communicate order updates and customer support</li>
          <li>To improve website performance and user experience</li>
          <li>To send promotional offers (only if you opt-in)</li>
          <li>To prevent fraudulent activities and ensure security</li>
        </ul>
      </section>

      <section>
        <h2>Is Your Information Used for Other Purposes?</h2>
        <p>
          We only use your data for order processing, customer service, and improving your experience with IMORA. We do not sell or rent your personal information to third parties.
        </p>
      </section>

      <section>
        <h2>Cookies & Tracking Technologies</h2>
        
        <h3>Do We Use Cookies?</h3>
        <p>
          Yes, we use cookies to enhance your browsing experience and understand customer preferences.
        </p>

        <h3>What Data Do Cookies Collect?</h3>
        <p>
          Cookies may collect non-personal data such as browsing behavior, pages visited, and interaction patterns.
        </p>

        <h3>Do We Store Sensitive Data in Cookies?</h3>
        <p>
          No, we do not store sensitive information like passwords or payment details in cookies.
        </p>

        <h3>Is Cookie Data Linked to Your Identity?</h3>
        <p>
          No, cookie data is used only for analytics and to improve the user experience and is not directly linked to personal identity.
        </p>
      </section>

      <section>
        <h2>Payment Security</h2>

        <h3>Is Your Payment Information Secure?</h3>
        <p>
          Yes, all transactions are secured using SSL (Secure Socket Layer) encryption technology.
        </p>

        <h3>What Is SSL?</h3>
        <p>
          SSL encrypts your personal and payment information, ensuring secure transmission during transactions.
        </p>

        <h3>Do We Store Card Details?</h3>
        <p>
          No, we do not store your credit/debit card or banking details. Payments are processed securely through trusted payment gateways.
        </p>
      </section>

      <section>
        <h2>How Do We Protect Your Data?</h2>
        <p>
          We use industry-standard security measures, including encryption and secure servers, to protect your personal data from unauthorized access, misuse, or disclosure.
        </p>
      </section>

      <section>
        <h2>How Can You Verify a Secure Transaction?</h2>
        <p>
          When making a payment, you will see a padlock icon in your browser, indicating that your connection is secure and encrypted.
        </p>
      </section>

      <section>
        <h2>Managing Your Account Information</h2>
        
        <h3>How Can You Update Your Details?</h3>
        <p>
          You can update your account information anytime by logging into your account on our website.
        </p>
      </section>

      <section>
        <h2>Email Preferences & Unsubscription</h2>
        
        <h3>How Can You Unsubscribe?</h3>
        <p>
          You can opt out of promotional emails anytime by clicking the “Unsubscribe” link in our emails.
        </p>
      </section>

      <section>
        <h2>Data Retention</h2>
        <p>We retain your personal information only as long as necessary to:</p>
        <ul>
          <li>Provide services</li>
          <li>Maintain your account</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p>You may request deletion of your personal data at any time.</p>
      </section>

      <section>
        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Request correction or updates</li>
          <li>Request the deletion of your data</li>
        </ul>
        <p>To exercise these rights, please contact us using the details below.</p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>For any questions regarding this Privacy Policy, please contact:</p>
        <p style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
          <span>📧 <strong>Email:</strong> <a href="mailto:imoraofficial.in@gmail.com" style={{ color: "var(--color-terracotta)" }}>imoraofficial.in@gmail.com</a></span>
          <span>📞 <strong>Phone:</strong> <a href="tel:+919022771058" style={{ color: "var(--color-terracotta)" }}>+91 90227 71058</a></span>
        </p>
      </section>
    </PolicyWrapper>
  );
}

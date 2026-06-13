import PolicyWrapper from "../../components/PolicyWrapper";

export default function ReturnPolicy() {
  return (
    <PolicyWrapper title="Return Policy">
      <p style={{ marginBottom: "24px", fontStyle: "italic", opacity: 0.8 }}>
        Last Updated: April 08, 2026
      </p>

      <section>
        <p>
          At IMORA, we strive to ensure a smooth and hassle-free return experience. Please review the following guidelines before initiating a return.
        </p>
      </section>

      <section>
        <h2>How Do I Initiate a Return?</h2>
        <p>You can initiate a return by:</p>
        <ul>
          <li>Logging into your account and visiting the <strong>My Orders</strong> section</li>
          <li>Using the <strong>Return Request</strong> option on our website with your order details</li>
        </ul>
        <p>For assistance, you can also contact our customer support team.</p>
      </section>

      <section>
        <h2>Return Window</h2>
        <p>
          Returns can be initiated within 7 days of receiving your order. Requests raised after this period may not be accepted.
        </p>
      </section>

      <section>
        <h2>Eligibility Criteria for Returns</h2>
        <p>To be eligible for a return:</p>
        <ul>
          <li>The product must be unused, unwashed, and undamaged</li>
          <li>All original tags must be intact</li>
          <li>The item must be returned in its original packaging</li>
        </ul>
        <p>Returns that do not meet these conditions may be rejected.</p>
      </section>

      <section>
        <h2>How Will My Return Be Picked Up?</h2>
        <p>Once your return request is approved:</p>
        <ul>
          <li>Our courier partner will schedule a doorstep pickup</li>
          <li>You will receive a notification with pickup details</li>
        </ul>
        <p>Please ensure the product is properly packed before handing it over.</p>
      </section>

      <section>
        <h2>Do You Accept Returns from Other Platforms?</h2>
        <p>
          Returns are accepted only for orders placed on the official IMORA website. For purchases made through other platforms or stores, please contact the respective seller.
        </p>
      </section>

      <section>
        <h2>Important: Handing Over the Correct Product</h2>
        <p>
          Please ensure that you return the correct product. IMORA will not be responsible for any incorrect items handed over during pickup.
        </p>
      </section>

      <section>
        <h2>Return Approval & Confirmation</h2>
        <p>Once your product is received at our warehouse:</p>
        <ul>
          <li>It will undergo a quality check</li>
          <li>You will receive a confirmation email once approved</li>
        </ul>
        <p>If the product does not pass the quality check, it may be returned to you.</p>
      </section>

      <section>
        <h2>Exchange Policy</h2>
        <p>
          We offer size exchanges for eligible products, subject to availability. Exchange requests can be raised within the same 7-day return window.
        </p>
      </section>

      <section>
        <h2>Received a Wrong, Damaged, or Missing Product?</h2>
        <p>If you receive an incorrect, damaged, or incomplete order:</p>
        <ul>
          <li>Notify us within 24 hours of delivery</li>
          <li>Share an unboxing video clearly showing the package being opened</li>
        </ul>
        <p>This helps us verify and resolve your issue quickly. Claims without proof may not be accepted.</p>
      </section>

      <section>
        <h2>Are Returns Free?</h2>
        <p>Returns are free in cases where:</p>
        <ul>
          <li>You receive a wrong product</li>
          <li>The product is damaged or defective</li>
          <li>There is a size issue (if eligible)</li>
        </ul>
      </section>

      <section>
        <h2>What Happens If Pickup Fails?</h2>
        <p>
          Our courier partner will attempt pickup up to 2–3 times. If the pickup fails after multiple attempts, the request may be cancelled. You can contact our support team for further assistance.
        </p>
      </section>

      <section>
        <h2>What If Reverse Pickup Is Not Available in My Area?</h2>
        <p>If reverse pickup is not serviceable at your location:</p>
        <ul>
          <li>You may need to self-ship the product to our address</li>
          <li>Shipping charges up to ₹100 will be reimbursed after verification</li>
        </ul>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>For any return-related queries, please contact:</p>
        <p style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
          <span>📧 <strong>Email:</strong> <a href="mailto:imoraofficial.in@gmail.com" style={{ color: "var(--color-terracotta)" }}>imoraofficial.in@gmail.com</a></span>
          <span>📞 <strong>Phone:</strong> <a href="tel:+919022771058" style={{ color: "var(--color-terracotta)" }}>+91 90227 71058</a></span>
        </p>
      </section>
    </PolicyWrapper>
  );
}

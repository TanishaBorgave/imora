import PolicyWrapper from "../../components/PolicyWrapper";

export default function RefundPolicy() {
  return (
    <PolicyWrapper title="Refund Policy">
      <p style={{ marginBottom: "24px", fontStyle: "italic", opacity: 0.8 }}>
        Last Updated: April 08, 2026
      </p>

      <section>
        <p>
          At IMORA, we aim to provide a smooth and transparent refund experience. Please read the following policy to understand how refunds are processed.
        </p>
      </section>

      <section>
        <h2>When Will I Receive My Refund?</h2>
        <p>
          Once your return request is approved, the product is usually picked up within 1–3 business days.
        </p>
        <p>
          After the item is received and verified at our warehouse, your refund will be processed. The amount will typically reflect in your account within 5–7 business days, depending on your original payment method.
        </p>
      </section>

      <section>
        <h2>What Is the Refund Timeline?</h2>
        <ul>
          <li><strong>Return request approval:</strong> Within 24–48 hours</li>
          <li><strong>Pickup of product:</strong> Within 1–3 business days</li>
          <li><strong>Refund initiation:</strong> Within 24–48 hours after quality check</li>
          <li><strong>Refund credit:</strong> 5–7 business days (may vary by bank/payment provider)</li>
        </ul>
        <p>
          In some cases, where additional quality checks are required, refunds may take 7–10 business days after pickup.
        </p>
      </section>

      <section>
        <h2>Refund Conditions</h2>
        <p>Returns may not be accepted if:</p>
        <ul>
          <li>The product is used, washed, or damaged</li>
          <li>Original tags and packaging are missing</li>
          <li>The item is not in its original condition</li>
        </ul>
      </section>

      <section>
        <h2>Can I Change the Refund Method?</h2>
        <p>
          No. Refunds will be processed only to the original mode of payment used during the purchase.
        </p>
      </section>

      <section>
        <h2>Refunds for Cash on Delivery (COD) Orders</h2>
        <p>
          For COD orders, refunds will be processed via bank transfer (NEFT/IMPS) to your provided bank account details.
        </p>
      </section>

      <section>
        <h2>What If My Order Is Lost or Undelivered?</h2>
        <p>
          If your order is lost in transit or not delivered to your location, we will initiate a full refund, including any prepaid shipping charges.
        </p>
      </section>

      <section>
        <h2>Are Shipping or COD Charges Refundable?</h2>
        <p>
          Shipping charges and COD fees (if applicable) are non-refundable, unless the return is due to:
        </p>
        <ul>
          <li>A defective product</li>
          <li>An incorrect item delivered</li>
        </ul>
      </section>

      <section>
        <h2>Can I Cancel My Order?</h2>
        <p>
          You can request an order cancellation within 10 hours of placing the order by contacting our support team.
        </p>
        <p>
          Once the order is shipped, cancellation requests will not be accepted.
        </p>
        <p>
          Approved cancellations will be refunded to the original payment method.
        </p>
      </section>

      <section>
        <h2>How Long Do Card Refunds Take?</h2>
        <p>
          Refund timelines for debit/credit cards depend on your bank. Typically, it may take 5–7 business days for the amount to reflect in your account.
        </p>
        <p>
          For any delays beyond this period, we recommend contacting your bank directly.
        </p>
      </section>

      <section>
        <h2>Important Notes</h2>
        <ul>
          <li>Only the product value will be refunded (excluding shipping/COD charges unless applicable)</li>
          <li>Refund timelines may vary during high-demand periods</li>
          <li>All refunds are subject to product inspection and approval</li>
        </ul>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>For any refund-related queries, please contact:</p>
        <p style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
          <span>📧 <strong>Email:</strong> <a href="mailto:imoraofficial.in@gmail.com" style={{ color: "var(--color-terracotta)" }}>imoraofficial.in@gmail.com</a></span>
          <span>📞 <strong>Phone:</strong> <a href="tel:+919022771058" style={{ color: "var(--color-terracotta)" }}>+91 90227 71058</a></span>
        </p>
      </section>
    </PolicyWrapper>
  );
}

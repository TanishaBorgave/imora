import PolicyWrapper from "../../components/PolicyWrapper";

export default function ShippingPolicy() {
  return (
    <PolicyWrapper title="Shipping Policy">
      <p style={{ marginBottom: "24px", fontStyle: "italic", opacity: 0.8 }}>
        Last Updated: April 08, 2026
      </p>

      <section>
        <p>
          At IMORA, we aim to deliver your orders quickly and safely. Please review our shipping guidelines below for a smooth shopping experience.
        </p>
      </section>

      <section>
        <h2>Shipping Across India</h2>
        <p>
          We offer shipping across India through trusted courier partners to ensure secure and timely delivery.
        </p>
        <ul>
          <li>Free shipping is available on all prepaid orders</li>
          <li>A nominal fee may apply for Cash on Delivery (COD) orders</li>
        </ul>
      </section>

      <section>
        <h2>Order Processing Time</h2>
        <ul>
          <li>Orders are usually processed within 1–2 business days</li>
          <li>Orders are dispatched after successful confirmation</li>
          <li>Orders placed on weekends or public holidays will be processed on the next working day.</li>
        </ul>
      </section>

      <section>
        <h2>Delivery Timeline</h2>
        <ul>
          <li>Metro cities: 2–4 business days</li>
          <li>Other locations: 3–7 business days</li>
        </ul>
        <p>
          Delivery timelines may vary based on location and external factors such as weather or logistics delays.
        </p>
      </section>

      <section>
        <h2>Can I Reschedule My Delivery?</h2>
        <p>If you are unavailable at the time of delivery:</p>
        <ul>
          <li>You can contact the courier partner to reschedule delivery</li>
          <li>You may also opt for self-pickup from the nearest courier facility</li>
        </ul>
      </section>

      <section>
        <h2>What If My Order Is Delayed?</h2>
        <p>
          While we strive to deliver on time, delays may occur due to unforeseen circumstances.
        </p>
        <p>
          In such cases, you can contact our support team with your order ID for assistance.
        </p>
      </section>

      <section>
        <h2>Shipping Charges</h2>
        <ul>
          <li>Prepaid Orders: Free shipping</li>
          <li>COD Orders: Charges will be displayed at checkout</li>
        </ul>
      </section>

      <section>
        <h2>Is There a Limit for COD Orders?</h2>
        <p>
          Yes, Cash on Delivery is available for orders up to ₹ 5000, subject to serviceability.
        </p>
      </section>

      <section>
        <h2>Order Tracking</h2>
        <p>You can track your order easily:</p>
        <ul>
          <li>Visit the My Orders section in your account</li>
          <li>Use the Track Order option on our website</li>
          <li>Enter your order ID to view real-time status</li>
        </ul>
        <p>
          Tracking details will also be shared via SMS/email once your order is shipped.
        </p>
      </section>
    </PolicyWrapper>
  );
}

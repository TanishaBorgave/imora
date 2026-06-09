import PolicyWrapper from "../../components/PolicyWrapper";

export default function RefundPolicy() {
  return (
    <PolicyWrapper title="Refund Policy">
      <section>
        <h2>Overview</h2>
        <p>
          At Imora, your satisfaction is our priority. If you're not completely satisfied with your purchase, we offer a hassle-free refund policy. Please review the details below.
        </p>
      </section>

      <section>
        <h2>Refund Eligibility</h2>
        <p>You may be eligible for a refund if:</p>
        <ul>
          <li>Your refund request is made within 30 days of purchase</li>
          <li>The item is in original, unworn condition</li>
          <li>The item includes all original tags and packaging</li>
          <li>You provide proof of purchase</li>
        </ul>
      </section>

      <section>
        <h2>Non-Refundable Items</h2>
        <p>The following items are not eligible for refunds:</p>
        <ul>
          <li>Items purchased more than 30 days ago</li>
          <li>Worn, washed, or damaged items</li>
          <li>Items without original tags or packaging</li>
          <li>Sale or clearance items (final sale)</li>
          <li>Custom or personalized items</li>
        </ul>
      </section>

      <section>
        <h2>Refund Process</h2>
        <ol>
          <li>Contact us at refunds@imora.in with your order number</li>
          <li>Provide photos of the item and original packaging</li>
          <li>Receive return shipping instructions</li>
          <li>Send the item back to us in its original condition</li>
          <li>Once received and verified, your refund will be processed</li>
        </ol>
      </section>

      <section>
        <h2>Refund Timeline</h2>
        <p>
          Refunds are processed within 7-10 business days after we receive and inspect your returned item. Please allow an additional 5-7 business days for the refund to appear in your original payment method.
        </p>
      </section>

      <section>
        <h2>Shipping Costs</h2>
        <p>
          Original shipping charges are non-refundable. If you receive a defective item, we will provide a prepaid return label and process a full refund including original shipping costs.
        </p>
      </section>

      <section>
        <h2>Questions?</h2>
        <p>
          For any questions about our refund policy, please contact us at support@imora.in
        </p>
      </section>
    </PolicyWrapper>
  );
}

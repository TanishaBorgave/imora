import PolicyWrapper from "../../components/PolicyWrapper";

export default function Disclaimer() {
  return (
    <PolicyWrapper title="Disclaimer">
      <p style={{ marginBottom: "24px", fontStyle: "italic", opacity: 0.8 }}>
        Last Updated: April 08, 2026
      </p>

      <section>
        <h2>Website Disclaimer</h2>
        <p>
          The information contained on this website is for general informational purposes only. While we endeavor to keep the information accurate and up-to-date, IMORA makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website.
        </p>
      </section>

      <section>
        <h2>No Warranties</h2>
        <p>
          The website and all content are provided on an "as is" and "as available" basis. IMORA makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including any implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>
      </section>

      <section>
        <h2>Limitation of Liability</h2>
        <p>
          In no event shall IMORA, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profit, revenue, data, or use, incurred by you or any third party, whether in an action in contract or tort, even if we have been advised of the possibility of such damages.
        </p>
      </section>

      <section>
        <h2>Product Information</h2>
        <p>
          While we strive to provide accurate product descriptions and images, we do not warrant that:
        </p>
        <ul>
          <li>Product descriptions are completely accurate or error-free</li>
          <li>Product images exactly match the actual product</li>
          <li>Colors appear exactly as shown due to monitor/device variations</li>
          <li>All sizes and dimensions are precisely as stated</li>
          <li>Products will meet your specific expectations</li>
        </ul>
      </section>

      <section>
        <h2>External Links</h2>
        <p>
          The website may contain links to external websites. IMORA is not responsible for the content, accuracy, or practices of any external websites. These links are provided for your convenience only, and the inclusion of any link does not imply endorsement by IMORA of the linked site or the organization operating it.
        </p>
      </section>

      <section>
        <h2>Third-Party Content</h2>
        <p>
          Any opinions, advice, statements, services, offers, or other information expressed by third parties are those of the respective authors or distributors and not necessarily those of IMORA. IMORA does not endorse and is not responsible for the accuracy or reliability of any opinion, advice, or statement made by anyone other than an authorized IMORA representative.
        </p>
      </section>

      <section>
        <h2>User-Generated Content</h2>
        <p>
          IMORA does not endorse or guarantee the accuracy of any user-generated content, including but not limited to reviews, comments, or testimonials. We reserve the right to remove any content that violates our policies.
        </p>
      </section>

      <section>
        <h2>Changes to Content</h2>
        <p>
          We reserve the right to modify, update, or remove any content on the website, including prices, product descriptions, and policies, without prior notice. Your continued use of the website following such changes constitutes your acceptance of the modifications.
        </p>
      </section>

      <section>
        <h2>Technical Issues</h2>
        <p>
          IMORA is not responsible for technical issues, including but not limited to website downtime, server errors, or disruptions in service. We endeavor to maintain continuous service but cannot guarantee uninterrupted access.
        </p>
      </section>

      <section>
        <h2>Governing Law</h2>
        <p>
          This disclaimer is governed by and construed in accordance with the laws of India. Any disputes arising in relation to this disclaimer or use of the website shall be subject to the exclusive jurisdiction of the courts in Kolhapur.
        </p>
      </section>

      <section>
        <h2>Severability</h2>
        <p>
          If any provision of this disclaimer is found to be unenforceable, the remaining provisions shall continue in effect, and the unenforceable provision shall be reformed to the minimum extent necessary to make it enforceable.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>For any questions or queries regarding this Disclaimer, please contact:</p>
        <p style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
          <span>📧 <strong>Email:</strong> <a href="mailto:imoraofficial.in@gmail.com" style={{ color: "var(--color-terracotta)" }}>imoraofficial.in@gmail.com</a></span>
          <span>📞 <strong>Phone:</strong> <a href="tel:+919022771058" style={{ color: "var(--color-terracotta)" }}>+91 90227 71058</a></span>
        </p>
      </section>
    </PolicyWrapper>
  );
}

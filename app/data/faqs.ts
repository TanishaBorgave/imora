export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "Can I cancel my order?",
    answer:
      "Yes. Orders can be cancelled through My Account → Orders as long as the order has not been dispatched. Once shipped, cancellation is not possible.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 7-day return and exchange policy from the date of delivery. Please submit your request within 7 days along with clear photos showing the issue.",
  },
  {
    question: "How long do refunds take?",
    answer:
      "Refunds for prepaid cancelled orders are processed within 7–10 business days. The amount is credited to the original payment method used during checkout.",
  },
  {
    question: "Do you offer Cash on Delivery?",
    answer:
      "Yes, Cash on Delivery is available for orders within India. A small COD fee may apply depending on your location.",
  },
  {
    question: "How do I find my size?",
    answer:
      "Each product page includes a detailed size chart with measurements in inches and centimeters. If you're between sizes, we recommend going one size up for a more relaxed fit.",
  },
  {
    question: "What fabrics do you use?",
    answer:
      "We primarily use natural fabrics — cotton, cotton mul, cotton slub, cotton linen, and handloom cotton. Every piece is designed to breathe and feel soft against your skin.",
  },
];

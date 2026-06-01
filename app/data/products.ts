export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  badge?: string;
  category: string;
  fabric?: string;
  description?: string;
  sizes?: string[];
}

export const allProducts: Product[] = [
  {
    id: "1",
    name: "Ahana Sage — Block Print Short Kurti",
    slug: "ahana-sage-block-print-short-kurti",
    price: 599,
    originalPrice: 999,
    image: "/images/product-1.png",
    badge: "Sale",
    category: "short-kurtis",
    fabric: "100% Cotton",
    description: "A breezy sage green short kurti with hand-block floral print. Relaxed fit with mandarin collar and three-quarter sleeves.",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "2",
    name: "Meera Terracotta — Flowing Cotton Kaftan",
    slug: "meera-terracotta-flowing-cotton-kaftan",
    price: 849,
    image: "/images/product-2.png",
    category: "kaftans",
    fabric: "Cotton Mul",
    description: "A warm terracotta kaftan with delicate stitch detailing. Effortlessly flows with every step — perfect for slow mornings.",
    sizes: ["Free Size"],
  },
  {
    id: "3",
    name: "Rumi Mustard — Oversized Relaxed Top",
    slug: "rumi-mustard-oversized-relaxed-top",
    price: 549,
    image: "/images/product-3.png",
    category: "relaxed-tops",
    fabric: "Cotton Slub",
    description: "An oversized mustard top in soft cotton slub. Dropped shoulders and a round neck for that perfectly undone look.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "4",
    name: "Noor Indigo — Block Print Midi Dress",
    slug: "noor-indigo-block-print-midi-dress",
    price: 999,
    originalPrice: 1499,
    image: "/images/product-4.png",
    badge: "Sale",
    category: "indie-dresses",
    fabric: "Handloom Cotton",
    description: "A stunning indigo midi dress with hand-block print motifs. V-neck, gathered waist, and a free-flowing skirt.",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "5",
    name: "Tara Stripe — Cotton Co-ord Set",
    slug: "tara-stripe-cotton-coord-set",
    price: 1199,
    image: "/images/product-5.png",
    category: "co-ord-sets",
    fabric: "Handwoven Cotton",
    description: "A cream and terracotta striped co-ord set. Collared shirt paired with relaxed wide-leg pants — weekend-ready.",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "6",
    name: "Ira Cream — Pintuck Short Kurti",
    slug: "ira-cream-pintuck-short-kurti",
    price: 649,
    image: "/images/product-1.png",
    category: "short-kurtis",
    fabric: "Cotton Voile",
    description: "A cream short kurti with delicate pintuck detailing on the yoke. Airy and light for everyday wear.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "7",
    name: "Kavya Green — Relaxed Overlap Top",
    slug: "kavya-green-relaxed-overlap-top",
    price: 499,
    originalPrice: 799,
    image: "/images/product-1.png",
    badge: "Sale",
    category: "relaxed-tops",
    fabric: "Cotton",
    description: "A sage green overlap top with a relaxed silhouette. Pairs beautifully with white palazzos or denims.",
    sizes: ["S", "M", "L"],
  },
  {
    id: "8",
    name: "Priya Rust — Gathered Kaftan",
    slug: "priya-rust-gathered-kaftan",
    price: 899,
    image: "/images/product-2.png",
    category: "kaftans",
    fabric: "Mul Cotton",
    description: "A rust-toned kaftan with gathered detailing at the empire line. Minimalist, breathable, and effortlessly elegant.",
    sizes: ["Free Size"],
  },
  {
    id: "9",
    name: "Zara Ochre — Midi Shirt Dress",
    slug: "zara-ochre-midi-shirt-dress",
    price: 1099,
    image: "/images/product-3.png",
    category: "indie-dresses",
    fabric: "Cotton Linen",
    description: "An ochre shirt dress with roll-up sleeves and side pockets. Perfect for the woman who lives in her own rhythm.",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "10",
    name: "Anaya Blue — Oversized Cotton Top",
    slug: "anaya-blue-oversized-cotton-top",
    price: 499,
    image: "/images/product-4.png",
    category: "relaxed-tops",
    fabric: "Cotton Jersey",
    description: "A soft blue oversized top with a boat neck and curved hem. The kind of easy you'll reach for every day.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "11",
    name: "Diya Beige — Cotton Co-ord Set",
    slug: "diya-beige-cotton-coord-set",
    price: 1349,
    originalPrice: 1799,
    image: "/images/product-5.png",
    badge: "Sale",
    category: "co-ord-sets",
    fabric: "Organic Cotton",
    description: "A beige cotton co-ord with subtle texture. Crop top and high-waisted pants for a polished yet relaxed look.",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "12",
    name: "Leela Black — Asymmetric Short Kurti",
    slug: "leela-black-asymmetric-short-kurti",
    price: 749,
    image: "/images/product-3.png",
    category: "short-kurtis",
    fabric: "Cotton",
    description: "A black short kurti with asymmetric hemline and side slit. Bold yet wearable, for the quietly confident.",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
];

export const featuredProducts = allProducts.filter((_, i) => i < 6);

export const underNineNineNine = allProducts.filter(
  (p) => p.price <= 999
);

export const relaxedEveryday = allProducts.filter(
  (p) => p.category === "relaxed-tops" || p.category === "kaftans"
);

export function getProductsByCategory(category: string): Product[] {
  return allProducts.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

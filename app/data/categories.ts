export interface Category {
  name: string;
  slug: string;
  image: string;
  description: string;
}

export const categories: Category[] = [
  {
    name: "Short Kurtis",
    slug: "short-kurtis",
    image: "/images/product-1.png",
    description: "Breezy, block-printed, and made for every day.",
  },
  {
    name: "A-Line Kurtis",
    slug: "relaxed-tops",
    image: "/images/product-3.png",
    description: "Flared silhouettes for effortless grace.",
  },
  {
    name: "Straight Kurtis",
    slug: "kaftans",
    image: "/images/product-2.png",
    description: "Clean lines, timeless elegance.",
  },
  {
    name: "Cotton Kurtis",
    slug: "co-ord-sets",
    image: "/images/product-5.png",
    description: "Soft, breathable cotton for everyday comfort.",
  },
  {
    name: "Printed Kurtis",
    slug: "indie-dresses",
    image: "/images/product-4.png",
    description: "Artistic prints for the free-spirited.",
  },
  {
    name: "Chikankari Kurtis",
    slug: "oversized-cotton",
    image: "/images/hero.png",
    description: "Intricate embroidery, handcrafted beauty.",
  },
];

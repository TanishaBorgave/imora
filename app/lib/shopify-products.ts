import { shopifyFetch } from "./shopify";
import { GET_ALL_PRODUCTS, GET_PRODUCT_BY_HANDLE, GET_COLLECTIONS } from "./queries";

export interface ShopifyProductVariant {
  id: string;
  title: string;
  price: number;
  compareAtPrice?: number;
  availableForSale: boolean;
}

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
  variantId: string; // Used to add default variant to cart
  variants?: ShopifyProductVariant[]; // All variants
}

function transformShopifyProduct(node: any): Product {
  const price = parseFloat(node.priceRange?.minVariantPrice?.amount || "0");
  const compareAt = node.compareAtPriceRange?.minVariantPrice?.amount
    ? parseFloat(node.compareAtPriceRange.minVariantPrice.amount)
    : undefined;

  const fabricTag = node.tags?.find((tag: string) => tag.toLowerCase().startsWith("fabric:"));
  const fabric = fabricTag ? fabricTag.split(":")[1]?.trim() : node.productType || "Natural Fabric";

  // Map variants
  const variants: ShopifyProductVariant[] = (node.variants?.edges || []).map((edge: any) => ({
    id: edge.node.id,
    title: edge.node.title,
    price: parseFloat(edge.node.price?.amount || "0"),
    compareAtPrice: edge.node.compareAtPrice?.amount ? parseFloat(edge.node.compareAtPrice.amount) : undefined,
    availableForSale: edge.node.availableForSale,
  }));

  // Sizes can be extracted from the variants list
  const sizes = variants
    .map((v) => v.title)
    .filter((title) => title.toLowerCase() !== "default title");

  return {
    id: node.id,
    name: node.title,
    slug: node.handle,
    price,
    originalPrice: compareAt && compareAt > price ? compareAt : undefined,
    image: node.images?.edges[0]?.node?.url || "/images/product-1.png",
    hoverImage: node.images?.edges[1]?.node?.url || undefined,
    badge: compareAt && compareAt > price ? "Sale" : undefined,
    category: node.productType?.toLowerCase().replace(/\s+/g, "-") || "",
    fabric,
    description: node.description,
    sizes: sizes.length > 0 ? sizes : undefined,
    variantId: variants[0]?.id || "",
    variants,
  };
}

export async function getAllProducts(limit: number = 50): Promise<Product[]> {
  try {
    const response = await shopifyFetch<any>({
      query: GET_ALL_PRODUCTS,
      variables: { first: limit },
      cache: "no-store", // Keep it fresh
    });

    return (response.body?.products?.edges || []).map((edge: any) =>
      transformShopifyProduct(edge.node)
    );
  } catch (error) {
    console.error("Error in getAllProducts:", error);
    return [];
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const response = await shopifyFetch<any>({
      query: GET_PRODUCT_BY_HANDLE,
      variables: { handle: slug },
      cache: "no-store",
    });

    if (!response.body?.product) return null;
    return transformShopifyProduct(response.body.product);
  } catch (error) {
    console.error("Error in getProductBySlug:", error);
    return null;
  }
}

export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  try {
    const response = await shopifyFetch<any>({
      query: GET_COLLECTIONS,
      variables: { first: 50 },
      cache: "no-store",
    });

    const collections = response.body?.collections?.edges || [];
    const matchedCollection = collections.find(
      (edge: any) => edge.node.handle === categorySlug
    );

    if (matchedCollection) {
      return (matchedCollection.node.products?.edges || []).map((edge: any) =>
        transformShopifyProduct(edge.node)
      );
    }

    // Fallback: Filter all products by category tag / type if collection handle doesn't match
    const all = await getAllProducts();
    return all.filter((p) => p.category === categorySlug);
  } catch (error) {
    console.error("Error in getProductsByCategory:", error);
    return [];
  }
}

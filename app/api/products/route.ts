import { NextRequest } from "next/server";
import { shopifyFetch } from "../../lib/shopify";
import { GET_ALL_PRODUCTS, GET_COLLECTIONS } from "../../lib/queries";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const category = searchParams.get("category");
    const limit = parseInt(searchParams.get("limit") || "50");

    if (category) {
      const response = await shopifyFetch<any>({
        query: GET_COLLECTIONS,
        variables: { first: 50 },
        cache: "no-store",
      });

      const collections = response.body?.collections?.edges || [];
      const matched = collections.find(
        (edge: any) => edge.node.handle === category
      );

      if (matched) {
        const products = (matched.node.products?.edges || []).map(
          (edge: any) => edge.node
        );
        return Response.json({ products });
      }

      const allRes = await shopifyFetch<any>({
        query: GET_ALL_PRODUCTS,
        variables: { first: limit },
        cache: "no-store",
      });
      const allProducts = (allRes.body?.products?.edges || []).map(
        (edge: any) => edge.node
      );
      const filtered = allProducts.filter(
        (p: any) =>
          p.productType?.toLowerCase().replace(/\s+/g, "-") === category
      );
      return Response.json({ products: filtered.length > 0 ? filtered : allProducts });
    }

    const response = await shopifyFetch<any>({
      query: GET_ALL_PRODUCTS,
      variables: { first: limit },
      cache: "no-store",
    });

    const products = (response.body?.products?.edges || []).map(
      (edge: any) => edge.node
    );
    return Response.json({ products });
  } catch (error: any) {
    console.error("API /products error:", error);
    return Response.json(
      { error: error.message || "Failed to fetch products" },
      { status: 500 }
    );
  }
}

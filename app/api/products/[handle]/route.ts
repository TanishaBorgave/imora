import { shopifyFetch } from "../../../lib/shopify";
import { GET_PRODUCT_BY_HANDLE } from "../../../lib/queries";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ handle: string }> }
) {
  try {
    const { handle } = await params;

    const response = await shopifyFetch<any>({
      query: GET_PRODUCT_BY_HANDLE,
      variables: { handle },
      cache: "no-store",
    });

    const product = response.body?.product;
    if (!product) {
      return Response.json({ error: "Product not found" }, { status: 404 });
    }

    return Response.json({ product });
  } catch (error: any) {
    console.error("API /products/[handle] error:", error);
    return Response.json(
      { error: error.message || "Failed to fetch product" },
      { status: 500 }
    );
  }
}

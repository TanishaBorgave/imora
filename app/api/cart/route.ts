import { NextRequest } from "next/server";
import { shopifyFetch } from "../../lib/shopify";
import { GET_CART, CREATE_CART } from "../../lib/queries";

export async function GET(request: NextRequest) {
  try {
    const cartId = request.nextUrl.searchParams.get("cartId");
    if (!cartId) {
      return Response.json({ error: "cartId is required" }, { status: 400 });
    }
    const response = await shopifyFetch<any>({
      query: GET_CART,
      variables: { cartId },
      cache: "no-store",
    });
    return Response.json({ cart: response.body?.cart || null });
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { lines } = body;
    if (!lines || !Array.isArray(lines) || lines.length === 0) {
      return Response.json({ error: "lines array is required" }, { status: 400 });
    }
    const response = await shopifyFetch<any>({
      query: CREATE_CART,
      variables: { lines },
      cache: "no-store",
    });
    const cart = response.body?.cartCreate?.cart;
    if (!cart) {
      return Response.json({ error: "Failed to create cart" }, { status: 500 });
    }
    return Response.json({ cart, checkoutUrl: cart.checkoutUrl });
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

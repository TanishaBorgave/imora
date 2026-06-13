import { NextRequest } from "next/server";
import { shopifyFetch } from "../../../lib/shopify";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../../../lib/queries";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { cartId, lines } = body;
    if (!cartId || !lines) {
      return Response.json({ error: "cartId and lines are required" }, { status: 400 });
    }
    const response = await shopifyFetch<any>({
      query: ADD_TO_CART,
      variables: { cartId, lines },
      cache: "no-store",
    });
    const cart = response.body?.cartLinesAdd?.cart;
    return Response.json({ cart });
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const { cartId, lineIds } = body;
    if (!cartId || !lineIds) {
      return Response.json({ error: "cartId and lineIds are required" }, { status: 400 });
    }
    const response = await shopifyFetch<any>({
      query: REMOVE_FROM_CART,
      variables: { cartId, lineIds },
      cache: "no-store",
    });
    const cart = response.body?.cartLinesRemove?.cart;
    return Response.json({ cart });
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

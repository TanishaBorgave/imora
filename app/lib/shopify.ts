const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;
const endpoint = `https://${domain}/api/2024-04/graphql.json`;

export async function shopifyFetch<T>({
  query,
  variables = {},
  cache = "force-cache",
  next,
}: {
  query: string;
  variables?: Record<string, any>;
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
}): Promise<{ status: number; body: T }> {
  try {
    if (!domain || !token) {
      throw new Error("Shopify Store Domain and Access Token are not configured in environment variables.");
    }

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": token,
      },
      body: JSON.stringify({ query, variables }),
      cache,
      next,
    });

    const json = await response.json();

    if (json.errors) {
      console.error("Shopify GraphQL errors:", json.errors);
      throw new Error(json.errors[0]?.message || "GraphQL error");
    }

    return {
      status: response.status,
      body: json.data,
    };
  } catch (error) {
    console.error("Error fetching from Shopify storefront API:", error);
    throw error;
  }
}

const domain = "imora-store.myshopify.com";
const token = "01bca71c5ac355fa1e16313013500a92";

async function testCheckout() {
  // 1. Get Variant ID
  let variantId = null;
  const productRes = await fetch(`https://${domain}/api/2024-01/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({
      query: `
        query {
          product(handle: "ahana-sage-block-print-short-kurti") {
            id
            variants(first: 1) {
              edges {
                node {
                  id
                  availableForSale
                }
              }
            }
          }
        }
      `,
    }),
  });
  
  const productData = await productRes.json();
  console.log("Product Data:", JSON.stringify(productData, null, 2));
}

testCheckout();

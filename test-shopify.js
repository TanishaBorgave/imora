const fs = require('fs');

async function testShopify() {
  const domain = "imora-store.myshopify.com";
  const token = "01bca71c5ac355fa1e16313013500a92";
  
  console.log("Testing connection to:", domain);
  
  try {
    const response = await fetch(`https://${domain}/api/2024-01/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": token,
      },
      body: JSON.stringify({
        query: `
          query {
            products(first: 5) {
              edges {
                node {
                  id
                  title
                  handle
                }
              }
            }
          }
        `,
      }),
    });
    
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error connecting:", error.message);
  }
}

testShopify();

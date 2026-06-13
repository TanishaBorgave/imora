import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryGrid from "./components/CategoryGrid";
import PosterBanner from "./components/PosterBanner";
import ProductCarousel from "./components/ProductCarousel";
import ShopTheLook from "./components/ShopTheLook";
import EditorialBanner from "./components/EditorialBanner";
import SaleBanner from "./components/SaleBanner";
import CustomerReviews from "./components/CustomerReviews";
import InstagramGallery from "./components/InstagramGallery";
import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { getAllProducts } from "./lib/shopify-products";

export default async function Home() {
  const allProducts = await getAllProducts();
  
  // Create dynamic categories based on Shopify data
  const featuredProducts = allProducts.slice(0, 6);
  const underNineNineNine = allProducts.filter((p) => p.price <= 999);
  
  // Try to find products that match relaxed tops or kaftans, otherwise just show some products so it's not empty
  let relaxedEveryday = allProducts.filter(
    (p) => p.category === "relaxed-tops" || p.category === "kaftans"
  );
  if (relaxedEveryday.length === 0) {
    relaxedEveryday = allProducts.slice(0, 4);
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategoryGrid />
        <PosterBanner />
        <ProductCarousel
          label="Curated"
          title="Featured Collection"
          subtitle="Handpicked pieces we're loving this season."
          products={featuredProducts}
          viewAllHref="/collections"
        />
        <SaleBanner />
        <ShopTheLook />
        {relaxedEveryday.length > 0 && (
          <ProductCarousel
            label="Everyday ease"
            title="Relaxed Everyday Wear"
            subtitle="Tops and kaftans that feel like a deep breath."
            products={relaxedEveryday}
            viewAllHref="/collections/relaxed-tops"
          />
        )}
        <EditorialBanner />
        {underNineNineNine.length > 0 && (
          <ProductCarousel
            label="Affordable artistry"
            title="Everything Under ₹999"
            subtitle="Beautiful, wearable pieces that don't break the bank."
            products={underNineNineNine}
            viewAllHref="/collections"
          />
        )}
        <CustomerReviews />
        <InstagramGallery />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

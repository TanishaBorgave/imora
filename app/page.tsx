import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryGrid from "./components/CategoryGrid";
import PosterBanner from "./components/PosterBanner";
import ProductCarousel from "./components/ProductCarousel";
import ShopTheLook from "./components/ShopTheLook";
import EditorialBanner from "./components/EditorialBanner";
import CustomerReviews from "./components/CustomerReviews";
import InstagramGallery from "./components/InstagramGallery";
import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { featuredProducts, underNineNineNine, relaxedEveryday } from "./data/products";

export default function Home() {
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
        <ShopTheLook />
        <ProductCarousel
          label="Everyday ease"
          title="Relaxed Everyday Wear"
          subtitle="Tops and kaftans that feel like a deep breath."
          products={relaxedEveryday}
          viewAllHref="/collections/relaxed-tops"
        />
        <EditorialBanner />
        <ProductCarousel
          label="Affordable artistry"
          title="Everything Under ₹999"
          subtitle="Beautiful, wearable pieces that don't break the bank."
          products={underNineNineNine}
          viewAllHref="/collections"
        />
        <CustomerReviews />
        <InstagramGallery />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

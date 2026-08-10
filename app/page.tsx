import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import TourismCategories from "@/components/home/TourismCategories";
import FeaturedDestinations from "@/components/destination/FeaturedDestinations";
import ExploreMap from "@/components/destination/ExploreMap";
import WhyEcotourism from "@/components/home/WhyEcotourism";
import LocalCommunity from "@/components/home/LocalCommunity";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />

      <Hero />

      <TourismCategories />

      <FeaturedDestinations />

      <ExploreMap />

      <WhyEcotourism />

      <LocalCommunity/>

      <Footer/>

    </main>
  );
}
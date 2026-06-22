
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Categories from "@/components/home/Categories";
import SuccessStories from "@/components/home/SuccessStories";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />

     <FeaturedProducts/>

     <Categories/>

     <SuccessStories/>

     <Footer/>
    </>
  );
}
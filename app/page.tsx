import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import ScreeningTargets from "@/components/sections/ScreeningTargets";
import BrandStory from "@/components/sections/BrandStory";
import HowItWorks from "@/components/sections/HowItWorks";
import ProductGallery from "@/components/sections/ProductGallery";
import ImportantInformation from "@/components/sections/ImportantInformation";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <main>
        <Introduction />
        <ScreeningTargets />
        <BrandStory />
        <HowItWorks />
        <ProductGallery />
        <ImportantInformation />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
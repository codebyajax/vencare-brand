import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

import Hero from "@/app/components/sections/Hero";
import Introduction from "@/app/components/sections/Introduction";
import ScreeningTargets from "@/app/components/sections/ScreeningTargets";
import BrandStory from "@/app/components/sections/BrandStory";
import HowItWorks from "@/app/components/sections/HowItWorks";
import ProductGallery from "@/app/components/sections/ProductGallery";
import ImportantInformation from "@/app/components/sections/ImportantInformation";
import FAQ from "@/app/components/sections/FAQ";
import Contact from "@/app/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
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
import Header from "./components/header";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import ReviewSections from "./components/review-sections";
import WhatWeDoSection from "./components/what-we-do-section";
import TransformingIdeas from "./components/transforming-ideas";
import DetailFormSection from "./components/detail-form-section";

export default function Home() {
  return (
    <div>
      <Header />
      <Footer />
      <HeroSection />
      <ReviewSections />
      <WhatWeDoSection/>
      <TransformingIdeas/>
      <DetailFormSection/>
    </div>
  );
}

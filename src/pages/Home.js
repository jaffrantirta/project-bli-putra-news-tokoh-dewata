import React from "react";
import { Analytics } from "@vercel/analytics/react";
import {
  CategorySection,
  Footer,
  HeaderSection,
  HeroSection,
  NavbarSection,
  NewsListSection,
} from "../sections";

export default function Home() {
  return (
    <div>
      <Analytics />
      <HeaderSection />
      <hr></hr>
      <NavbarSection />
      <hr></hr>
      <HeroSection />
      <NewsListSection />
      <CategorySection />
      <Footer />
    </div>
  );
}

import React from "react";
import Banner from "../../components/Banners/Banner";
import TvBanner from "../../components/Banners/TvBanner";
import MobileSection from "../../components/Banners/MobileSection";
import FaqSection from "../../components/Banners/FaqSection";
import Footer from "../../components/Footer";

export const BannerHome = () => {
  return (
    <>
      <Banner />
      <TvBanner />
      <MobileSection />
      <FaqSection />
      <Footer />
    </>
  );
};

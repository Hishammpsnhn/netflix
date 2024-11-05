import React, { useEffect } from "react";
import Banner from "../../components/Banners/Banner";
import TvBanner from "../../components/Banners/TvBanner";
import MobileSection from "../../components/Banners/MobileSection";
import FaqSection from "../../components/Banners/FaqSection";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

export const BannerHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("userInfoNet");
    if(user){
      navigate('/home')
    }
  }, [navigate]);
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

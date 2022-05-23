import React from "react";
import { CurrencyConvertor, FeedbackBanner, Footer, IntroBanner, Navbar, PlansBanner} from "../../components";

export const LandingPage = () => {
  return (
    <>
      <Navbar/>
      <IntroBanner/>
      <PlansBanner/>
      <CurrencyConvertor/>
      <FeedbackBanner />
      <Footer/>
    </>
  );
};

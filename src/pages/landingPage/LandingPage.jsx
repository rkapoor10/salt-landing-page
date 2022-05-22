import React from "react";
import { CurrencyConvertor, FeedbackBanner, Footer, IntroBanner, Navbar, PlansBanner, SubscriptionCard } from "../../components";

export const LandingPage = () => {
  return (
    <>
      <h5>Landing Page</h5>
      <Navbar/>
      <IntroBanner/>
      <PlansBanner/>
      <CurrencyConvertor/>
      <FeedbackBanner />
      <SubscriptionCard/>
      <Footer/>
    </>
  );
};

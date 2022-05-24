import React from "react";
import "./FeedbackBanner.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-elastic-carousel";
import { FeedbackCard } from "../../cards/feedbackCard/FeedbackCard";

export const FeedbackBanner = () => {
  return (
    <div className="feedbackbanner-container">
      <h1>Trusted by Thousands of Happy Customer</h1>
      <p>
        These are the stories of our customers who have joined us with great
        pleasure when using this crazy noebank.
      </p>
      <div className="carousel">
        <Carousel itemsToShow={3}>
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
        </Carousel>
      </div>
    </div>
  );
};

import React from "react";
import "./FeedbackBanner.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-elastic-carousel";
import { FeedbackCard } from "../../cards/feedbackCard/FeedbackCard";

export const FeedbackBanner = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  return (
    <div className="feedbackbanner-container">
      <h1>Trusted by Thousands of Happy Customer</h1>
      <p>
        These are the stories of our customers who have joined us with great
        pleasure when using this crazy noebank.
      </p>
      <div className="carousel">
        <Carousel breakPoints={breakPoints}>
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

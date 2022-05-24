import React from "react";
import {AiFillStar} from "react-icons/ai";
import "./FeedbackCard.css";

export const FeedbackCard = () => {
  return (
    <div className="feedback-container">
      <div className="details">
        <div className="profile">
          <div></div>
          <div>
            <h2>Vizet Robert</h2>
            <p>Arsaw, Poland</p>
          </div>
        </div>
        <div className="flex flex-center"> <span>4.5 </span> <AiFillStar className="golden-star"/> </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac elit
        accumsan, urna nibh nibh et tortor ut enim. Consectetur est est tellus
        semper luctus. Auctor eget pellentesque at ut sed tincidunt nulla nisl.
      </p>
    </div>
  );
};

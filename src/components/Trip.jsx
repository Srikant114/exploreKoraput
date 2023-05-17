import React from "react";
import TripData from "./dynamicdata/TripData";
import "../styles/Trip.css";

/** Import Images */

import img5 from "../assets/explorekoraput4.jpg";
import img6 from "../assets/explorekoraput5.jpg";
import img7 from "../assets/explorekoraput6.jpg";

const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You Can Discover Unique Destination, Stay Connected With Us ❤️</p>
      <div className="tripcard">
        <TripData
          image={img5}
          title="Trip to a Location - 1"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni odit nisi placeat quod nostrum quaerat molestiae earum provident incidunt accusantium, nesciunt,sit amet consectetur adipisicing elit.commodi quae laborum cum! Minus tenetur earum quidem velit sit amet consectetur adipisicing elit."
        />
        <TripData
          image={img6}
          title="Trip to a Location - 2"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni odit nisi placeat quod nostrum quaerat molestiae earum provident incidunt accusantium, nesciunt,sit amet consectetur adipisicing elit.commodi quae laborum cum! Minus tenetur earum quidem velit sit amet consectetur adipisicing elit."
        />
        <TripData
          image={img7}
          title="Trip to a Location - 3"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni odit nisi placeat quod nostrum quaerat molestiae earum provident incidunt accusantium, nesciunt,sit amet consectetur adipisicing elit.commodi quae laborum cum! Minus tenetur earum quidem velit sit amet consectetur adipisicing elit."
        />
      </div>
    </div>
  );
};

export default Trip;

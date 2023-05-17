import React from "react";
import "../styles/Destination.css";
import DestinationData from "./dynamicdata/DestinationData";

/** Images Import */

import deomali_1 from "../assets/explorekoraput_deomali1.jpg";
import deomali_2 from "../assets/explorekoraput_deomali2.jpg";
import duduma_1 from "../assets/explorekoraput_duduma1.jpg";
import duduma_2 from "../assets/explorekoraput_duduma2.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>It’s not what you look at that matters. It’s what you see.</p>

      { /** Dynamic Destination Data from Destination Data */ }

      <DestinationData
        className="first-desc"
        heading="Deomali The Triund of Odisha"
        text="Deomali, Odisha's tallest mountain peak, is 1762 metres high and
            nestled in the lap of the Eastern Ghats, making it perfect for Aero
            Gliding and hiking trips. It's 60 km from Koraput."
        img1={ deomali_1 }
        img2={ deomali_2 }
      />

      <DestinationData
        className="first-desc-reverse"
        heading="Duduma Waterfall"
        text="Duduma Falls, located on the border between Odisha and Andhra Pradesh,
            falls more than 550 feet. The viewpoint is easily accessible by car and
            is around two hours' drive from Koraput. Duduma Falls is one of the tallest
            'plunge' type waterfalls in India, ranking third in Odisha in terms of water column"
        img1={ duduma_1 }
        img2={ duduma_2 }
      />
    </div>
  );
};

export default Destination
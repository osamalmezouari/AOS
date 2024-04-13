import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import slider from "../../Assets/slider.png";

export const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{ width: "100%", paddingLeft: "50px", paddingRight: "50px" }}>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={4000} // Set interval for automatic sliding
      >
        <Carousel.Item>
          <img
            src={slider}
            alt="First slide"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <Carousel.Caption>
            <h3>Beautiful Scenery</h3>
            <p>Enjoy the breathtaking views of nature.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={slider}
            alt="Second slide"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <Carousel.Caption>
            <h3>Adventure Awaits</h3>
            <p>Embark on thrilling journeys to exotic destinations.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={slider}
            alt="Third slide"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <Carousel.Caption>
            <h3>Relaxation Retreat</h3>
            <p>Unwind and rejuvenate in tranquil surroundings.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

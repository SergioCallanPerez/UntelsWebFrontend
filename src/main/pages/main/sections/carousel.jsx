import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import "@/styles/carousel.css";
import carouselIMG1 from "@/assets/carrusel1.png";
import carouselIMG2 from "@/assets/carrusel2.png";
import carouselIMG3 from "@/assets/carrusel3.png";
import carouselIMG4 from "@/assets/carrusel4.png";
import carouselIMG5 from "@/assets/carrusel5.png";

const carouselImages = [
  carouselIMG1,
  carouselIMG2,
  carouselIMG3,
  carouselIMG4,
  carouselIMG5,
];

export default function MainCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="carousel"
        controls={false}
      >
        {carouselImages.map((img, idx) => (
          <Carousel.Item key={idx} interval={4000}>
            <img
              src={img}
              alt={`carousel ${idx + 1}`}
              className="carouselIMG"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import "@/styles/carousel.css";
import carouselIMG1 from "@/assets/carrusel1.png";
import carouselIMG2 from "@/assets/carrusel2.png";
import carouselIMG3 from "@/assets/carrusel3.png";
import carouselIMG4 from "@/assets/carrusel4.png";
import carouselIMG5 from "@/assets/carrusel5.png";
import { useMediaQuery } from "react-responsive";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const carouselImages = [
  carouselIMG1,
  carouselIMG2,
  carouselIMG3,
  carouselIMG4,
  carouselIMG5,
];

export default function MainCarousel() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  
  const isMd = useMediaQuery({
    query: "(max-width: 768px)",
  });
 
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleLink = () => {
    navigate("/experiences/e");
  }

  return (
    <section className="position-relative">
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
      <Button onClick={handleLink} className="position-absolute carousel-info-btn">
        Mas información
      </Button>
    </section>
  );
}

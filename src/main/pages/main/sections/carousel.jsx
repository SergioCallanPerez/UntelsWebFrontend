import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import "@/styles/carousel.css";
import carouselIMG1 from "@/assets/carousel_assets/carrusel1.png";
import carouselIMG2 from "@/assets/carousel_assets/carrusel2.png";
import carouselIMG3 from "@/assets/carousel_assets/carrusel3.png";
import carouselIMG4 from "@/assets/carousel_assets/carrusel4.png";
import carouselIMG5 from "@/assets/carousel_assets/carrusel5.png";
import { useMediaQuery } from "react-responsive";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";

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

  return (
    <section>
      <div className="carousel-container">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          controls={false}
          //indicators={false}
          className="carousel-main"
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
        {/*
        <Card className="primary carousel-card border-0">
          <Card.Body className="d-flex m-5 p-0 gap-4 flex-column text-center justify-content-center">
            <Card.Title as={"h2"}>
              <b>UNTELS en el Top 10 de Investigación 2024</b>
            </Card.Title>
            <Card.Text as={"p"}>
              Excelencia en producción científica y compromiso con la
              innovación.
            </Card.Text>
            <Button
              className={`btn-on-primary mx-auto px-5 py-2 ${
                isMobile ? "mobile" : ""
              }`}
            >
              <b>Ver más</b>
            </Button>
          </Card.Body>
        </Card>
        */}
        <div className="carousel-indicators"></div>
      </div>
    </section>
  );
}

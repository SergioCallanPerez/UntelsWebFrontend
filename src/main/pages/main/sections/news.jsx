import { useState } from "react";

import "@/styles/news.css";
import carouselIMG1 from "@/assets/news_assets/new1.png";
import carouselIMG2 from "@/assets/news_assets/new2.png";
import carouselIMG3 from "@/assets/news_assets/new3.png";
import { Card, Container } from "react-bootstrap";
import PagerView from "@/components/pager";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const news = [
  {
    id: "1",
    img: carouselIMG1,
    title: "Untels inaugura el nuevo Laboratorio de Investigación e Innovación en Alimentos",
    text: "El evento contó con la participación de autoridades académicas y administrativas, así como estudiantes y docentes",
  },
  {
    id: "2",
    img: carouselIMG2,
    title: "Vicerrectorado de Investigación realizó el Curso de Especialización en Métodos Moleculares y Genómicos",
    text: "La actividad fue coordinada por el Instituto de Investigación, a través del BIOPROSGEN, y reunió a estudiantes de la carrera de Ingeniería Ambiental",
  },
  {
    id: "3",
    img: carouselIMG3,
    title: "Untels recibe a estudiantes universitarios de Ecuador, la primera delegación en visitarnos bajo movilidad estudiantil internacional",
    text: "Como parte del Programa de Movilidad Estudiantil Internacional.",
  },
];

export default function News() {
  const isMd = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <section>
      <Container fluid className="mx-0 px-0 mt-3">
        <Container className="d-flex flex-column">
          <h2 className="background-title with-underline text-center">
            <b>Noticias</b>
          </h2>
          <Link className={`background my-4 ${isMd ? "mx-auto" : "ms-auto"}`}>
            Ver todo
          </Link>
          <PagerView onBackground>
            {news.map((news) => (
              <Card
                key={news.id}
                className="background border-0 rounded-4 mx-4 mb-2 with-box-shadow news-cards"
              >
                <Card.Img
                  className="news-cardImg rounded-4"
                  variant="top"
                  src={news.img}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title as={"h5"} className="mt-3">
                    {news.title}
                  </Card.Title>
                  <Card.Text as={"p"} className="mt-4">
                    {news.text}
                  </Card.Text>
                  <Link className="ms-auto background-title">Ver más</Link>
                </Card.Body>
              </Card>
            ))}
          </PagerView>
        </Container>
      </Container>
    </section>
  );
}

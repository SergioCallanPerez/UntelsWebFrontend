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
    title: "Lorem, ipsum dolor sit amet consectetur",
    text: "Lorem, ipsum dolor sit amet consectetur, Lorem, ipsum dolor sit amet consectetur",
  },
  {
    id: "2",
    img: carouselIMG2,
    title: "Lorem, ipsum dolor sit amet consectetur",
    text: "Lorem, ipsum dolor sit amet consectetur, Lorem, ipsum dolor sit amet consectetur",
  },
  {
    id: "3",
    img: carouselIMG3,
    title: "Lorem, ipsum dolor sit amet consectetur",
    text: "Lorem, ipsum dolor sit amet consectetur, Lorem, ipsum dolor sit amet consectetur",
  },
  {
    id: "4",
    img: carouselIMG3,
    title: "Lorem, ipsum dolor sit amet consectetur",
    text: "Lorem, ipsum dolor sit amet consectetur, Lorem, ipsum dolor sit amet consectetur",
  },
  {
    id: "5",
    img: carouselIMG3,
    title: "Lorem, ipsum dolor sit amet consectetur",
    text: "Lorem, ipsum dolor sit amet consectetur, Lorem, ipsum dolor sit amet consectetur",
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
                className="background border-0 rounded-4 mx-4 mb-2 with-box-shadow"
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

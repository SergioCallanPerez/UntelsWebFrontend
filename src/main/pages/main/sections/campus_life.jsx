import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Ben from "../../../assets/benefits.png";
import Dep from "../../../assets/deport_activity.png";
import Res from "../../../assets/research_center.png";
import Book from "../../../assets/svgs/book.svg";
import Sports from "../../../assets/svgs/sports.svg";
import Laboratories from "../../../assets/svgs/laboratories.svg";
import "../../../styles/campus_life.css";

const cards = [
  {
    id: "1",
    title: "Centros de investigación y desarrollo",
    img: Res,
    icon: Laboratories,
  },
  {
    id: "2",
    title: "Actividades culturales y deportivas",
    img: Dep,
    icon: Sports,
  },
  {
    id: "3",
    title: "Espacios para el estudio y la colaboración",
    img: Ben,
    icon: Book,
  },
];

export default function CampusLife() {
  return (
    <section>
      <Container>
        <h2 className="background-title with-underline text-center">
          <b>Vida universitaria: ¿Qué encontrarás en UNTELS?</b>
        </h2>
        <Row className="mt-5 justify-content-center">
          {cards.map((item) => (
            <Col md={3} key={item.id} className="mx-4">
              <div className="mt-4 mt-md-0">
                <img
                  src={item.img}
                  width="100%"
                  className="rounded-4 campus-img"
                />
                <Card className="background border-0 rounded-4 with-box-shadow campus-card">
                  <Card.Body>
                    <Card.Img variant="top" src={item.icon} height="50px" />
                    <Card.Text as={"p"} className="text-center mt-3">
                      <b>{item.title}</b>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

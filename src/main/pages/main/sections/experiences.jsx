import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import userLogo from "@/assets/user_icon.png";
import "@/styles/experiences.css";

const cases = [
  {
    id: "1",
    name: "Jhon Doe",
    text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    work: "Desarrollador",
  },
  {
    id: "2",
    name: "Jane Doe",
    text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    work: "Diseñador UX",
  },
  {
    id: "3",
    name: "Jhon Smith",
    text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    work: "Desarrollador",
  },
];

export default function Experiences() {
  return (
    <section className="py-4 primary">
      <Container>
        <div className="d-flex align-items-center with-h-divider-on-background justify-content-center">
          <h3>
              <b>Nuestra comunidad habla por nosotros</b>
          </h3>
        </div>
        <Row className="g-4 justify-content-center">
          {cases.map((caseItem) => (
            <Col xs={12} md={3} key={caseItem.id} className="d-flex flex-column align-items-center text-center">
              <Card className="background-light m-3 justify-content-center">
                <Card.Body>
                    <Card.Img
                      className="cardImg background rounded-circle"
                      variant="top"
                      src={userLogo}
                    />
                    <Card.Title className="on-primary-color m-2">
                      <b>{caseItem.name}</b>
                    </Card.Title>
                    <Card.Subtitle className=" m-2 on-primary-color with-h-divider-on-background">
                    <b>{caseItem.work}</b>
                    </Card.Subtitle>
                    <Card.Text className="py-3 on-primary-color">
                      {caseItem.text}
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

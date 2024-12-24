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
    <section className="py-4">
      <Container>
        <h2 className={"pb-3 on-background-title text-center text-md-start with-h-divider-on-background"}>
          <b>Experiencias de éxito</b>
        </h2>
        <Row className="g-4 justify-content-center">
          {cases.map((caseItem) => (
            <Col xs={12} md={3} key={caseItem.id}>
              <Card className="primary">
                <Card.Body>
                  <div className="d-flex pb-3 align-items-center with-h-divider-on-background">
                    <Card.Img
                      className="cardImg background rounded-circle"
                      variant="top"
                      src={userLogo}
                    />
                    <Card.Title className="on-primary-color">
                      <b>{caseItem.name}</b>
                    </Card.Title>
                  </div>
                  <Card.Text className="py-3 with-h-divider-on-background">
                    {caseItem.text}
                  </Card.Text>
                  <Card.Subtitle>
                    <b>{caseItem.work}</b>
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

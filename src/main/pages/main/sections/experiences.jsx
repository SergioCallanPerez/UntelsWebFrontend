import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import PagerView from "@/components/pager";
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
  {
    id: "4",
    name: "Jhon Doe",
    text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    work: "Desarrollador",
  },
  {
    id: "5",
    name: "Jane Doe",
    text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    work: "Diseñador UX",
  },
  {
    id: "6",
    name: "Jhon Smith",
    text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    work: "Desarrollador",
  },
  {
    id: "7",
    name: "Jhon Doe",
    text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    work: "Desarrollador",
  },
  {
    id: "8",
    name: "Jane Doe",
    text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    work: "Diseñador UX",
  },
  {
    id: "9",
    name: "Jhon Smith",
    text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    work: "Desarrollador",
  },
  {
    id: "10",
    name: "Jhon Doe",
    text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    work: "Desarrollador",
  },
  {
    id: "11",
    name: "Jane Doe",
    text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    work: "Diseñador UX",
  },
];

export default function Experiences() {
  return (
    <section>
      <h2 className="background-title with-underline text-center">
        <b>Nuestra Comunidad Habla por Nosotros</b>
      </h2>
      <Container fluid className="primary mx-0 px-0 py-5 mt-5">
        <Container>
          <PagerView>
            {cases.map((caseItem) => (
              <Card
                key={caseItem.id}
                className="background-light rounded-4 mx-4 py-4"
              >
                <Card.Body className="text-center">
                  <Card.Img
                    className="cardImg background rounded-circle"
                    variant="top"
                    src={userLogo}
                  />
                  <Card.Title as={"h5"} className="mt-3">
                    <b>{caseItem.name}</b>
                  </Card.Title>
                  <Card.Subtitle as={"p"} className="mt-3">
                    {caseItem.work}
                  </Card.Subtitle>
                  <Card.Text as={"p"} className="mt-4">
                    {'"'}
                    {caseItem.text}
                    {'"'}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </PagerView>
        </Container>
      </Container>
    </section>
  );
}

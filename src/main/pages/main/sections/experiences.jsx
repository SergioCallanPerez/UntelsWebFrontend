import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import PagerView from "@/components/pager";
import userLogo from "@/assets/user_icon.png";

import "@/styles/experiences.css";

const cases = [
  {
    id: "1",
    name: " Ana López",
    text: "UNTELS me dio las herramientas para liderar proyectos internacionales. Aquí aprendí a innovar y marcar la diferencia.",
    work: "Ingeniería Ambiental",
  },
  {
    id: "2",
    name: "Carlos Méndez",
    text: "La calidad de los docentes y las oportunidades de investigación hicieron de mi experiencia universitaria algo único.",
    work: "Ingeniería Electrónica",
  },
  {
    id: "3",
    name: "Enrique Paredes",
    text: "En UNTELS descubrí mi pasión por la tecnología y aprendí a superar los retos con creatividad.",
    work: "Ingeniería de Sistemas",
  },
  {
    id: "4",
    name: "María González",
    text: "La UNTELS me enseñó a trabajar en equipo y a desarrollar proyectos sostenibles con impacto real.",
    work: "Ingeniería Ambiental",
  },
  {
    id: "5",
    name: "Fernando Ruiz",
    text: "Mis años en UNTELS fueron fundamentales para mi desarrollo profesional y personal. Aquí aprendí a destacar.",
    work: "Ingeniería Ambiental",
  },
  {
    id: "6",
    name: "Lucía Vargas",
    text: "Gracias a UNTELS, desarrollé una base sólida en electrónica y la confianza para liderar proyectos innovadores.",
    work: "Ingeniería Electrónica",
  },
  {
    id: "7",
    name: "Paola Torres",
    text: "En UNTELS encontré un entorno que me impulsó a pensar fuera de la caja y buscar soluciones innovadoras.",
    work: "Ingeniería Civil"
},
{
    id: "8",
    name: "Luis Paredes",
    text: "Los valores y la calidad académica de UNTELS me prepararon para enfrentar cualquier desafío en mi carrera.",
    work: "Ingeniería de Sistemas"
},
{
  id: "9",
  name: "Andrea Salazar",
  text: "La UNTELS fue la base de mi éxito. Aquí descubrí cómo transformar ideas en realidades concretas.",
  work: "Ingeniería Ambiental"
},
{
  id: "10",
  name: "Raúl Fernández",
  text: "Lo mejor de UNTELS fue la red de contactos que formé y el aprendizaje colaborativo que experimenté.",
  work: "Ingeniería Electrónica"
},
{
  id: "11",
  name: "Sofía Martínez",
  text: "UNTELS me dio la oportunidad de crecer como profesional y como persona, siempre buscando la excelencia.",
  work: "Ingeniería Industrial"
}
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

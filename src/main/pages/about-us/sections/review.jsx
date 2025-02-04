import { React } from "react";
import { Row, Col, Container } from "react-bootstrap";

import nosotrosIMG from "@/assets/nosotros.png";
import nosotrosIMG2 from "@/assets/review_image.png";

import "@/styles/about-us.css";
import { useMediaQuery } from "react-responsive";
import useScrollTo from "@/hooks/useScrollTo";

const messages = {
  message1:
    "La historia de la Universidad Nacional Tecnológica de Lima Sur (UNTELS) comienza en la década de los 70, cuando los pobladores de Villa El Salvador, un distrito emergente, soñaron con una comunidad autogestionaria que incluyera una universidad pública. En su Primer Plan de Desarrollo Integral, propusieron asignar un terreno en Lomo de Corvina para este fin.",
  message2:
    "Décadas más tarde, el 10 de enero del 2002, este sueño se materializó con la creación de la Universidad Nacional Tecnológica del Cono Sur, establecida mediante la Ley N° 27431 durante el Gobierno de Transición Democrática liderado por Valentín Paniagua. Este logro fue posible gracias al esfuerzo de líderes comunitarios de Villa El Salvador y otros distritos de Lima Sur.",
  message3:
    "En 2005, bajo la dirección del Ministro de Educación, Javier Sota Nadal, se designó la primera Comisión Organizadora. En marzo de 2006, la universidad recibió el terreno para su Sede Central y los recursos para construir su primer pabellón de aulas. Ese mismo año se aprobó el Proyecto de Desarrollo Institucional, consolidando los cimientos para su funcionamiento.",
  message4:
    "El inicio de las actividades académicas llegó en 2007, con su primer examen de admisión en febrero y el inicio de clases en abril. Desde entonces, UNTELS ha crecido y evolucionado, adoptando su nombre actual en 2014 mediante la Ley Nº 30184. Hoy, UNTELS es un referente en la educación superior de Lima Sur, comprometida con la formación de profesionales integrales y el desarrollo de la comunidad.",
};

const events = [
  {
    year: "1970s (Siglo XX)",
    text: `${messages.message1}`,
    img: "image1.png",
  },
  { year: "2001", text: `${messages.message2}` },
  { year: "2005", text: `${messages.message3}` },
  { year: "2007", text: `${messages.message4}` },
];

export default function Review() {
  const isMd = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const ref = useScrollTo("section", "historia");

  return (
    <section ref={ref}>
      <Container>
        <h2
          className={`background-title ${
            isMd ? "with-underline" : "with-underline-left"
          } text-md-start text-center mb-5`}
        >
          <b>Reseña Historica</b>
        </h2>

        <Row>
          <Col xs={12} md={6}>
            <div className="position-relative">
              <div className="timeline-line"></div>
              {events.map((event, index) => (
                <div
                  className="position-relative"
                  key={`timeline-item-${index}`}
                >
                  <div className="timeline-dot"></div>
                  <div className="ms-4">
                    <small>
                      <b>{event.year}</b>
                    </small>
                    <p className="mt-4">{event.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col xs={12} md={6}>
            <img src={nosotrosIMG} alt="Imagen 1" width={"100%"} />
            <img className="mt-2" src={nosotrosIMG2} alt="Imagen 2" width={"100%"} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

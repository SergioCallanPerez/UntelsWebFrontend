import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import { FaCheckCircle } from "react-icons/fa";
import benefits_img from "@/assets/benefits.png";
import "@/styles/benefits.css";

export default function Benefits() {

  return (
    <section>
      <Container >
        <div className="benefits-container">
        <img src={benefits_img} className="benefits-img" />
          <Card className="primary benefits-card border-0">
            <Card.Body className="d-flex m-5 p-0 gap-4 flex-column justify-content-center">
              <h2 className="with-underline text-center">
                <b>Construye tu Futuro con Nosotros</b>
              </h2>
              <p>
                En UNTELS encontrarás el lugar perfecto para crecer y alcanzar
                tus metas profesionales.
              </p>
              <h5>
                Te ofrecemos:
              </h5>
              <div>
                <p>
                  <FaCheckCircle /> Infraestructura moderna: laboratorios,
                  biblioteca digital y más.
                </p>
                <p>
                  <FaCheckCircle /> Educación de calidad con docentes
                  especializados.
                </p>
                <p>
                  <FaCheckCircle /> Convenios internacionales para intercambio y
                  aprendizaje global.
                </p>
                <p>
                  <FaCheckCircle /> Oportunidades de investigación con impacto
                  social.
                </p>
                <p>
                  <FaCheckCircle /> Una vida universitaria activa e inclusiva.
                </p>
              </div>
              <Button
                className={`btn-on-primary me-auto px-5 py-2 ${
                  isMobile ? "mobile" : ""
                }`}
              >
                <b>Conoce más</b>
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </section>
  );
}

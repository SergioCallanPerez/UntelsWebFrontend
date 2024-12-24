import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Schedule from "./schedule";
import News from "./news";
import Communications from "./communications";

export default function Announcements() {
  return (
    <section className="primary">
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className="py-4 with-auto-divider-on-primary  d-flex flex-column justify-content-between"
          >
            <div className="mb-4 d-flex flex-column align-items-center">
              <h2 className="mb-4 px-4 rounded-3 d-inline-block background on-background-title">
                <b>Agenda</b>
              </h2>
              <Schedule />
            </div>
            <a className="on-primary-accent" href="#Agenda">
              <FaChevronRight /> Ver más
            </a>
          </Col>
          <Col
            xs={12}
            md={4}
            className="py-4 with-auto-divider-on-primary d-flex flex-column justify-content-between"
          >
            <div className="mb-4 d-flex flex-column align-items-center">
              <h2 className="mb-4 px-4 on-primary-accent">
                <b>Noticias</b>
              </h2>
              <News />
            </div>
            <div className="d-flex justify-content-between">
              <a className="on-primary-accent" href="#Conoce-Más">
                <FaChevronRight /> Conoce Más
              </a>
              <a className="on-primary-accent" href="#Noticias">
                <FaChevronRight /> Ver todas las noticias
              </a>
            </div>
          </Col>
          <Col
            xs={12}
            md={4}
            className="py-4 d-flex flex-column justify-content-between"
          >
            <div className="mb-4 d-flex flex-column align-items-center">
              <h2 className="mb-4 px-4 rounded-3 d-inline-block on-background-title background">
                <b>Comunicados</b>
              </h2>
              <Communications />
            </div>
            <a className="on-primary-accent" href="#Comunicados">
              <FaChevronRight /> Ver más
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

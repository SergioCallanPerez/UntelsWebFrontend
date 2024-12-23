import React from "react";

import "../../styles/announcements.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Schedule from "./schedule";
import News from "./news";
import Communications from "./communications";
import { isBrowser, isMobile } from "react-device-detect";

export default function Announcements() {
  return (
    <section>
      <Container fluid className="primary">
        <Row className="announcements-container">
          <Col
            xs={12}
            md={3}
            className={isBrowser ? "d-flex flex-column" : "d-flex flex-column"}
          >
            <Row>
              <div className="background-schedule">
                <h2 className="mb-4 on-background-light agenda">Agenda</h2>
              </div>
            </Row>
            <Row className="flex-grow-1">
              <Schedule />
            </Row>
            <Row className="mt-auto see-more-row">
              <a className="see-more" href="#Agenda">
                {">"} Ver más
              </a>
            </Row>
          </Col>

          {!isMobile && (
            <Col
              md={1}
              className="d-flex justify-content-center align-items-stretch"
            >
              <div className="vertical-bar"></div>
            </Col>
          )}

          <Col
            xs={12}
            md={3}
            className={isBrowser ? "d-flex flex-column " : "d-flex flex-column"}
          >
            <Row>
              <h2 className="mb-4 news">Noticias</h2>
            </Row>
            <Row className="flex-grow-1 news-car">
              <News />
            </Row>
            <Row className="mt-auto justify-content-between align-items-center more-news-row">
              <Col md={5} sm={5} lg={5}>
                <a className="more-see link" href="#Conoce-Más">
                  {">"} Conoce Más
                </a>
              </Col>
              <Col md={7} sm={7} lg={7}>
                <a className="more-see link" href="#Noticias">
                  {">"} Ver todas las noticias
                </a>
              </Col>
            </Row>
          </Col>

          {!isMobile && (
            <Col
              md={1}
              className="d-flex justify-content-center align-items-stretch"
            >
              <div className="vertical-bar"></div>
            </Col>
          )}
          <Col
            xs={12}
            md={4}
            className="d-flex flex-column communications-section"
          >
            <Row>
              <div className="communications-background">
                <h2 className="mb-4 on-background-light communications-title">
                  Comunicados
                </h2>
                <Communications />
              </div>
            </Row>
            <Row className="see-more-row">
              <a className="see-more" href="#Comunicados">
                {">"} Ver más
              </a>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa6";
import Card from "react-bootstrap/Card";
import Pre from "../../../assets/admin.jpg";
import Pos from "../../../assets/postgrade.png";
import Button from "react-bootstrap/Button";
import "../../../styles/academic_programs.css";
import { isMobile } from "react-device-detect";

export default function AcademicPrograms() {
  const navigate = useNavigate();

  return (
    <section>
      <Container>
        <h2 className="background-title with-underline text-center">
          <b>Programas académicos</b>
        </h2>
        <Row className="mt-5 justify-content-center">
          <Col md={4}>
            <Card className="primary border-0 rounded-4">
              <Card.Img
                className="card-img-academic rounded-4"
                variant="top"
                src={Pre}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title as={"h3"}>
                  <b>Pregrado</b>
                </Card.Title>
                <Card.Text as={"p"} className="py-3">
                  Elige entre las carreras disponibles en nuestras 4 facultades
                  para iniciar tu camino profesional.
                </Card.Text>
                <Button
                  className={`btn-on-primary ms-auto ${
                    isMobile ? "mobile" : ""
                  }`}
                  onClick={() => navigate("/pregrado")}
                >
                  Ver más{"  "}
                  <FaChevronRight />
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={1} className="mt-4"/>
          <Col md={4}>
            <Card className="primary border-0 rounded-4">
              <Card.Img
                className="card-img-academic rounded-4"
                variant="top"
                src={Pos}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title as={"h3"}>
                  <b>Posgrado</b>
                </Card.Title>
                <Card.Text as={"p"} className="py-3">
                  Programas avanzados diseñados para especializar a los
                  profesionales y potenciar su carrera.
                </Card.Text>
                <Button
                  className={`btn-on-primary ms-auto ${
                    isMobile ? "mobile" : ""
                  }`}
                  onClick={() => navigate("/mision")}
                >
                  Ver más{"  "}
                  <FaChevronRight />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

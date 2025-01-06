import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TopTen from "../../../assets/svgs/medal.svg";
import Career from "../../../assets/svgs/career.svg";
import Laboratories from "../../../assets/svgs/laboratories.svg";
import Agreements from "../../../assets/svgs/handshake.svg";

export default function Achievements() {
  return (
    <section>
      <Container>
        <Row>
          <Col
            md={3}
            className="text-center"
          >
            <img src={TopTen}  height="50px" className="mb-3"/>
            <h4 className="background-title">
              <b>Top 10</b>
            </h4>
            <p>en Investigación 2024, reconocimiento nacional.</p>
          </Col>
          <Col
            md={3}
            className="text-center"
          >
            <img src={Career} height="50px" className="mb-3"/>
            <h4 className="background-title">
              <b>5 carreras</b>
            </h4>
            <p>acreditadas y con un alto índice de empleabilidad.</p>
          </Col>
          <Col
            md={3}
            className="text-center"
          >
            <img src={Laboratories} height="50px" className="mb-3"/>
            <h4 className="background-title">
              <b>24 laboratorios</b>
            </h4>
            <p>equipados para el aprendizaje práctico.</p>
          </Col>
          <Col
            md={3}
            className="text-center"
          >
            <img src={Agreements} height="50px" className="mb-3"/>
            <h4 className="background-title">
              <b>Convenio con la UNAB</b>
            </h4>
            <p>para fortalecer la educación y la investigación.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

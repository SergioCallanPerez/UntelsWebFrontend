import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { LuArrowUpRight } from "react-icons/lu";
import Ad from "../../../assets/applicant.png";
import "@/styles/admission-ad.css";
import { isMobile } from "react-device-detect";

export default function AdmissionAd() {
  return (
    <section>
      <Container fluid className="on-primary admission-ad-container">
        <Row>
          <Col
            md={6}
            className="d-flex flex-column gap-2 py-4 px-0 order-md-first order-last align-items-center justify-content-center text-center"
          >
            <h2>El futuro empieza aquí.<br/>  <b>¡Postula ahora!</b></h2>
            <p>
              Inicia tu camino con nosotros. ¡Haz clic para más información!
            </p>
            <Button className={`px-4 btn-admission-ad ${isMobile? "mobile" : ""}`}>
              Mayor información <LuArrowUpRight />
            </Button>
          </Col>
          <Col md={6} className="px-0 order-md-last order-first">
            <img src={Ad} width={"100%"} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

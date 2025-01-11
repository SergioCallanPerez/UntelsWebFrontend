import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Whats from "../../../assets/svgs/whatsapp_icon.svg";
import "@/styles/whatsapp_ad.css";
import { isMobile } from "react-device-detect";

export default function WhatsAppAd() {
  return (
    <section>
      <Container>
        <Col xs={12} className="rounded-4 p-4 whatsapp-ad-container">
          <Row className="align-items-center g-4">
            <Col xs={12} md={6} className="text-center">
              <h2 className="background-title mb-0">
                ¿Tienes alguna duda?
                <br />
                <b>Contacte con nosotros</b>
              </h2>
            </Col>
            <Col xs={12} md={6}>
              <Button
                className={`d-flex align-items-center gap-4 py-2 mx-auto px-3 btn-on-background ${
                  isMobile ? "mobile" : ""
                }`}
              >
                <img src={Whats} width={40} height={40} />
                <p className="mb-0">Envíanos un mensaje</p>
              </Button>
            </Col>
          </Row>
        </Col>
      </Container>
    </section>
  );
}

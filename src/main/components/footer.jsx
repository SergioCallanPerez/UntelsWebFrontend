import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  PiMapPinFill,
  PiPhoneCallFill,
  PiRadioButtonFill,
} from "react-icons/pi";
import { IoIosMail } from "react-icons/io";
import { strings } from "../data/strings";

export default function Footer() {
  return (
    <footer className="primary py-4">
      <Container>
        <Row className="text-center text-md-start d-flex">
          <Col xs={12} md={6} className="mb-3 mb-md-0">
            <h5 className="mb-3 on-primary-accent">Campus Universitario</h5>
            <p>
              <PiMapPinFill className="me-2 on-primary-accent" />
              <strong>Dirección:</strong> Av. Bolívar S/N, sector 3, grupo 1, mz. A, sublote 3 - Villa El Salvador
            </p>
          </Col>
          <Col xs={12} md={6}>
            <h5 className="mb-3 on-primary-accent">Contacto</h5>
            <p>
              <PiPhoneCallFill className="me-2 on-primary-accent" />
              (01) 715 8878
            </p>
            <p>
              <IoIosMail className="me-2 on-primary-accent" />
              informes@untels.edu.pe
            </p>
            <p>
              <PiRadioButtonFill className="me-2 on-primary-accent" />
              <strong>Cómo llegar: </strong>
              <a class="on-primary-accent" href={strings.google_maps_url} target="_blank" rel="noopener noreferrer" className="text-light">
                Mapa del campus
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  PiMapPinFill,
  PiPhoneCallFill,
  PiRadioButtonFill,
} from "react-icons/pi";
import { IoIosMail } from "react-icons/io";

import { strings } from "@/data/strings";

export default function Footer() {
  return (
    <footer className="primary py-4">
      <Container>
        <Row className="text-center text-md-start d-flex">
          <Row className="with-h-divider-on-background-footer py-4">
            <Col md={3}>
              <p className="pb-3 on-background-color-bold">Nuestra universidad</p>
              <p>Misión, visión y valores</p>
              <p>Reseña histórica</p>
              <p>Organigrama</p>
              <p>Directorio institucional</p>
              <p>Mapa de campus</p>
              <p>Convenios</p>
              <p>Memoria anual</p>
              <p>Mesa de parte</p>
            </Col>
            <Col md={3}>
              <p className="pb-3 on-background-color-bold">Pregrado</p>
              <p>Facultad de Ciencias Administrativas y Financieras</p>
              <p>Facultad de Ingeniería Ambiental e Industrial</p>
              <p>Facultad de Ingeniería de Sistemas Computacionales</p>
              <p>Facultad de Ingeniería Mecánica y Electrónica</p>
            </Col>
            <Col md={3}>
              <p className="pb-3 on-background-color-bold">Posgrado</p>
              <p>Proceso de admisión 2024-II</p>
              <p>Estructura orgánica</p>
              <p>Presentación</p>
            </Col>
            <Col md={3}>
              <p className="pb-3 on-background-color-bold">Admisión</p>
              <p>Cronograma</p>
              <p>Modalidades</p>
              <p>Vacantes</p>
              <p>Prospecto</p>
              <p>Modelo de examen</p>
              <p>Infórmate</p>
              <p>Preguntas frecuentes</p>
              <p>Contáctanos</p>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col xs={6} md={6} className="mb-3 mb-md-0">
              <h5 className="mb-3 on-primary-accent">Campus Universitario</h5>
              <p>
                <PiMapPinFill className="me-2 on-primary-accent" />
                <strong>Dirección:</strong> Av. Bolívar S/N, sector 3, grupo 1, mz. A, sublote 3 - Villa El Salvador
              </p>
            </Col>
            <Col xs={6} md={6}>
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
          
          
        </Row>
      </Container>
    </footer>
  );
}


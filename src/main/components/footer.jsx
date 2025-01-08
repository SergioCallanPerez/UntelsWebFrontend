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
            <Col md={3} xs={3}>
              <p className="pb-3 on-primary-accent">Nuestra universidad</p>
              <a className="on-primary-accent d-block text-light" href="/#/nosotros" rel="noopener noreferrer">Misión, visión y valores</a>
              <a className="on-primary-accent d-block text-light" href="/#/nosotros" rel="noopener noreferrer">Reseña histórica</a>
              <a className="on-primary-accent d-block text-light" href="/#/nosotros" rel="noopener noreferrer">Organigrama</a>
              <a className="on-primary-accent d-block text-light" href="/#/nosotros" rel="noopener noreferrer">Directorio institucional</a>
              <a className="on-primary-accent d-block text-light" href={strings.google_maps_url} target="_blank" rel="noopener noreferrer">Mapa de campus</a>
              <a className="on-primary-accent d-block text-light" href="/#/nosotros" rel="noopener noreferrer">Convenios</a>
              <a className="on-primary-accent d-block text-light" href="/#/nosotros" rel="noopener noreferrer">Memoria anual</a>
              <a className="on-primary-accent d-block text-light" href={strings.mesa_partes_url} target="_blank" rel="noopener noreferrer">Mesa de parte</a>
            </Col>
            <Col md={3} xs={3}>
              <p className="pb-3 on-primary-accent">Pregrado</p>
              <a className="on-primary-accent d-block text-light" href="/#/facultades/ciencias_administrativas" rel="noopener noreferrer">Facultad de Ciencias Administrativas y Financieras</a>
              <a className="on-primary-accent d-block text-light" href="/#/nosotros" rel="noopener noreferrer">Facultad de Ingeniería Ambiental e Industrial</a>
              <a className="on-primary-accent d-block text-light" href="/#/nosotros" rel="noopener noreferrer">Facultad de Ingeniería de Sistemas Computacionales</a>
              <a className="on-primary-accent d-block text-light" href="/#/nosotros" rel="noopener noreferrer">Facultad de Ingeniería Mecánica y Electrónica</a>
            </Col>
            <Col md={3} xs={3}>
              <p className="pb-3 on-primary-accent">Posgrado</p>
              <a className="on-primary-accent d-block text-light" href="/#/nosotros" rel="noopener noreferrer">Proceso de admisión 2024-II</a>
              <a className="on-primary-accent d-block text-light" href="/#/nosotros" rel="noopener noreferrer">Estructura orgánica</a>
              <a className="on-primary-accent d-block text-light" href="/#/nosotros" rel="noopener noreferrer">Presentación</a>
            </Col>
            <Col md={3} xs={3}>
              <p className="pb-3 on-primary-accent">Admisión</p>
              <a className="on-primary-accent d-block text-light" href="/#/nosotros" rel="noopener noreferrer">Cronograma</a>
              <a className="on-primary-accent d-block text-light" href="/#/nosotros" rel="noopener noreferrer">Modalidades</a>
              <a className="on-primary-accent d-block text-light" href="/#/nosotros" rel="noopener noreferrer">Vacantes</a>
              <a className="on-primary-accent d-block text-light" href="/#/nosotros" rel="noopener noreferrer">Prospecto</a>
              <a className="on-primary-accent d-block text-light" href="/#/nosotros" rel="noopener noreferrer">Modelo de examen</a>
              <a className="on-primary-accent d-block text-light" href="/#/nosotros" rel="noopener noreferrer">Infórmate</a>
              <a className="on-primary-accent d-block text-light" href="/#/nosotros" rel="noopener noreferrer">Preguntas frecuentes</a>
              <a className="on-primary-accent d-block text-light" href="/#/nosotros" rel="noopener noreferrer">Contáctanos</a>
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


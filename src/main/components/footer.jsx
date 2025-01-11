import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  PiMapPin,
  PiPhoneCall,
  PiRadioButton,
  PiEnvelopeLight,
} from "react-icons/pi";

import {
  TiSocialYoutube,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialInstagram,
  TiSocialFacebook,
} from "react-icons/ti";

import LogoPortal from "@/assets/portal_logo_transparent.png";
import Book from "@/assets/libro_reclamaciones.png";
import { footerNavData } from "@/data/mocks/footer_nav_data";

import { strings } from "@/data/strings";

const renderNavItem = (item) => {
  return (
    <Col md={3} xs={6} className="d-flex flex-column gap-2 mb-4">
      <h6 className="on-primary-accent">{item.title}</h6>
      {item.children?.map((child) => {
        if (child.external) {
          return (
            <a
              className="on-primary-color"
              key={child.title}
              href={child.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {child.title}
            </a>
          );
        }
        return (
          <Link className="on-primary-color" key={child.title}>
            {child.title}
          </Link>
        );
      })}
    </Col>
  );
};

export default function Footer() {
  return (
    <footer className="primary py-5">
      <Container>
        <Col className="d-flex flex-column text-center text-md-start gap-5">
          <Row className="with-h-divider-primary-light">
            {footerNavData.map((item) => renderNavItem(item))}
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <h6 className="mb-3 on-primary-accent">Campus Universitario:</h6>
              <p>
                <PiMapPin className="me-2" />
                Dirección: Av. Bolívar S/N, sector 3, grupo 1, mz. a, sublote 3
                - Villa El Salvador
              </p>
            </Col>
            <Col xs={12} md={4}>
              <h6 className="mb-3 on-primary-accent">Contacto:</h6>
              <p>
                <PiPhoneCall className="me-2" />
                (01) 715 8878
              </p>
              <p>
                <PiEnvelopeLight className="me-2" />
                informes@untels.edu.pe
              </p>
              <p>
                <PiRadioButton className="me-2" />
                Cómo llegar:{" "}
                <a
                  className="on-primary-accent"
                  href={strings.google_maps_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mapa del campus
                </a>
              </p>
            </Col>
            <Col xs={12} md={4}>
              <h6 className="mb-3 on-primary-accent">Síguenos:</h6>
              <div className="text-center text-md-start">
                <Link className="on-primary-color me-3">
                  <TiSocialLinkedin size={25} />
                </Link>
                <Link className="on-primary-color me-3">
                  <TiSocialTwitter size={25} />
                </Link>
                <Link className="on-primary-color me-3">
                  <TiSocialInstagram size={25} />
                </Link>
                <Link className="on-primary-color me-3">
                  <TiSocialYoutube size={25} />
                </Link>
                <Link className="on-primary-color">
                  <TiSocialFacebook size={25} />
                </Link>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col xs={6} md={3}>
              <Link>
                <img src={LogoPortal} width={"70%"} />
              </Link>
            </Col>
            <Col xs={6} md={3}>
              <Link>
                <img src={Book} width={"70%"} />
              </Link>
            </Col>
          </Row>
          <Row>
            <small className="text-center">
              Copyright 2025 UNTELS. All rights reserved
            </small>
          </Row>
        </Col>
      </Container>
    </footer>
  );
}

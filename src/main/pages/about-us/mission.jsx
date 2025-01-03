import { React } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../../styles/root.css";
import nosotrosIMG from "@/assets/nosotros.png";
import "@/styles/about-us.css";

const desc = {
  missionDesc: "Formar profesionales, investigadores e innovadores, con base humanista, ética, social, tecnológica y científica. Que participen en la solución de los problemas de la sociedad, con un enfoque de desarrollo sostenible, vocación de servicio y espíritu emprendedor. En el ámbito local, nacional y con proyección internacional.",
  visionDesc: "Ser reconocida como una Universidad socialmente responsable. Integrado por un equipo humano comprometido y competente en la formación integral de sus estudiantes. Con aporte de innovación hacia la sociedad, mediante centros de investigación y desarrollo, incubadoras de emprendimiento y educación continua.",
  valuesDesc: "Respeto, libertad, mejora continua, honestidad, solidaridad y justicia, responsabilidad social.",
};

export default function Mission() {
  return (
    <main>
      <Row className="on-primary-color">
        <Row className="primary ">
          <Col md={9}>
            <h3 className="ms-3 about-us-title">Misión</h3>
            <p className="ms-3 about-us-message">{desc.missionDesc}</p>
            
          </Col>
          <Col md={3} className="mt-auto">
            <img className="about-us-img" src= {nosotrosIMG}></img>
          </Col>
          
        </Row>
        <Row className="background text-end">
          <Col md={3} className="mt-auto">
            <img className="about-us-img" src= {nosotrosIMG}></img>
          </Col>
          <Col md={9}>
            <h3 className="me-3 about-us-title">Visión</h3>
            <p className="me-3 about-us-message">{desc.visionDesc}</p>
          </Col>
        </Row>
        <Row className="primary mb-5">
          <Col md={9}>
            <h3 className="ms-3 about-us-title">Valores</h3>
            <p className="ms-3 about-us-message">{desc.valuesDesc}</p>
          </Col>
          <Col md={3} className="mt-auto">
            <img className="about-us-img" src= {nosotrosIMG}></img>
          </Col>
        </Row>
      </Row>
    </main>
  );
}
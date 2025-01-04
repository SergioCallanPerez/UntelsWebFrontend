import { React } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../../styles/root.css";
import nosotrosIMG from "@/assets/nosotros.png";
import "@/styles/about-us.css";

const desc = {
  missionDesc: "Formar profesionales, investigadores e innovadores, con base humanista, ética, social, tecnológica y científica. Que participen en la solución de los problemas de la sociedad, con un enfoque de desarrollo sostenible, vocación de servicio y espíritu emprendedor. En el ámbito local, nacional y con proyección internacional.",
  visionDesc: "Ser reconocida como una Universidad socialmente responsable. Integrado por un equipo humano comprometido y competente en la formación integral de sus estudiantes. Con aporte de innovación hacia la sociedad, mediante centros de investigación y desarrollo, incubadoras de emprendimiento y educación continua.",
  valuesDesc: "Respeto, libertad, mejora continua, honestidad, solidaridad y justicia, responsabilidad social.",
  values1: "Respeto",
  values2: "Libertad",
  values3: "Mejora continua",
  values4: "Honestidad",
  values5: "Solidaridad y justicia",
  values6: "Responsabilidad social",
};

export default function Mission() {
  return (
    <main>
      <Row className="on-primary-color background">
        <Row className="primary ">
          <Col md={9}>
            <h3 className="ms-3 about-us-title with-h-divider-on-background">Misión</h3>
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
            <h3 className="me-3 vision-title with-h-divider-on-background">Visión</h3>
            <p className="me-3 about-us-message">{desc.visionDesc}</p>
          </Col>
        </Row>
        <Row className="primary mb-5">
          <Col md={9}>
            <h3 className="ms-3 about-us-title with-h-divider-on-background">Valores</h3>
            <Row className="ms-3 about-us-message">
              <Col>{desc.values1}</Col>
              <Col>{desc.values2}</Col>
            </Row>
            <Row className="ms-3 about-us-message">
              <Col>{desc.values3}</Col>
              <Col>{desc.values4}</Col>
            </Row>
            <Row className="ms-3 about-us-message">
              <Col>{desc.values5}</Col>
              <Col>{desc.values6}</Col>
            </Row>
          </Col>
          <Col md={3} className="mt-auto">
            <img className="about-us-img" src= {nosotrosIMG}></img>
          </Col>
        </Row>
      </Row>
    </main>
  );
}
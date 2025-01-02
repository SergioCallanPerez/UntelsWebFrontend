import { React } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../../styles/root.css";


export default function Mission() {
  return (
    <main>
      <Row className="">
        <Row className="primary ">
          <h3 className="ms-3">Misión</h3>
          <p className="ms-3">Formar profesionales, investigadores e innovadores, con base humanista, ética, social, tecnológica y científica. Que participen en la solución de los problemas de la sociedad, con un enfoque de desarrollo sostenible, vocación de servicio y espíritu emprendedor. En el ámbito local, nacional y con proyección internacional.</p>
        </Row>
        <Row className="background text-end">
          <h3 className="me-3">Visión</h3>
          <p className="me-3">Ser reconocida como una Universidad socialmente responsable. Integrado por un equipo humano comprometido y competente en la formación integral de sus estudiantes. Con aporte de innovación hacia la sociedad, mediante centros de investigación y desarrollo, incubadoras de emprendimiento y educación continua.</p>
        </Row>
        <Row className="primary">
          <h3 className="ms-3">Valores</h3>
          <p className="ms-3">Respeto, libertad, mejora continua, honestidad, solidaridad y justicia, responsabilidad social.</p>
        </Row>
      </Row>
    </main>
  );
}
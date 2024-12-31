import { React } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../../styles/root.css";


export default function Mission() {
  return (
    <main>
      <Row>
        <Row className="primary">
          <h3>Misión</h3>
        </Row>
        <Row className="background">
          <h3>Visión</h3>
        </Row>
        <Row className="primary">
          <h3>Valores</h3>
        </Row>
      </Row>
    </main>
  );
}
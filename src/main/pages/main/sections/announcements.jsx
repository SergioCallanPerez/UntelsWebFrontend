import React from "react";
import { CiCalendar } from "react-icons/ci";
import { Col, Container, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import "@/styles/communications.css";

const messagesList = [
  { no: "009-2025", message: "-DRA- Calendario académico 2025-I y 2025-II", date: "2025-01-21" },
  { no: "008-2025", message: "-DBU- Horarios del Untels Gym Verano 2025", date: "2025-01-20" },
  { no: "007-2025", message: "-CEU- Pronunciamiento del Comité Electoral Universitario", date: "2025-01-20" },
  { no: "006-2025", message: "-Atención en caja para cobro de Curso de Nivelación Matriculados 2024-II", date: "2025-01-20" },
  { no: "005-2025", message: "-VRA- Curso de verano: Planificación, Didáctica y Evaluación en la Docencia Universitaria", date: "2025-01-17" },
  { no: "004-2025", message: "-VRA- Guías como empleador, estudiante y egresado para la plataforma de Bolsa de Trabajo", date: "2025-01-17" },
];

export default function Announcements() {
  const isMd = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <section>
      <Container className="d-flex flex-column">
        <h2 className="background-title with-underline text-center">
          <b>Comunicados</b>
        </h2>
        <Link className={`background my-4 ${isMd ? "mx-auto" : "ms-auto"}`}>
          Ver todo
        </Link>
        <Row className="g-4">
          {messagesList.map((item) => (
            <Col key={item.no} md={4} xs={12}>
              <div className="card p-3 with-box-shadow border-0 rounded-4 communication-container">
                <h5 className="card-title background-title">
                  <b>Comunicado N° {item.no}</b>
                </h5>
                <p className="card-text">{item.message}</p>
                <p className="text-muted mb-auto">
                  <CiCalendar className="me-2 mb-auto" /> {item.date}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

import React from "react";
import { CiCalendar } from "react-icons/ci";
import { Col, Container, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const note =
  "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida";

const messagesList = [
  { no: 301, message: note, date: "2024-12-29" },
  { no: 302, message: note, date: "2024-12-29" },
  { no: 303, message: note, date: "2024-12-29" },
  { no: 304, message: note, date: "2024-12-29" },
  { no: 305, message: note, date: "2024-12-29" },
  { no: 306, message: note, date: "2024-12-29" },
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
              <div className="card p-3 with-box-shadow border-0 rounded-4">
                <h5 className="card-title background-title">
                  {" "}
                  <b>Comunicado N° {item.no}</b>
                </h5>
                <p className="card-text">{item.message}</p>
                <p className="text-muted mb-0">
                  <CiCalendar className="me-2 mb-1" /> {item.date}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

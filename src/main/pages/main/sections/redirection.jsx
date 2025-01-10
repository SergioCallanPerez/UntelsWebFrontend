import React from "react";
import { Container, Row, Col, Button} from "react-bootstrap";
import studentsIMG from "@/assets/redirection_assets/estudiante.png";
import teachersIMG from "@/assets/redirection_assets/docente.png";
import applicantsIMG from "@/assets/redirection_assets/postulantes.png";
import committeeIMG from "@/assets/redirection_assets/comite.png";
import preCenterIMG from "@/assets/redirection_assets/centroPre.png";

export default function Redirection() {
  const items = [
    {
      image: studentsIMG,
      label: "Estudiantes",
      link: "https://www.untels.edu.pe/11Estudiantes.aspx",
    },
    {
      image: teachersIMG,
      label: "Docentes",
      link: "https://www.untels.edu.pe/12Docentes.aspx",
    },
    {
      image: applicantsIMG,
      label: "Postulantes",
      link: "https://www.untels.edu.pe/postulantesAdmision.aspx",
    },
    {
      image: committeeIMG,
      label: "Comité Electoral",
      link: "https://www.untels.edu.pe/comiteElectoral.aspx",
    },
    {
      image: preCenterIMG,
      label: "Centro Pre Universitario",
      link: "https://www.untels.edu.pe/centroPreUniversitario.aspx",
    },
  ];

  return (
    <section>
      <Container>
        <Row className="text-center">
          {items.map((item, index) => (
            <Col key={index} xs={2} md={2} className="mb-4 mx-auto">
              <div
                className="circle-button d-flex justify-content-center"
                onClick={() => window.open(item.link, "_blank")}
              >
                <img src={item.image} alt={item.label} className="circle-img"/>
              </div>
              <p className="mt-2 text-center"><b>{item.label}</b></p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

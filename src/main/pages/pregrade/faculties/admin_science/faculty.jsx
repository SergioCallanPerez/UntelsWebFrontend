import React from "react";
import Banner from "./faculty_banner";
import { Container } from "react-bootstrap";
import {Row, Col, Card} from "react-bootstrap";
import facultyIMG from "@/assets/faculty_admin_science.png";
import adminIcon from "@/assets/svgs/monitoring.svg"
import marketingIcon from "@/assets/svgs/campaign.svg"
import Duration from "@/assets/svgs/duration.svg"
import Grade from "@/assets/svgs/school.svg"
import { isMobile } from "react-device-detect";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FaChevronRight } from "react-icons/fa";

const careers=[
    {
        icon: adminIcon,
        name: "Administración de empresas",
        desc: "Forma líderes con capacidad de gestión estratégica y habilidades para tomar decisiones que impacten positivamente en cualquier organización.",
        time: "5 años (10 semestres)",
        grade: "Bachiller en administración",
        redirection: "/carreras/administracion"
    },
    {
        icon: marketingIcon,
        name: "Marketing y Negocios Internacionales",
        desc: "Prepara expertos en marketing y comercio internacional, capaces de diseñar estrategias globales para un mercado competitivo.",
        time: "5 años (10 semestres)",
        grade: "Bachiller en marketing y negocios internacionales",
        redirection: "/carreras/marketing"
    }
]

export default function FacultyAdmin(){

    const navigate= useNavigate();

    return(
        <main className="background d-flex flex-column gap-5 pb-5">
            <Banner/>
            <Container>
                <div className="faculty-description pb-5">
                    <Row>
                        <Col md={6} className="m-auto">
                            <h3 className="background-title with-underline-left mb-4"><b>Acerca de la facultad</b></h3>
                            <p className="paragraph-faculty primary">
                                Nuestra facultad se dedica a formar profesionales altamente capacitados en las 
                                áreas de administración y negocios internacionales. Con un enfoque en la 
                                innovación, el liderazgo y la ética, preparamos a nuestros estudiantes para 
                                destacar en un entorno empresarial dinámico y competitivo.
                            </p>
                        </Col>
                        <Col md={5}>
                            <img src={facultyIMG} width="100%"/>
                        </Col>
                    </Row>
                </div>
                <div className="background-title with-underline mb-4">
                    <h2 className="background-title text-center"><b>Carreras que ofrecemos</b></h2>
                </div>
                <Row className="mt-5 justify-content-center">
                    {careers.map((item)=>(
                        <Col md={5} className="align-items-center">
                            <Card
                                key={item.id}
                                className="background border-0 rounded-4 mx-4 mb-2 with-box-shadow"
                            >
                                <Card.Body className="d-flex flex-column">
                                    <img src={item.icon} width="10%" className="align-self-center"/>
                                    <Card.Title className=" mt-3 background-title justify-content-center align-items-center d-flex align-self-center">
                                        <b>{item.name}</b>
                                    </Card.Title>
                                    <Card.Text>
                                        {item.desc}
                                        <div className="my-4">
                                            <img src={Duration} className="me-2" width="8%"/>
                                            {item.time}
                                        </div>
                                        <div className="my-4">
                                            <img src={Grade} className="me-2" width="8%"/>
                                            {item.grade}
                                        </div>
                                    </Card.Text>
                                    <Button
                                        className={`btn-on-primary ms-auto ${
                                            isMobile ? "mobile" : ""
                                        }`}
                                        onClick={() => navigate(item.redirection)}
                                        >
                                        Ver más{"  "}
                                        <FaChevronRight />
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </main>
    );
}
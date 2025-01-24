import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import { isMobile } from "react-device-detect";
import {faculties} from "./faculty_content";
import "@/styles/faculties.css"
import Duration from "@/assets/svgs/duration.svg";
import Grade from "@/assets/svgs/school.svg";

export default function Faculty() {
    const { facultyName } = useParams();
    const navigate = useNavigate();


    const faculty = faculties.find(
        (fac) => fac.name.toLowerCase().replace(/\s+/g, "-") === facultyName
    );

    if (!faculty) {
        return (
            <main className="background d-flex flex-column gap-5 pb-5">
                <Container>
                    <h2>Facultad no encontrada</h2>
                    <p>La facultad que buscas no existe.</p>
                </Container>
            </main>
        );
    }

    return (
        <main className="background d-flex flex-column gap-5 pb-5">
            <section>
                <div className="career-title container-fluid">
                    <img src={faculty.bannerIMG} className="banner-img" width="100%" />
                    <div className="banner-career">
                        <h3 className="on-primary-color banner-text">
                            <b>FACULTAD DE</b>
                        </h3>
                        <h2 className="background-title banner-title">
                            <b>{faculty.name}</b>
                        </h2>
                    </div>
                </div>
            </section>

            <Container>
                <div className="faculty-description pb-5">
                    <Row>
                        <Col md={6} className="m-auto">
                            <h3 className="background-title with-underline-left mb-4">
                                <b>Acerca de la facultad</b>
                            </h3>
                            <p className="paragraph-faculty primary">{faculty.desc}</p>
                        </Col>
                        <Col md={5}>
                            <img src={faculty.facultyIMG} width="100%" />
                        </Col>
                    </Row>
                </div>
                <div className="background-title with-underline mb-4">
                    <h2 className="background-title text-center">
                        <b>Carreras que ofrecemos</b>
                    </h2>
                </div>
                <Row className="mt-5 justify-content-center">
                    {faculty.facultyCareers.map((career, index) => (
                        <Col md={5} className="align-items-center" key={index}>
                            <Card className="background border-0 rounded-4 mx-4 mb-2 with-box-shadow">
                                <Card.Body className="d-flex flex-column">
                                    <img
                                        src={career.icon}
                                        width="10%"
                                        className="align-self-center"
                                    />
                                    <Card.Title className="mt-3 background-title justify-content-center align-items-center d-flex align-self-center">
                                        <b>{career.name}</b>
                                    </Card.Title>
                                    <Card.Text>
                                        {career.desc}
                                        <div className="my-4">
                                            <img src={Duration} className="me-2" width="8%" />
                                            {career.time}
                                        </div>
                                        <div className="my-4">
                                            <img src={Grade} className="me-2" width="8%" />
                                            {career.grade}
                                        </div>
                                    </Card.Text>
                                    <Button
                                        className={`btn-on-primary ms-auto ${
                                            isMobile ? "mobile" : ""
                                        }`}
                                        onClick={() => navigate(career.redirection)}
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

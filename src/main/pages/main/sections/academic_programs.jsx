import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col} from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa6";
import Card from "react-bootstrap/Card";
import Admin from "../../../assets/admin.jpg"
import Button from "react-bootstrap/Button";
import "../../../styles/academic_programs.css"

export default function AcademicPrograms(){

    const navigate= useNavigate()

    return(
        <section>
            <Container>
                <div className="d-flex align-items-center with-h-divider-on-background justify-content-center">
                    <h3 className="background-title"><b>Programas académicos</b></h3>
                </div>
                <Row className="g-4 justify-content-center">
                    <Col md={4}>
                        <Card className="primary m-3">
                            <Card.Img
                                className=""
                                variant="top"
                                src={Admin}
                            />
                            <Card.Body>    
                                <Card.Title className="on-primary-color with-h-divider-on-background">
                                    <b>Pregrado</b>
                                </Card.Title>
                                <Card.Text className="py-3">
                                    Elige entre las carreras disponibles en nuestras 4 facultades para iniciar tu camino profesional.
                                </Card.Text>
                            </Card.Body>
                            <Button className="secondary-title see-more-button ms-auto" onClick={()=>navigate('/mision')}>
                                Ver más
                                <FaChevronRight />
                            </Button>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="primary m-3">
                            <Card.Img
                                className="card-img-academic"
                                variant="top"
                                src={Admin}
                            />
                            <Card.Body>
                                <Card.Title className="on-primary-color with-h-divider-on-background">
                                    <b>Posgrado</b>
                                </Card.Title>
                                <Card.Text className="py-3">
                                    Programas avanzados diseñados para especializar a los profesionales y potenciar su carrera.
                                </Card.Text>
                            </Card.Body>
                            <Button className="secondary-title see-more-button ms-auto" onClick={()=>navigate('/mision')}>
                                Ver más
                                <FaChevronRight />
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
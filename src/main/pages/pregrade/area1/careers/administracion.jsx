import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { FaChevronRight } from "react-icons/fa6";
import adminIMG from '../../../../assets/admin.jpg';
import { otherscareers } from "../careers-summary/administracion";
import '../../../../styles/careers.css';

export default function Administracion(){

    return(
        <main className="background">
            <div className="career-title">
                <h2 className="background-title"><b>Administración de empresas</b></h2>
            </div>
                <Container fluid className="background">
                    <Row>
                        <Col md={8}>
                            <Row>
                                <Col md={6} className="with-auto-divider-primary">
                                    <h3 className="background-title">Descripción de la carrera</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae totam assumenda porro dolores maxime, reprehenderit esse rerum optio excepturi ipsa nemo quis consequuntur id sapiente aspernatur a obcaecati velit reiciendis.</p>
                                    <h3 className="background-title">Perfil del egresado</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni pariatur ut placeat architecto? Ab accusantium fuga omnis, odit saepe itaque, aliquam doloribus quasi minus voluptate optio consequuntur enim praesentium voluptatum?</p>
                                </Col>
                                <Col md={6} className="with-auto-divider-primary">
                                    <div className="career-field">
                                        <h3 className="background-title">Campo laboral</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem eius itaque quasi esse illum sequi eos excepturi aut eveniet placeat ipsum nobis, dolorem eaque neque amet sed ratione expedita provident.</p>
                                        <h3 className="background-title">Grado</h3>
                                        <p>Placeholder-Grade</p>
                                        <h3 className="background-title">Titulación</h3>
                                        <p>Placeholder-Title</p>
                                        <h3 className="background-title">Duración de la carrera</h3>
                                        <p>X años</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        
                        <Col md={4}>
                            <div className="career-img">
                                <img src={adminIMG} width="100%"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            <div className="career-downloads">
                <button>Plan de estudios</button>
                <button>Malla curricular</button>
            </div>
            <div className="other-careers">
                <h3 className="background-title">Carreras relacionadas</h3>
                <Container>
                    <Row className="g-4 justify-content-center">
                        {otherscareers.map((careerItem) => (
                            <Col xs={12} md={3} key={careerItem.careerName}>
                                <Card className="primary">
                                    <Card.Img variant="top" src={adminIMG} />
                                    <Card.Body>
                                    <Card.Title className="with-h-divider-on-background"><b>{careerItem.careerName}</b></Card.Title>
                                    <Card.Text className="with-h-divider-on-background">
                                        {careerItem.description}
                                    </Card.Text>
                                    </Card.Body>

                                    <a className="primary" href={careerItem.href}>
                                        <FaChevronRight /> <b>Ver más</b>
                                    </a>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </main>
    )
}

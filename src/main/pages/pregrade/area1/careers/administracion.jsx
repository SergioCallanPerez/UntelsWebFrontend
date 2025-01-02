import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import adminIMG from '../../../../assets/admin.jpg';
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
                                <Col md={6}>
                                    <h3 className="background-title">Descripción de la carrera</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae totam assumenda porro dolores maxime, reprehenderit esse rerum optio excepturi ipsa nemo quis consequuntur id sapiente aspernatur a obcaecati velit reiciendis.</p>
                                    <h3 className="background-title">Perfil del egresado</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni pariatur ut placeat architecto? Ab accusantium fuga omnis, odit saepe itaque, aliquam doloribus quasi minus voluptate optio consequuntur enim praesentium voluptatum?</p>
                                </Col>
                                <Col md={6}>
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
                            <div className="career-downloads">
                                <button>Plan de estudios</button>
                                <button>Malla curricular</button>
                            </div>
                        </Col>
                        
                        <Col md={4}>
                            <div className="career-img">
                                <img src={adminIMG}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            <div className="other-careers">
                <h3 className="background-title">Carreras relacionadas</h3>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to
                            additional content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </CardGroup>
            </div>
        </main>
    )
}

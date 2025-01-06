import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import adminIMG from '@/assets/admin.jpg';
import ReasonsStudy from "./career_reasons";
import Syllabus from "./syllabus";
import '@/styles/careers.css';

export default function Administracion(){

    return(
        <main className="background">
            <div className="career-title">
                <h2 className="background-title"><b>Administración de empresas</b></h2>
            </div>
            <Container>
                <div className="slogan">
                    <h3><b>Lidera, Innova y Transforma el Mundo Empresarial</b></h3>
                </div>
                <div className="aditional-info">
                    <Row>
                        <Col md={3} className="text-center">
                            <h4 className="aditional-info-title background-title"><b>Duración</b></h4>
                            <h4>5 años (10 periodos académicos)</h4>
                        </Col>
                        <Col md={3}>
                            <h4 className="aditional-info-title background-title"><b>Grado académico</b></h4>
                            <h4>Bachiller en Administración de Empresas</h4>
                        </Col>
                    </Row>
                </div>
                <div className="career-description">
                    <Row>
                        <Col md={6}>
                            <h3><b>Descripción de la carrera</b></h3>
                            <h4>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, amet? Iure 
                                perferendis explicabo aspernatur ratione, sed odit voluptatum sapiente aut tenetur 
                                laborum nemo iste porro molestiae praesentium earum reprehenderit dolorum.
                            </h4>
                        </Col>
                        <Col md={6}>
                            <img src={adminIMG} width="100%"/>
                        </Col>
                    </Row>
                </div>
                <ReasonsStudy/>
                <Syllabus/>
            </Container>
        </main>
    )
}

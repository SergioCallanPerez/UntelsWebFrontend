import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import adminIMG from '@/assets/admin.jpg';
import schoolIMG from '@/assets/svgs/school.svg';
import durationIMG from '@/assets/svgs/duration.svg';
import ReasonsStudy from "./career_reasons";
import Banner from "./banner";
import Syllabus from "./syllabus";
import '@/styles/careers.css';
import Profile from "./profile";

export default function Marketing(){

    return(
        <main className="background d-flex flex-column gap-5 pb-5">
            <Banner/>
            <Container>
                <div className="slogan align-items-center justify-content-center d-flex gap-5 pb-5">
                    <h3 className="primary slogan-text text-center"><b>Lidera, Innova y Transforma el Mundo Empresarial</b></h3>
                </div>
                <div className="aditional-info pb-5">
                    <Row className="d-flex align-items-center justify-content-center">
                        <Col md={6} className="text-center">
                            <img src={durationIMG}/>
                            <h4 className="aditional-info-title background-title with-underline mb-4"><b>Duración</b></h4>
                            <h4>5 años (10 periodos académicos)</h4>
                        </Col>
                        <Col md={6} className="text-center">
                            <img src={schoolIMG}/>
                            <h4 className="aditional-info-title background-title with-underline mb-4"><b>Grado académico</b></h4>
                            <h4>Bachiller en Administración de Empresas</h4>
                        </Col>
                    </Row>
                </div>
                <div className="career-description pb-5">
                    <Row>
                        <Col md={6} className="m-auto">
                            <h3 className="background-title with-underline-left mb-4"><b>Descripción de la carrera</b></h3>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, amet? Iure 
                                perferendis explicabo aspernatur ratione, sed odit voluptatum sapiente aut tenetur 
                                laborum nemo iste porro molestiae praesentium earum reprehenderit dolorum.
                            </p>
                        </Col>
                        <Col md={5}>
                            <img src={adminIMG} width="100%"/>
                        </Col>
                    </Row>
                </div>
                <ReasonsStudy/>
                <Syllabus/>
                <Profile/>
            </Container>
        </main>
    )
}

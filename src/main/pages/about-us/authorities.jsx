import { React } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../../styles/root.css";
import rectoraIMG from "@/assets/authorities/rectora.png";
import viceAcademicoIMG from "@/assets/authorities/viceAcademico.png";
import viceInvestigacionIMG from "@/assets/authorities/viceInvestigacion.png";
import decanoIMG from "@/assets/authorities/decano.png";
import "@/styles/about-us.css";

export default function Authorities(){
    return (
        <main className="background">
            <Container>
                <Row className="py-5">
                    <Col md={3} className="mt-auto">
                        <img className="about-us-img" src= {rectoraIMG}></img>
                    </Col>
                    <Col>
                    <h3 className="ms-3 about-us-title with-h-divider-on-background">Dra. Cruz Yupanqui Gladys Marcionila</h3>
                    <p className="ms-3">Rectora</p>
                    </Col>                    
                </Row>
                <Row className="py-5">
                    <Col md={3} className="mt-auto">
                        <img className="about-us-img" src= {viceAcademicoIMG}></img>
                    </Col>
                    <Col>
                    <h3 className="ms-3 about-us-title with-h-divider-on-background">Dra. Vilca Cáceres Marina</h3>
                    <p className="ms-3">Vicerrectora Académico</p>
                    </Col>                    
                </Row>
                <Row className="py-5">
                    <Col md={3} className="mt-auto">
                        <img className="about-us-img" src= {viceInvestigacionIMG}></img>
                    </Col>
                    <Col>
                    <h3 className="ms-3 about-us-title with-h-divider-on-background">Dr. Navarro Raymundo Ángel Fernando</h3>
                    <p className="ms-3">Vicerrector de Investigación</p>
                    </Col>                    
                </Row>
                <Row className="py-5">
                    <Col md={3} className="mt-auto">
                        <img className="about-us-img" src= {decanoIMG}></img>
                    </Col>
                    <Col>
                    <h3 className="ms-3 about-us-title with-h-divider-on-background">Dr. Valero Cajahuanca Julio Elvis</h3>
                    <p className="ms-3">Decano</p>
                    </Col>                    
                </Row>
            </Container>
            
            
        </main>
    );
}
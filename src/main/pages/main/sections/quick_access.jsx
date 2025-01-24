import Students from "@/assets/redirection_assets/studentsbtn.svg"
import Teachers from "@/assets/redirection_assets/teachersbtn.svg"
import Applicant from "@/assets/redirection_assets/applicantbtn.svg"
import Cepre from "@/assets/redirection_assets/ceprebtn.svg"
import Comite from "@/assets/redirection_assets/comitebtn.svg"
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"

export default function QuickAccesses(){
    const navigate= useNavigate()

    return(
        <section>
            <Container>
                <Row>
                    <Col xs={6} md={3} className="text-center">
                        <a href="https://www.untels.edu.pe/11Estudiantes.aspx" target="_blank" rel="noopener noreferrer">
                            <img src={Students} height="100px" className="mb-3" />
                        </a>
                        <h4>
                            <b>Estudiantes</b>
                        </h4>
                    </Col>
                    <Col xs={6} md={2} className="text-center">
                        <a href="https://www.untels.edu.pe/12Docentes.aspx" target="_blank" rel="noopener noreferrer">
                            <img src={Teachers} height="100px" className="mb-3" />
                        </a>
                        <h4>
                            <b>Docentes</b>
                        </h4>
                    </Col>
                    <Col xs={6} md={2} className="text-center">
                        <a href="https://www.untels.edu.pe/postulantesAdmision.aspx" target="_blank" rel="noopener noreferrer">
                            <img src={Applicant} height="100px" className="mb-3" />
                        </a>
                        <h4>
                            <b>Postulantes</b>
                        </h4>
                    </Col>
                    <Col xs={6} md={2} className="text-center">
                        <a href="https://www.untels.edu.pe/comiteElectoral.aspx" target="_blank" rel="noopener noreferrer">
                            <img src={Comite} height="100px" className="mb-3" />
                        </a>
                        <h4>
                            <b>Comité Electoral</b>
                        </h4>
                    </Col>
                    <Col xs={6} md={3} className="text-center">
                        <Link to="/cepre/informate">
                            <img src={Cepre} height="100px" className="mb-3" />
                        </Link>
                        <h4>
                            <b>Centro Preuniversitario</b>
                        </h4>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
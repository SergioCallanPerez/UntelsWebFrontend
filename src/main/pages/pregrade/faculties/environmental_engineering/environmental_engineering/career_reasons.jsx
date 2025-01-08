import React from "react";
import adminIMG from "@/assets/admin.jpg"
import { Card } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import "@/styles/careers.css"

export default function ReasonsStudy(){
    return(
        <section>
            <div className="career-reasons-container pb-5">
                <img src={adminIMG} className="career-reasons-img"/>
                <Card className="primary career-reasons-card border-0">
                    <Card.Body className="d-flex m-5 p-0 gap-4 flex-column justify-content-center">
                        <h2 className="with-underline text-center">
                            <b>¿Por qué estudiar Administración de Empresas en UNTELS?</b>
                        </h2>
                        <div className="career-reasons-list">
                            <p>
                                <FaCheckCircle/>
                                Modernos laboratorios de simulación empresarial y software especializado.
                            </p>
                            <p>
                                <FaCheckCircle/>
                                Enfoque en sostenibilidad y responsabilidad social.
                            </p>
                            <p>
                                <FaCheckCircle/>
                                Programas de capacitación y talleres prácticos desde los primeros ciclos.
                            </p>
                            <p>
                                <FaCheckCircle/>
                                Docentes altamente capacitados.
                            </p>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </section>
    );
}
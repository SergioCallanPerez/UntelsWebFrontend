import { React } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../../styles/root.css";
import organization_chartPDF from "@/assets/pdfs/ORGANIGRAMA2021.pdf";
import "@/styles/about-us.css";

export default function OrganizationChart(){
    return (
        <main>
            <Row className="background">
                <Row>
                    <h3 className="ms-3 about-us-title with-h-divider-on-background">Estatuto</h3>
                </Row>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <embed
                            src= {organization_chartPDF}
                            type="application/pdf" 
                            width="100%" 
                            height="600px">
                        </embed>
                    </Col>
                    <Col md={2}>
                    </Col>
                </Row>
                
            </Row>
        </main>
    );
}
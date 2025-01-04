import { React } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../../styles/root.css";
import mapIMG from "@/assets/MapaCampusUniversitario.png";
import "@/styles/about-us.css";

export default function Campus(){
    return (
        <main>
            <Row className="background">
                <Row>
                    <h3 className="ms-3 about-us-title with-h-divider-on-background">Campus</h3>
                </Row>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8} className="m-auto">
                        <img src= {mapIMG}></img>
                    </Col>
                    <Col md={2}>
                    </Col>
                </Row>
                
            </Row>
        </main>
    );
}
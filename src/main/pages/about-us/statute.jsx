import { React } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../../styles/root.css";
import statutePDF from "@/assets/pdfs/estatuto.pdf";
import "@/styles/about-us.css";
import { isMobile } from "react-device-detect";

export default function Statute(){
    return (
        <main className="background">
            <h3 className={`ms-3 with-h-divider-on-background me-3 ${isMobile?"about-us-title-mobile":"about-us-title-mobile"}`}>Estatuto</h3>
            <Container>
                <div style={{ height: "600px" }}>
                </div>
            </Container>
            
        </main>
    );
}
import { React } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../../styles/root.css";
import statutePDF from "@/assets/pdfs/estatuto.pdf";
import "@/styles/about-us.css";
import { isMobile } from "react-device-detect";

export default function Statute(){

    return (
        <main className="background">
            <h3 className="ms-3 about-us-title with-h-divider-on-background">Estatuto</h3>
            <Container>
                <div >
                <embed
                    src= {statutePDF}
                    type="application/pdf" 
                    width="100%" 
                    height="600px">
                </embed>
                </div>
            </Container>
            
        </main>
    );
}
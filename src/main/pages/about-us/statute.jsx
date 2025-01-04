import { React } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../../styles/root.css";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css"; 
import statutePDF from "@/assets/pdfs/estatuto.pdf";
import "@/styles/about-us.css";
import { isMobile } from "react-device-detect";

export default function Statute(){
    return (
        <main className="background">
            <h3 className={`ms-3 with-h-divider-on-background me-3 ${isMobile?"about-us-title-mobile":"about-us-title-mobile"}`}>Estatuto</h3>
            <Container>
                <div style={{ height: "600px" }}>
                <Worker workerUrl={`./node_modules/pdfjs-dist/build/pdf.worker.min.js`}>
                    <Viewer fileUrl={statutePDF} />
                </Worker>

                </div>
            </Container>
            
        </main>
    );
}
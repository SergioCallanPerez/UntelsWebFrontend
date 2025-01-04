import { React } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../../styles/root.css";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css"; 
import statutePDF from "@/assets/pdfs/estatuto.pdf";
import "@/styles/about-us.css";

export default function Statute(){
    return (
        <main className="background">
            <h3 className="ms-3 about-us-title with-h-divider-on-background">Estatuto</h3>
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
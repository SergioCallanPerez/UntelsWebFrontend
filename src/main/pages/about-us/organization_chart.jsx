import { React } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../../styles/root.css";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css"; 
import organization_chartPDF from "@/assets/pdfs/ORGANIGRAMA2021.pdf";
import "@/styles/about-us.css";

export default function OrganizationChart(){
    return (
        <main className="background">
            <h3 className="ms-3 about-us-title with-h-divider-on-background">Organigrama</h3>
            <Container>
                <div style={{ height: "600px" }}>
                <Worker workerUrl={`./node_modules/pdfjs-dist/build/pdf.worker.min.js`}>
                    <Viewer fileUrl={organization_chartPDF} />
                </Worker>

                </div>
            </Container>
                    
        </main>
    );
}
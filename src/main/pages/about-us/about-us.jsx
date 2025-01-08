import React, { useRef, useState, useEffect } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import "../../styles/root.css";
import nosotrosIMG from "@/assets/aboutus_assets/top_image.png";
import "@/styles/about-us.css";
import Mission from "./mission";
import Review from "./review";
import Statute from "./statute";
import OrganizationChart from "./organization_chart";

export default function AboutUs() {
    const [activeButton, setActiveButton] = useState("Misión, visión y valores");

    // Referencias para las secciones
    const missionRef = useRef(null);
    const reviewRef = useRef(null);
    const statuteRef = useRef(null);
    const orgChartRef = useRef(null);

    // Función para hacer scroll hacia una sección específica
    const handleScrollToSection = (section) => {
        setActiveButton(section);
        const refs = {
        "Misión, visión y valores": missionRef,
        "Reseña histórica": reviewRef,
        "Estatuto": statuteRef,
        "Organigrama": orgChartRef,
        };
        refs[section]?.current.scrollIntoView({ behavior: "smooth" });
    };

    // Listener para cambiar el botón activo según el scroll
    useEffect(() => {
        const handleScroll = () => {
        const sections = [
            { name: "Misión, visión y valores", ref: missionRef },
            { name: "Reseña histórica", ref: reviewRef },
            { name: "Estatuto", ref: statuteRef },
            { name: "Organigrama", ref: orgChartRef },
        ];

        // Detectar la sección visible
        for (let section of sections) {
            const rect = section.ref.current.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveButton(section.name);
            break;
            }
        }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
    <section>
        <div className="main-img-container">
            <div className="main-image">
            <img
                src={nosotrosIMG}
                alt="Universidad"
                className="img-fluid"
            />
            </div>
            <Card className="primary about-us-card border-0">
                <Card.Body className="d-flex m-5 p-0 gap-4 flex-column text-center justify-content-center">
                    <Card.Title as={"h2"}>
                    <b>Más que una universidad, una comunidad que inspira y construye futuro</b>
                    </Card.Title>
                </Card.Body>
            </Card>
        </div>
        

        <Container className="mt-4 mb-4">
            <Row>
                <h4 className="primary-color-bold">Acerca de la Universidad</h4>
                <Col md={4}>
                <div className="container-buttons">
                    <p
                        className={`button-${activeButton === "Misión, visión y valores" ? "blue" : "gray"}`}
                        onClick={() => handleScrollToSection("Misión, visión y valores")}
                    >
                        Misión, visión y valores
                    </p>
                    <p
                        className={`button-${activeButton === "Reseña histórica" ? "blue" : "gray"}`}
                        onClick={() => handleScrollToSection("Reseña histórica")}
                    >
                        Reseña histórica
                    </p>
                    <p
                        className={`button-${activeButton === "Estatuto" ? "blue" : "gray"}`}
                        onClick={() => handleScrollToSection("Estatuto")}
                    >
                        Estatuto
                    </p>
                    <p
                        className={`button-${activeButton === "Organigrama" ? "blue" : "gray"}`}
                        onClick={() => handleScrollToSection("Organigrama")}
                    >
                        Organigrama
                    </p>
                    <p className="button-gray">Directorio institucional</p>
                    <p className="button-gray">Mapa del campus</p>
                    <p className="button-gray">Convenios</p>
                    <p className="button-gray">Memoria anual</p>
                    <p className="button-gray">Mesa de parte</p>
                </div>
                
                </Col>

                <Col ref={missionRef}>
                    <Mission />
                </Col>
            </Row>
            <Row ref={reviewRef}>
                <Review />
            </Row>
            <Row ref={statuteRef} className="py-4">
                <Statute />
            </Row>
            <Row ref={orgChartRef} className="py-4">
                <OrganizationChart />
            </Row>
            
        </Container>
        
    </section>
  );
}
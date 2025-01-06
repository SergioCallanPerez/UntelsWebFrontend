import { React } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../../styles/root.css";
import nosotrosIMG from "@/assets/aboutus_assets/top_image.png";
import "@/styles/about-us.css";
import Mission from "./mission";
import Review from "./review";
import Statute from "./statute";
import OrganizationChart from "./organization_chart";

const desc = {
  missionDesc: "Formar profesionales, investigadores e innovadores, con base humanista, ética, social, tecnológica y científica. Que participen en la solución de los problemas de la sociedad, con un enfoque de desarrollo sostenible, vocación de servicio y espíritu emprendedor. En el ámbito local, nacional y con proyección internacional.",
  visionDesc: "Ser reconocida como una Universidad socialmente responsable. Integrado por un equipo humano comprometido y competente en la formación integral de sus estudiantes. Con aporte de innovación hacia la sociedad, mediante centros de investigación y desarrollo, incubadoras de emprendimiento y educación continua.",
  valuesDesc: "Respeto, libertad, mejora continua, honestidad, solidaridad y justicia, responsabilidad social.",
  values1: "Respeto",
  values2: "Libertad",
  values3: "Mejora continua",
  values4: "Honestidad",
  values5: "Solidaridad y justicia",
  values6: "Responsabilidad social",
};

export default function AboutUs() {
  return (
    <main>
        <div className="main-image">
        <img
            src={nosotrosIMG}
            alt="Universidad"
            className="img-fluid"
        />
        </div>

        <Container className="mt-4">
            <Row>
                <h4 className="primary-color-bold">Acerca de la Universidad</h4>
                <Col md={4}>
                <div className="container-buttons">
                    <p className="button-blue">Misión, visión y valores</p>
                    <p className="button-gray">Reseña histórica</p>
                    <p className="button-gray">Estatuto</p>
                    <p className="button-gray">Organigrama</p>
                    <p className="button-gray">Directorio institucional</p>
                    <p className="button-gray">Mapa del campus</p>
                    <p className="button-gray">Convenios</p>
                    <p className="button-gray">Memoria anual</p>
                    <p className="button-gray">Mesa de parte</p>
                </div>
                
                </Col>

                <Col>
                <Mission />
                </Col>
            </Row>
            <Row>
                <Review />
            </Row>
            <Row>
                <Statute />
            </Row>
            <Row>
                <OrganizationChart />
            </Row>
            
        </Container>
        
    </main>
  );
}
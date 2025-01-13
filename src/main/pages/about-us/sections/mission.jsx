import { React } from "react";
import { useMediaQuery } from "react-responsive";
import { Col, Container, Row } from "react-bootstrap";
import useScrollTo from "@/hooks/useScrollTo";

import Svg1 from "@/assets/svgs/handshake_white.svg";
import Svg2 from "@/assets/svgs/freedom.svg";
import Svg3 from "@/assets/svgs/improvement.svg";
import Svg4 from "@/assets/svgs/lock.svg";
import Svg5 from "@/assets/svgs/solidarity.svg";
import Svg6 from "@/assets/svgs/justice.svg";
import Svg7 from "@/assets/svgs/globe.svg";

import "@/styles/about-us.css";

const desc = {
  missionDesc:
    "Formar profesionales, investigadores e innovadores, con base humanista, ética, social, tecnológica y científica. Que participen en la solución de los problemas de la sociedad, con un enfoque de desarrollo sostenible, vocación de servicio y espíritu emprendedor. En el ámbito local, nacional y con proyección internacional.",
  visionDesc:
    "Ser reconocida como una Universidad socialmente responsable. Integrado por un equipo humano comprometido y competente en la formación integral de sus estudiantes. Con aporte de innovación hacia la sociedad, mediante centros de investigación y desarrollo, incubadoras de emprendimiento y educación continua.",
};

const values = [
  { svg: Svg1, text: "Respeto" },
  { svg: Svg2, text: "Libertad" },
  { svg: Svg3, text: "Mejora continua" },
  { svg: Svg4, text: "Honestidad" },
  { svg: Svg5, text: "Solidaridad" },
  { svg: Svg6, text: "Justicia" },
  { svg: Svg7, text: "Responsabilidad social" },
];

export default function Mission() {
  const isMd = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const ref = useScrollTo("section", "mision");

  return (
    <section ref={ref}>
      <Container>
        <h2
          className={`background-title ${
            isMd ? "with-underline" : "with-underline-left"
          } text-md-start text-center mb-5`}
        >
          <b>Visión</b>
        </h2>
        <p>{desc.missionDesc}</p>
        <h2
          className={`background-title ${
            isMd ? "with-underline" : "with-underline-left"
          } text-md-start text-center my-5`}
        >
          <b>Misión</b>
        </h2>
        <p>{desc.visionDesc}</p>
        <h2
          className={`background-title ${
            isMd ? "with-underline" : "with-underline-left"
          } text-md-start text-center  my-5`}
        >
          <b>Valores</b>
        </h2>
        <Row className="values-container">
          {values.map((value, index) => (
            <Col xs={6} md={3} className="mx-auto" key={index}>
              <div className="d-flex flex-column align-items-center gap-3">
                <div className="primary rounded-circle p-3">
                  <img
                    className="value-icon"
                    src={value.svg}
                    alt={value.text}
                  />
                </div>
                <p>{value.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

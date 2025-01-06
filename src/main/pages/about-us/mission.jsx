import { React } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../../styles/root.css";
import nosotrosIMG from "@/assets/nosotros.png";
import Svg1 from '@/assets/svgs/handshake_white.svg';
import Svg2 from '@/assets/svgs/freedom.svg';
import Svg3 from '@/assets/svgs/improvement.svg';
import Svg4 from '@/assets/svgs/lock.svg';
import Svg5 from '@/assets/svgs/solidarity.svg';
import Svg6 from '@/assets/svgs/justice.svg';
import Svg7 from '@/assets/svgs/globe.svg';

import "@/styles/about-us.css";

const desc = {
  missionDesc: "Formar profesionales, investigadores e innovadores, con base humanista, ética, social, tecnológica y científica. Que participen en la solución de los problemas de la sociedad, con un enfoque de desarrollo sostenible, vocación de servicio y espíritu emprendedor. En el ámbito local, nacional y con proyección internacional.",
  visionDesc: "Ser reconocida como una Universidad socialmente responsable. Integrado por un equipo humano comprometido y competente en la formación integral de sus estudiantes. Con aporte de innovación hacia la sociedad, mediante centros de investigación y desarrollo, incubadoras de emprendimiento y educación continua.",
};

export default function Mission() {
  const values = [
    { svg: Svg1, text: 'Respeto' },
    { svg: Svg2, text: 'Libertad' },
    { svg: Svg3, text: 'Mejora continua' },
    { svg: Svg4, text: 'Honestidad' },
    { svg: Svg5, text: 'Solidaridad' },
    { svg: Svg6, text: 'Justicia' },
    { svg: Svg7, text: 'Responsabilidad social' },
  ];
  return (
    <main>
      <Row>
        <p>Visión</p>
        <p>{desc.missionDesc}</p>
        <p>Misión</p>
        <p>{desc.visionDesc}</p>
        <p>Valores</p>
        <div className="values-container">
          {values.map((value, index) => (
            <div className="value-item" key={index}>
              <div className="value-circle">
                <img src={value.svg} alt={value.text} className="value-icon" />
              </div>
              <p className="value-text">{value.text}</p>
            </div>
          ))}
        </div>

      </Row>
    </main>
  );
}

import React from "react";
import { Row, Col } from "react-bootstrap";
import Abilities from "@/assets/svgs/sentiment_satisfied.svg"
import Capacities from "@/assets/svgs/psychology.svg"
import { FaCheckCircle } from "react-icons/fa";
import Sectors from "@/assets/admin_sectors.png"


const career_abilities=[
    {
        id: "1",
        abilityname: "Visión Estratégica: ",
        abilitydesc: "Comprende las tendencias sociales, económicas y tecnológicas, lo que le permite tomar decisiones acertadas en un entorno globalizado.",
    },
    {
        id: "2",
        abilityname: "Liderazgo y Trabajo en Equipo: ",
        abilitydesc: "Asume el liderazgo de equipos multidisciplinarios, logrando metas propuestas con diálogo y compromiso.",
    },
    {
        id: "3",
        abilityname: "Negociación y Consenso: ",
        abilitydesc: "Experto en construir acuerdos efectivos y manejar disensos con diplomacia.",
    },
    {
        id: "4",
        abilityname: "Comunicación Efectiva: ",
        abilitydesc: "Se expresa con claridad y precisión, utilizando herramientas TIC para conectar con diversos públicos en entornos nacionales e internacionales.",
    }
]

const career_capacities=[
    {
        id: "1",
        capacityname: "Innovación y Creatividad: ",
        capacitydesc: "Formula soluciones innovadoras ante escenarios dinámicos del universo empresarial."
    },
    {
        id: "2",
        capacityname: "Emprendimiento: ",
        capacitydesc: "Con capacidad para iniciar y gestionar negocios con perseverancia, visión y ética profesional."
    },
    {
        id: "3",
        capacityname: "Responsabilidad Ambiental: ",
        capacitydesc: "Integra los intereses empresariales con el respeto al medio ambiente, promoviendo un desarrollo sostenible."
    },
    {
        id: "4",
        capacityname: "Adaptabilidad: ",
        capacitydesc: "Flexible a los cambios económicos internacionales, con visión transnacional y enfoque social, cultural y técnico."
    },
]

const sectors=[
    {
        id: "1",
        sectorname: "Empresario promotor y gestor.",
    },
    {
        id: "2",
        sectorname: "Gerente.",
    },
    {
        id: "3",
        sectorname: "Planificador Empresarial.",
    },
    {
        id: "4",
        sectorname: "Auditor Administrativo.",
    },
    {
        id: "5",
        sectorname: "Asesor y Consultor.",
    },
    {
        id: "6",
        sectorname: "Investigador.",
    },
    {
        id: "7",
        sectorname: "En la administración estratégica.",
    },
    {
        id: "8",
        sectorname: "En la administración de la tecnología.",
    },
    {
        id: "9",
        sectorname: "Capacitador Empresarial.",
    },
    {
        id: "10",
        sectorname: "Docente Universitario y de estudios superiores.",
    }
]

export default function Profile(){


    return(
        <section>
            <div className="background-title with-underline mb-4 pt-4">
                <h2 className="background-title text-center"><b>Perfil del egresado</b></h2>
            </div>
            <div className="mt-5">
                <p>
                    El Administrador de Empresas de la Universidad Nacional Tecnológica de Lima Sur es un profesional 
                    integral, con una sólida formación humana y científica, preparado para enfrentar los desafíos de un 
                    mundo globalizado y dinámico.
                </p>
            </div>
            <div className="mt-3">
                <div className="abilities-title d-flex align-items-center">
                    <img src={Abilities}/>
                    <h3 className="background-title pt-2">Habilidades y Competencias</h3>
                </div>
                {career_abilities.map((item)=>(
                    <ul>
                        <li><b>{item.abilityname}</b>{item.abilitydesc}</li>
                    </ul>
                ))}
            </div>
            <div className="mt-3">
                <div className="abilities-title d-flex align-items-center">
                    <img src={Capacities}/>
                    <h3 className="background-title pt-2">Capacidades Profesionales</h3>
                </div>
                {career_capacities.map((item)=>(
                    <ul>
                        <li><b>{item.capacityname}</b>{item.capacitydesc}</li>
                    </ul>
                ))}
            </div>
            <div>
                <h3 className="background-title text-center mt-5">
                    <b>¿En qué sectores liderarás como profesional?</b>
                </h3>
                <p className="text-center">Como Licenciado en Administración de Empresas UNTELS, podrás desempeñarte en roles como:</p>
                <div>
                    <Row>
                        <Col md={7}>
                            {sectors.map((item)=>(
                                <div key={item.id}>
                                    <p className="m-2"><FaCheckCircle className="me-2"/>{item.sectorname}</p>
                                </div>
                            ))}
                        </Col>
                        <Col md={5}>
                            <img src={Sectors} width="100%"/>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    );
}
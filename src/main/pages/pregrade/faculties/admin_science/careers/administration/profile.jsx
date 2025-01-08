import React from "react";
import Abilities from "@/assets/svgs/sentiment_satisfied.svg"
import Capacities from "@/assets/svgs/psychology.svg"

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
        </section>
    );
}
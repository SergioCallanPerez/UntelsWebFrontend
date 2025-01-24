import React from "react";
import { Container } from "react-bootstrap";

const descModalities=[
    {
        id: 1,
        name: "Con derecho a vacante: ",
        desc: " En esta modalidad los alumnos rendirán dos simulacros y dos evaluaciones que acumulan puntaje para ingreso directo (ingresan por escuela profesional los 15 primeros puestos por carrera)."
    },
    {
        id: 2,
        name: "Sin derecho a vacante: ",
        desc: "Los alumnos  inscritos en esta modalidad tienen derecho a dos simulacros, mas no a las evaluaciones para la acumulación de puntaje."
    }
]

export default function Modalities(){
    
    return(
        <section>
            <Container>
                <h2>Modalidades</h2>
                <div>
                    <p>En UNTELS, encontrarás dos modalidades:</p>
                    {descModalities.map((item)=>(
                        <ul>
                            <li>{item.name}{item.desc}</li>
                        </ul>
                    ))}
                </div>
            </Container>
        </section>
    )
}
import React from "react";
import { Container } from "react-bootstrap";

const descActivities=[
    {desc: "Examen de media beca"}, 
    {desc: "Charla de orientación vocacional a I.E."},
    {desc: "Talleres de elaboración de ítems"}, 
    {desc: "Seminarios de reforzamiento"}, 
    {desc: "Simulacro de Exámenes"}, 
]

export default function Activities(){
    return(
        <section>
            <Container>
                <h2>Actividades</h2>
                <div>
                    {descActivities.map((item)=>(
                        <ul>
                            <li>{item.desc}</li>
                        </ul>
                    ))}
                </div>
            </Container>
        </section>
    )
}
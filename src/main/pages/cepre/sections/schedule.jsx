import React from "react";
import { Container } from "react-bootstrap";

const descSchedule=[
    {
        time: "Mañana: ",
        desc: "08:00 a 13:30 horas."
    },
    {
        time: "Tarde: ",
        desc: "14:30 a 20:00 horas."
    }
]

export default function Schedule(){
    return(
        <section>
            <Container>
                <h2>Horarios de clases</h2>
                <div>
                    <p>Existen 2 horarios a elegir:</p>
                    {descSchedule.map((item)=>(
                        <ul>
                            <li>{item.time}{item.desc}</li>
                        </ul>
                    ))}
                </div>
            </Container>
        </section>
    )
}
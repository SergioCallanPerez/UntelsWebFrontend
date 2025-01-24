import React from "react";
import Table from "react-bootstrap/Table";

const descCiclo=[
    {
        id: 1,
        desc: "Inscripciones",
        time: "Julio- Agosto 2024"
    },
    {
        id: 2,
        desc: "Inicio de Clases",
        time: "02 de Setiembre de 2024"
    },
    {
        id: 3,
        desc: "Primer Simulacro",
        time: "Setiembre de 2024"
    },
    {
        id: 4,
        desc: "Primer Examen",
        time: "27 de Octubre 2024"
    },
    {
        id: 5,
        desc: "Segundo Simulacro",
        time: "Noviembre de 2024"
    },
    {
        id: 6,
        desc: "Segundo Examen",
        time: "22 de Diciembre de 2024"
    }
]

export default function Ciclo(){


    return(
        <section className="container mt-4">
            <h2 className="background-title with-underline-left mb-4">Ciclo académico 2025-I</h2>
            <p>Nuestro siguiente ciclo académico:</p>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th className="text-center">Descripción</th>
                    <th className="text-center">Fecha</th>
                </tr>
                </thead>
                <tbody>
                {descCiclo.map((item) => (
                    <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.desc}</td>
                    <td>{item.time}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </section>
    )
}
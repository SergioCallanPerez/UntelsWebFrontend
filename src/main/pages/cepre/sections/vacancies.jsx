import React from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const descVacancies=[
    {
        id: 1,
        career: "Ingeniería Electrónica y Telecomunicaciones",
        cant: "15"
    },
    {
        id: 2,
        career: "Ingeniería Mecánica y Eléctrica",
        cant: "15"
    },
    {
        id: 3,
        career: "Ingeniería de Sistemas",
        cant: "15"
    },
    {
        id: 4,
        career: "Administración de Empresas",
        cant: "15"
    },
    {
        id: 5,
        career: "Ingeniería Ambiental",
        cant: "15"
    }
]

export default function Vacancies(){


    return(
        <section className="container mt-4">
            <h2>Vacantes de ingreso directo</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th className="text-center">Carrera Profesional</th>
                        <th className="text-center">Vacantes</th>
                    </tr>
                </thead>
                <tbody>
                    {descVacancies.map((item)=>(
                        <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.career}</td>
                        <td className="text-center">{item.cant}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </section>
    )
}
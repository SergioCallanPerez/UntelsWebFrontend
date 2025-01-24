import React from "react";
import { Table } from "react-bootstrap";

const descLessons=[
    {
        name: "Lógico Matemática",
        hours: "2",
    },
    {
        name: "Verbal",
        hours: "2",
    },
    {
        name: "Aritmética",
        hours: "3",
    },
    {
        name: "Álgebra",
        hours: "3",
    },
    {
        name: "Geometría",
        hours: "3",
    },
    {
        name: "Trigonometría",
        hours: "3",
    },
    {
        name: "Lenguaje- Literatura",
        hours: "2",
    },
    {
        name: "Historia del Perú e Historia Universal",
        hours: "1",
    },
    {
        name: "Filosofía y Lógica",
        hours: "2",
    },
    {
        name: "Economía",
        hours: "1",
    },
    {
        name: "Física",
        hours: "3",
    },
    {
        name: "Química",
        hours: "3",
    },
    {
        name: "Biología",
        hours: "2",
    },
    {
        name: "Total de horas",
        hours: "30",
    }
]

export default function Lessons(){
    return(
        <section className="container mt-4">
            <h2 className="background-title with-underline-left mb-5">Cursos y horas semanales</h2>
            <Table bordered className="table-on-background">
                <thead>
                <tr>
                    <th className="text-center">Cursos</th>
                    <th className="text-center">Horas a la semana</th>
                </tr>
                </thead>
                <tbody>
                {descLessons.map((item) => (
                    <tr>
                    <td>{item.name}</td>
                    <td className="text-center">{item.hours}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </section>
    )
}
import React from "react";
import { Table, Container } from "react-bootstrap";
import "@/styles/qa.css"

const descCost = [
  {
    turn: "Mañana y tarde",
    modality: "Presencial con derecho a vacante",
    sumCont: "S/. 1,200.00",
    codeCont: "9129",
    sumFrac: "Dos cuotas de S/. 700.00",
    codeFrac: "9131",
  },
  {
    turn: "Mañana y tarde",
    modality: "Ingeniería Mecánica y Eléctrica",
    sumCont: "S/. 900.00",
    codeCont: "9130",
    sumFrac: "Dos cuotas de S/. 500.00",
    codeFrac: "9132",
  },
  {
    turn: "Tarde",
    modality: "Ingeniería de Sistemas",
    sumCont: "S/. 700.00",
    codeCont: "9135",
    sumFrac: "-",
    codeFrac: "-",
  },
];

const descScore=[
    {
        exam: "Parcial",
        numberQ: "100",
        correct: "2",
        incorrect: "-0.25",
        notAnswer: "0",
        maxScore: "200"
    },
    {
        exam: "Final",
        numberQ: "100",
        correct: "2",
        incorrect: "-0.25",
        notAnswer: "0",
        maxScore: "200"
    },
]

const descAbilities=[
    {
        name: "Lógico Matemática",
        numParcial: "10",
        numFinal: "10"
    },
    {
        name: "Verbal",
        numParcial: "10",
        numFinal: "10"
    }
]

const descMat=[
    {
        name: "Aritmética",
        numParcial: "8",
        numFinal: "8"
    },
    {
        name: "Álgebra",
        numParcial: "8",
        numFinal: "8"
    },
    {
        name: "Geometría",
        numParcial: "8",
        numFinal: "8"
    },
    {
        name: "Trigonometría",
        numParcial: "8",
        numFinal: "8"
    },
]

const descCom=[
    {
        name: "Lenguaje- Literatura",
        numParcial: "8",
        numFinal: "8"
    }
]

const descSocial=[
    {
        name: "Historia del Perú",
        numParcial: "3",
        numFinal: "3"
    },
    {
        name: "Historia Universal",
        numParcial: "3",
        numFinal: "3"
    },
    {
        name: "Filosofía y Lógica",
        numParcial: "3",
        numFinal: "3"
    },
    {
        name: "Economía",
        numParcial: "3",
        numFinal: "3"
    }
]

const descScience=[
    {
        name: "Física",
        numParcial: "8",
        numFinal: "8"
    },
    {
        name: "Química",
        numParcial: "8",
        numFinal: "8"
    },
    {
        name: "Biología",
        numParcial: "8",
        numFinal: "8"
    }
]

export default function QA() {
  return (
    <section>
        <Container>
            <div>
                <h2 className="background-title with-underline-left mb-5">¿Cuál es el costo por ciclo?</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th rowSpan={2}>Turno</th>
                        <th rowSpan={2}>Modalidad</th>
                        <th colSpan={2}>Pago al Contado</th>
                        <th colSpan={2}>Pago Fraccionado</th>
                        </tr>
                        <tr>
                        <th>Monto S/.</th>
                        <th>Código de Pago</th>
                        <th>Monto S/.</th>
                        <th>Código de Pago</th>
                        </tr>
                    </thead>
                    <tbody>
                        {descCost.map((item, index) => (
                        <tr key={index}>
                            <td>{item.turn}</td>
                            <td>{item.modality}</td>
                            <td>{item.sumCont}</td>
                            <td>{item.codeCont}</td>
                            <td>{item.sumFrac}</td>
                            <td>{item.codeFrac}</td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <div>
                <h2 className="background-title with-underline-left mb-5">¿Dónde se realiza el pago de inscripción de los ciclos?</h2>
                <ul>
                    <li>Caja de la UNTELS</li>
                    <li>Banco de la Nación</li>
                    <li>Págalo.pe</li>
                </ul>
                <p>El pago se deberá de realizar con el documento de identidad de la persona que estudiará.</p>
            </div>
            <div>
                <h2 className="background-title with-underline-left mb-5">¿Cuáles son los puntajes por examen?</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Examen</th>
                            <th>Preguntas</th>
                            <th>Correctas</th>
                            <th>Incorrectas</th>
                            <th>No contestadas</th>
                            <th>Puntaje Máximo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {descScore.map((item)=>(
                            <tr>
                                <td>{item.exam}</td>
                                <td>{item.numberQ}</td>
                                <td>{item.correct}</td>
                                <td>{item.incorrect}</td>
                                <td>{item.notAnswer}</td>
                                <td>{item.maxScore}</td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={5}>Puntaje final</td>
                            <td>400</td>
                        </tr>
                    </tbody>
                </Table>
                <p>El puntaje mínimo aprobatorio de ingreso se define de acuerdo al orden de mérito.</p>
            </div>
            <div>
                <h2 className="background-title with-underline-left mb-5">¿Cuál es la estructura del examen?</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th rowSpan={2} className="text-center">Aspectos Considerados</th>
                            <th colSpan={2} className="text-center">Evaluaciones</th>
                        </tr>
                        <tr>
                            <th className="text-center">Examen Parcial</th>
                            <th className="text-center">Examen Final</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="text-center">Habilidades</th>
                            <th colSpan={2} className="text-center">Número de Preguntas</th>
                        </tr>
                        {descAbilities.map((item)=>(
                            <tr>
                                <th>{item.name}</th>
                                <th>{item.numParcial}</th>
                                <th>{item.numFinal}</th>
                            </tr>
                        ))}
                        <tr>
                            <th colSpan={3} className="text-center">Conocimientos</th>
                        </tr>
                        <tr>
                            <th colSpan={3} className="text-center">Matemática</th>
                        </tr>
                        {descMat.map((item)=>(
                            <tr>
                                <th>{item.name}</th>
                                <th>{item.numParcial}</th>
                                <th>{item.numFinal}</th>
                            </tr>
                        ))}
                        <tr>
                            <th colSpan={3} className="text-center">Comunicación</th>
                        </tr>
                        {descCom.map((item)=>(
                            <tr>
                                <th>{item.name}</th>
                                <th>{item.numParcial}</th>
                                <th>{item.numFinal}</th>
                            </tr>
                        ))}
                        <tr>
                            <th colSpan={3} className="text-center">Ciencias Sociales</th>
                        </tr>
                        {descSocial.map((item)=>(
                            <tr>
                                <th>{item.name}</th>
                                <th>{item.numParcial}</th>
                                <th>{item.numFinal}</th>
                            </tr>
                        ))}
                        <tr>
                            <th colSpan={3} className="text-center">Ciencia, Tecnología y Ambiente</th>
                        </tr>
                        {descScience.map((item)=>(
                            <tr>
                                <th>{item.name}</th>
                                <th>{item.numParcial}</th>
                                <th>{item.numFinal}</th>
                            </tr>
                        ))}
                        <tr className="blue-col">
                            <th>Total de preguntas</th>
                            <th>100</th>
                            <th>100</th>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Container>
    </section>
  );
}

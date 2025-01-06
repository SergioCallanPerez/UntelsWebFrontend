import React from "react";
import Card from "react-bootstrap/Card";
import {Row, Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FaDownload } from "react-icons/fa6";

const syllabusItems=[
    {
        id: "1",
        title: '1er',
        subject: [
            "Metodología de la Investigacion",
            "Introducción a los negocios",
            "Economía General",
            "Administración I",
            "Filosofía y Ética",
            "Matemática Básica"
        ]
    },
    {
        id: "2",
        title: '2do',
        subject: [
            "Metodología de la Investigacion",
            "Introducción a los negocios",
            "Economía General",
            "Administración I",
            "Filosofía y Ética",
            "Matemática Básica"
        ]
    },
    {
        id: "3",
        title: '3ro',
        subject: [
            "Metodología de la Investigacion",
            "Introducción a los negocios",
            "Economía General",
            "Administración I",
            "Filosofía y Ética",
            "Matemática Básica"
        ]
    },
    {
        id: "4",
        title: '4to',
        subject: [
            "Metodología de la Investigacion",
            "Introducción a los negocios",
            "Economía General",
            "Administración I",
            "Filosofía y Ética",
            "Matemática Básica"
        ]
    },
    {
        id: "5",
        title: '5to',
        subject: [
            "Metodología de la Investigacion",
            "Introducción a los negocios",
            "Economía General",
            "Administración I",
            "Filosofía y Ética",
            "Matemática Básica"
        ]
    },
    {
        id: "6",
        title: '6to',
        subject: [
            "Metodología de la Investigacion",
            "Introducción a los negocios",
            "Economía General",
            "Administración I",
            "Filosofía y Ética",
            "Matemática Básica"
        ]
    },
    {
        id: "7",
        title: '7mo',
        subject: [
            "Metodología de la Investigacion",
            "Introducción a los negocios",
            "Economía General",
            "Administración I",
            "Filosofía y Ética",
            "Matemática Básica"
        ]
    },
    {
        id: "8",
        title: '8vo',
        subject: [
            "Metodología de la Investigacion",
            "Introducción a los negocios",
            "Economía General",
            "Administración I",
            "Filosofía y Ética",
            "Matemática Básica"
        ]
    },
    {
        id: "9",
        title: '9no',
        subject: [
            "Metodología de la Investigacion",
            "Introducción a los negocios",
            "Economía General",
            "Administración I",
            "Filosofía y Ética",
            "Matemática Básica"
        ]
    },
    {
        id: "10",
        title: '10mo',
        subject: [
            "Metodología de la Investigacion",
            "Introducción a los negocios",
            "Economía General",
            "Administración I",
            "Filosofía y Ética",
            "Matemática Básica"
        ]
    }
]

export default function Syllabus(){
    return(
        <section>
            <div className="syllabus-title">
                <h2><b>Plan de estudios</b></h2>
            </div>
            <div className="syllabus-buttons">
                <Button className="syllabus-plan">
                    Plan de estudios
                    <FaDownload/>
                </Button>
                <Button className="syllabus-malla">
                    Malla Curricular
                    <FaDownload/>
                </Button>
            </div>
            <Row>
            {syllabusItems.map((item)=>{
                <Col md={3}>
                    <Card
                        key={item.id}
                        className="asd"
                    >
                        <Card.Body className="asd">
                            <Card.Title className="asd">
                                {item.title}
                            </Card.Title>
                            <Card.Text>
                                <li>{item.subject}</li>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            })}
            </Row>
        </section>
    );
}
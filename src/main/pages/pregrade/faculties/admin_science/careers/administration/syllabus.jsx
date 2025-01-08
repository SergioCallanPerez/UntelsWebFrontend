import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaDownload } from "react-icons/fa6";
import PagerView from "@/components/pager";
import "@/styles/careers.css"

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

export default function Syllabus() {
    return (
        <section>
            <div className="syllabus-title background-title with-underline mb-4">
                <h2 className="background-title text-center"><b>Plan de estudios</b></h2>
            </div>
            <div className="syllabus-buttons pb-5">
                <Button className="syllabus-plan">
                    Plan de estudios <FaDownload />
                </Button>
                <Button className="syllabus-malla">
                    Malla Curricular <FaDownload />
                </Button>
            </div>
            <PagerView className="pagerview" controls={false}>
                {syllabusItems.map((item) => (
                    <Card
                        key={item.id}
                        className="background border-0 rounded-4 mx-4 mb-2 with-box-shadow"
                    >
                        <Card.Body className="d-flex flex-column">
                            <Card.Title className="mt-3 primary syllabus-card-title rounded-circle justify-content-center align-items-center d-flex align-self-center">
                                {item.title}
                            </Card.Title>
                            <Card.Text>
                                <ul>
                                    {item.subject.map((subject, index) => (
                                        <li key={index}>{subject}</li>
                                    ))}
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </PagerView>
        </section>
    );
}
import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Admin from "../../../assets/admin.jpg"
import Book from "../../../assets/svgs/book.svg";
import Sports from "../../../assets/svgs/sports.svg";
import Laboratories from "../../../assets/svgs/laboratories.svg";
import "../../../styles/campus_life.css"

const cards=[
    {
        id: "1",
        title: "Centros de investigación y desarrollo",
        img: Admin,
        subimg: Laboratories,
    },
    {
        id: "2",
        title: "Actividades culturales y deportivas",
        img: Admin,
        subimg: Sports,
    },
    {
        id: "3",
        title: "Espacios para el estudio y la colaboración",
        img: Admin,
        subimg: Book,
    },
]

export default function CampusLife(){


    return(
        <section>
            <Container>
                <div className="d-flex align-items-center with-h-divider-primary justify-content-center">
                    <h3 className="background-title"><b>Vida universitaria: ¿Qué encontrarás en Untels?</b></h3>
                </div>
                <Row className="g-4 justify-content-center">
                    {cards.map((item)=> (
                        <Col md={4}>
                            <img src={item.img} width="95%" className="mt-4 campus-img"/>
                            <Card className="on-primary-color m-3">
                                <Card.Img
                                    className="mt-3"
                                    variant="top"
                                    src={item.subimg}
                                    height="50px"
                                />
                                <Card.Body>
                                    <Card.Title className="background-title">
                                        <b>{item.title}</b>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
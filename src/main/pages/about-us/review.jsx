import { React } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../../styles/root.css";
import nosotrosIMG from "@/assets/nosotros.png";
import nosotrosIMG2 from "@/assets/review_image.png";
import "@/styles/about-us.css";

export default function Review(){
    const messages = {
        message1:"La historia de la Universidad Nacional Tecnológica de Lima Sur (UNTELS) comienza en la década de los 70, cuando los pobladores de Villa El Salvador, un distrito emergente, soñaron con una comunidad autogestionaria que incluyera una universidad pública. En su Primer Plan de Desarrollo Integral, propusieron asignar un terreno en Lomo de Corvina para este fin.",
        message2:"Décadas más tarde, el 10 de enero del 2002, este sueño se materializó con la creación de la Universidad Nacional Tecnológica del Cono Sur, establecida mediante la Ley N° 27431 durante el Gobierno de Transición Democrática liderado por Valentín Paniagua. Este logro fue posible gracias al esfuerzo de líderes comunitarios de Villa El Salvador y otros distritos de Lima Sur.",
        message3:"En 2005, bajo la dirección del Ministro de Educación, Javier Sota Nadal, se designó la primera Comisión Organizadora. En marzo de 2006, la universidad recibió el terreno para su Sede Central y los recursos para construir su primer pabellón de aulas. Ese mismo año se aprobó el Proyecto de Desarrollo Institucional, consolidando los cimientos para su funcionamiento.",
        message4:"El inicio de las actividades académicas llegó en 2007, con su primer examen de admisión en febrero y el inicio de clases en abril. Desde entonces, UNTELS ha crecido y evolucionado, adoptando su nombre actual en 2014 mediante la Ley Nº 30184. Hoy, UNTELS es un referente en la educación superior de Lima Sur, comprometida con la formación de profesionales integrales y el desarrollo de la comunidad.",

    };
    return (
        <main>
            <h3 className="ms-3 about-us-title with-h-divider-on-background">Reseña Historica</h3>
            <Row>
                <Row className="background">
                    <Col md={9}>
                    <h4>1970s(Siglo XX)</h4>
                    <p className="ms-3 about-us-message">{messages.message1}</p>
                    <h4>2001</h4>
                    <p className="ms-3 about-us-message">{messages.message2}</p>
                    <h4>2005</h4>
                    <p className="ms-3 about-us-message">{messages.message3}</p>
                    <h4>2007</h4>
                    <p className="ms-3 about-us-message">{messages.message4}</p>
                    
                    </Col>
                    <Col md={3} className="mt-auto">
                    <img className="about-us-img" src= {nosotrosIMG}></img>
                    <img className="about-us-img" src= {nosotrosIMG2}></img>
                    </Col>
                    
                </Row>
            </Row>
        </main>
    );
}
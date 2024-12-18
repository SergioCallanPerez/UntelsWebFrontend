import React from 'react';

import "../../styles/news.css"
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Schedule from "./schedule";
import News from "./news";
import Communications from './communications';

export default function Announcements() {
    
    return (
        <section>
            <Container>
                <Row>
                    <Col>
                        <h2 className='agenda-title'>Agenda</h2>
                        <Schedule />

                    </Col>
                    <Col>
                        <h2>Noticias</h2>
                        <News />
                    </Col>
                    <Col>
                        <h2>Comunicados</h2>
                        <Communications />
                    </Col>
                </Row>
                
            </Container>
        </section>
    );
}
    
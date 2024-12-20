import React from 'react';

import "../../styles/announcements.css"
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Schedule from "./schedule";
import News from "./news";
import Communications from './communications';

export default function Announcements() {
    
    return (
        <section className='py-4'>
            <Container>
                <Row className='announcements-container'>
                    <Col className='justify-content'>
                        <div className='background-schedule'>
                            <h2 className='mb-4 on-background-light agenda'>Agenda</h2>
                        </div>
                        
                        
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
    
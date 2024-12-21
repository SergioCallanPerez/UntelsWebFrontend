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
            <Container fluid>
                <Row className='announcements-container'>
                    <Col xs={12} md={4}>
                        <div className='background-schedule'>
                            <h2 className='mb-4 on-background-light agenda'>Agenda</h2>
                        </div>
                        
                        
                        <Schedule />

                    </Col>
                    
                    <Col xs={12} md={4}>
                        <h2 className='mb-4 news'>Noticias</h2>
                        <News />
                    </Col>
                    <Col xs={12} md={4}>
                        <div className='communications-background'>
                            <h2 className='mb-4 on-background-light communications-title'>Comunicados</h2>
                            <Communications />
                        </div>
                        
                    </Col>
                </Row>
                
            </Container>
        </section>
    );
}
    
import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import userLogo from '../../assets/user_icon.png';
import '../../styles/experiences.css';
import { Container, Row, Col } from 'react-bootstrap';
import { isBrowser, isMobile } from 'react-device-detect';

const cases = [
  {
    id: '1',
    name: 'Jhon Doe',
    text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    work: 'Desarrollador',
  },
  {
    id: '2',
    name: 'Jane Doe',
    text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    work: 'Diseñador UX',
  },
  {
    id: '3',
    name: 'Jhon Smith',
    text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    work: 'Desarrollador',
  },
];

export default function Experiences() {
  return (
    <section>
      <Container fluid>
        <h2 className={isBrowser ? 'h2-text': 'h2-mobile-text'}><b>Experiencias de éxito</b></h2>
        <hr className='h2Line'/>
        <Row xs={1} md={4} className="g-4 justify-content-center">
          {cases.map((caseItem) => (
            <Col key={caseItem.id}>
              <Card className='cards'>
                <Card.Body>
                  <div className='d-flex align-items-center'>
                    <Card.Img className='cardImg' variant="top" src={userLogo} style={{ width: '50px', height: '50px'}}/>
                    <Card.Title className='on-primary-color'><b>{caseItem.name}</b></Card.Title>
                  </div>
                  <hr className='cardLine' />
                  <Card.Text className='on-primary-color'>{caseItem.text}</Card.Text>
                  <hr className='cardLine' />
                  <Card.Subtitle className="on-primary-color"><b>{caseItem.work}</b></Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

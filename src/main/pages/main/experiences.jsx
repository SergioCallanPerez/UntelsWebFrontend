import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import userLogo from '../../assets/user_icon.png';
import '../../styles/experiences.css'
import { Container } from 'react-bootstrap';

const cases = [
  {
    id: '1',
    name: 'Jhon Doe',
    text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    work: 'Trabajo actual',
  },
  {
    id: '2',
    name: 'Jane Doe',
    text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    work: 'Trabajo actual',
  },
  {
    id: '3',
    name: 'Jhon Doe',
    text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    work: 'Trabajo actual',
  },
];

export default function Experiences() {
  return (
    <section>
        <Container>
            <CardGroup>
                {cases.map((caseItem) => (
                    <Card key={caseItem.id}>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <Card.Img className='cardImg' variant="top" src={userLogo} style={{ width: '50px', height: '50px'}} />
                                <Card.Title>{caseItem.name}</Card.Title>
                            </div>
                            <Card.Text>{caseItem.text}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">{caseItem.work}</small>
                        </Card.Footer>
                    </Card>
                ))}
            </CardGroup>
        </Container>
    </section>
  );
}

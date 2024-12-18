import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Event({day,month,description,time,place}){
    return(
        <Row className='event-row'>
            <Col className='date-column'>
                <Row>{day}</Row>
                <Row>{month}</Row>
            </Col>
            <Col>
                <Row>{`Evento: ${description}`}</Row>
                <Row>{`Hora: ${time}`}</Row>
                <Row>{`Lugar: ${place}`}</Row>
            </Col>
        </Row>
    )
}

export default function Schedule() {
    const auditorium ={
        sanJuanPablo: "Auditorio S. S. san Juan Pablo II",
        palacioJuventud: "Palacio de la juventud",
        miniAuditorio: "Miniauditorio",
        laboratorioB1_4: "Laboratorio B1-4 (Pabellón B)",
        aulaC4_3: "Aula C4-3",
    }
    const events = [
        {day:9, month: 'ENE', description:'Semana de Administración', time: "09:00h",place: `${auditorium.sanJuanPablo} y ${auditorium.palacioJuventud}`},
        {day:12, month: 'ENE', description:'VI Cicti', time: "14:00h", place: `${auditorium.miniAuditorio} y ${auditorium.laboratorioB1_4}`},
        {day:20, month: 'ENE', description:"Clase espejo untels", time:"10:00h", place:`${auditorium.aulaC4_3}`},
        {day:10, month: 'FEB', description: "Ceremonia de Colación", time:"17:00h", place:`${auditorium.sanJuanPablo}`}
    ]

    return (
        <Col>
            {events.map((event,index) => (
                <Event
                    key={index}
                    day={event.day}
                    month={event.month}
                    description={event.description}
                    time={event.time}
                    place={event.place}
                />
            ))}
        </Col>
    );

}


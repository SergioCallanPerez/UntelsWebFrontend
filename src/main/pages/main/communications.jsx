import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Messages({no,message}){
    return(
        <Row className='message-column'>
            <Col>{`Comunicado ${no}: ${message}`}</Col>
        </Row>
    )
}
export default function Communications(){
    const notes ={
        note1: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida"
    }
    const messagesList = [
        {no:301,message: notes.note1},
        {no:302,message: notes.note1},
        {no:303,message: notes.note1},
        {no:306,message: notes.note1},
        {no:305,message: notes.note1},
        {no:306,message: notes.note1},
        {no:307,message: notes.note1},
    ]
    return(
        <Col>
            {messagesList.map((event,index)=>(
                <Messages 
                    key={index}
                    no={event.no}
                    message={event.message}
                />
            ))}
        </Col>
    )
}
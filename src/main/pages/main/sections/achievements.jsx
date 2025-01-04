import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Achievements(){
    
    
    
    return(
        <section>
            <Container>
                <Row>
                    <Col md={3}>
                        <div className="achievements-top-ten">
                            
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="achievements-careers">
                            
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="achievements-labs">
                            
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="achievements-agreements">
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
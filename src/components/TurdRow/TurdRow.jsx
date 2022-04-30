import React from "react";
import { Container, Row, Col} from "react-bootstrap"
import "./TurdRow.styles.css"

function TurdRow(){    
    return (
        <Container>
            <Row>
                <Col className="cell m-2"></Col>
                <Col className="cell m-2"></Col>
                <Col className="cell m-2"></Col>
                <Col className="cell m-2"></Col>
                <Col className="cell m-2"></Col>
            </Row>
        </Container>
    )
}

export default TurdRow
import React from "react";
import { Container, Row, Col} from "react-bootstrap"
import "./TurdRow.styles.css"

function TurdRow(props){    
    const turd = props.turd;
    console.log(turd);
    return (
        <Container>
            <Row>
                <Col className="cell m-2">{turd[0]}</Col>
                <Col className="cell m-2">{turd[1]}</Col>
                <Col className="cell m-2">{turd[2]}</Col>
                <Col className="cell m-2">{turd[3]}</Col>
                <Col className="cell m-2">{turd[4]}</Col>
            </Row>
        </Container>
    )
}

export default TurdRow
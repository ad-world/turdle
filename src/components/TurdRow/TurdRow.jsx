import React from "react";
import { Container, Row, Col} from "react-bootstrap"
import "./TurdRow.styles.css"
import TurdImage from "../TurdImage/TurdImage";

function TurdRow(props){    
    const turd = props.turd;

    return (
        <Container>
            <Row>
                <Col className="cell m-2 text-center pt-3"><TurdImage color={turd[0]}></TurdImage></Col>
                <Col className="cell m-2 text-center pt-3"><TurdImage color={turd[1]}></TurdImage></Col>
                <Col className="cell m-2 text-center pt-3"><TurdImage color={turd[2]}></TurdImage></Col>
                <Col className="cell m-2 text-center pt-3"><TurdImage color={turd[3]}></TurdImage></Col>
                <Col className="cell m-2 text-center pt-3"><TurdImage color={turd[4]}></TurdImage></Col>
            </Row>
        </Container>
    )
}

export default TurdRow
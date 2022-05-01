import React, { useEffect } from "react";
import { Container, Row, Col} from "react-bootstrap"
import "./TurdButtonRow.styles.css"
import brownPoop from "../../images/brownpoop.png";
import greenPoop from "../../images/greenpoop.png";
import purplePoop from "../../images/purplepoop.png";
import redPoop from "../../images/redpoop.png";
import whitePoop from "../../images/whitepoop.png"

function TurdButtonRow(props){    

    return (
        <Row className="mx-auto justify-content-center">
            <Col xs={4} md={2} className="text-center">
                <button className="m-1 poop" onClick={() => props.choosePoop("brown")}>
                    <img src={brownPoop} className="image"></img>
                </button>
            </Col>
            <Col xs={4} md={2} className="text-center">
                <button className="m-1 poop" onClick={() => props.choosePoop("green")}>
                    <img src={greenPoop} className="image"></img>
                </button>
            </Col>
            <Col xs={4} md={2} className="text-center">
                <button className="m-1 poop" onClick={() => props.choosePoop("purple")}>
                    <img src={purplePoop} className="image"></img>
                </button></Col>
            <Col xs={4} md={2} className="text-center">
                <button className="m-1 poop" onClick={() => props.choosePoop("red")}>
                   <img src={redPoop} className="image"></img>
                </button></Col>
            <Col xs={4} md={2} className="text-center">
                <button className="m-1 poop" onClick={() => props.choosePoop("white")}>
                    <img src={whitePoop} className="image"></img>
                </button>
            </Col>
        </Row>
    )
}

export default TurdButtonRow
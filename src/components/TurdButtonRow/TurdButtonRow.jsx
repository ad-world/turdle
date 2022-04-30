import React from "react";
import { Container, Row, Col} from "react-bootstrap"
import "./TurdButtonRow.styles.css"
import brownPoop from "../../images/brownpoop.png";
import greenPoop from "../../images/greenpoop.png";
import purplePoop from "../../images/purplepoop.png";
import redPoop from "../../images/redpoop.png";
import whitePoop from "../../images/whitepoop.png"

function TurdButtonRow(){    
    return (
        <Row className="mx-auto justify-content-center gx-0">
            <Col xs={2} className="text-center">
                <button className="m-2 poop">
                    <img src={brownPoop} className="image"></img>
                </button>
            </Col>
            <Col xs={2} className="text-center">
                <button className="m-2 poop">
                    <img src={greenPoop} className="image"></img>
                </button>
            </Col>
            <Col xs={2} className="text-center">
                <button className="m-2 poop">
                    <img src={purplePoop} className="image"></img>
                </button></Col>
            <Col xs={2} className="text-center">
                <button className="m-2 poop">
                   <img src={redPoop} className="image"></img>
                </button></Col>
            <Col xs={2} className="text-center">
                <button className="m-2 poop">
                    <img src={whitePoop} className="image"></img>
                </button>
            </Col>
        </Row>
    )
}

export default TurdButtonRow
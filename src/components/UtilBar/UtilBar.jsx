import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import "./UtilBar.styles.css"

function UtilBar() {
    return(
        <Row className="mx-auto">
            <Col className="mx-auto text-center m-2">
                <button className="btnrow">
                    Try Guess
                </button>
            </Col>
            <Col className="mx-auto text-center m-2"> 
                <button className="btnrow">
                    Delete
                </button>
            </Col>
        </Row>
    )
}

export default UtilBar;
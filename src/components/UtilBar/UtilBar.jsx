import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import "./UtilBar.styles.css"

function UtilBar(props) {
    return(
        <Row className="mx-auto">
            <Col className="mx-auto text-center m-2">
                <button className="btnrow" onClick={() => props.guess()}>
                    Try Guess
                </button>
            </Col>
            <Col className="mx-auto text-center m-2"> 
                <button className="btnrow" onClick={() => props.delete()}>
                    Delete
                </button>
            </Col>
        </Row>
    )
}

export default UtilBar;
import React from "react";
import { Container, Col, Row} from "react-bootstrap"
import TurdButtonRow from "../TurdButtonRow/TurdButtonRow";
import TurdRow from "../TurdRow/TurdRow";

function Grid() {
    return (
        <Container className="justify-content-center">
        <Row>
          <Col xs={0} md={2} lg={3} xl={4}></Col>
          <Col xs={12} md={8} lg={6} xl={4}>
            <TurdRow></TurdRow>
            <TurdRow></TurdRow>
            <TurdRow></TurdRow>
            <TurdRow></TurdRow>
            <TurdRow></TurdRow>
            <TurdRow></TurdRow>
          </Col>
          <Col xs={0} md={2} lg={3} xl={4}></Col>
        </Row>
        <Row>
          <Col xs={0} md={2} lg={3} xl={4}></Col>
          <Col xs={12} md={8} lg={6} xl={4}>
            <TurdButtonRow></TurdButtonRow>
          </Col>
          <Col xs={0} md={2} lg={3} xl={4}></Col>
        </Row>
      </Container>
    )
}

export default Grid
import React from "react";
import { useState, useEffect } from "react";
import { Container, Col, Row} from "react-bootstrap"
import TurdButtonRow from "../TurdButtonRow/TurdButtonRow";
import TurdRow from "../TurdRow/TurdRow";
import UtilBar from "../UtilBar/UtilBar";

function Grid() {
    const [first, setFirst] = useState([]);
    const [second, setSecond] = useState([]);
    const [third, setThird] = useState([]);
    const [fourth, setFourth] = useState([]);
    const [fifth, setFifth] = useState([]);
    const [sixth, setSixth] = useState([]);

    const grid = [first, second, third, fourth, fifth, sixth];
    const setters = [setFirst, setSecond, setThird, setFourth, setFifth, setSixth];
    
    const [currentRow, setCurrentRow] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    function choosePoop(color) {
      if(currentIndex != 5 && currentRow != 6) {
        if(color == "red") {
          setFirst(first => [...first, "red"]);
        } else if(color == "brown") {
          setFirst(first => [...first, "brown"]);
        } else if(color == "white") {
          setFirst(first => [...first, "white"]);
        } else if(color == "purple") {
          setFirst(first => [...first, "purple"]);
        } else if (color == "green") {
          setFirst(first => [...first, "green"]);
        }
        setCurrentIndex(currentIndex + 1);
      } 
    }
    return (
        <Container className="justify-content-center">
        <Row>
          <Col xs={0} md={2} lg={3} xl={4}></Col>
          <Col xs={12} md={8} lg={6} xl={4}>
            <TurdRow turd={first}></TurdRow>
            <TurdRow turd={second}></TurdRow>
            <TurdRow turd={third}></TurdRow>
            <TurdRow turd={fourth}></TurdRow>
            <TurdRow turd={fifth}></TurdRow>
            <TurdRow turd={sixth}></TurdRow>
          </Col>
          <Col xs={0} md={2} lg={3} xl={4}></Col>
        </Row>
        <Row>
          <Col xs={0} md={2} lg={3} xl={4}></Col>
          <Col xs={12} md={8} lg={6} xl={4}>
            <TurdButtonRow choosePoop={choosePoop}></TurdButtonRow>
          </Col>
          <Col xs={0} md={2} lg={3} xl={4}></Col>
        </Row>
        <Row>
          <Col xs={0} md={2} lg={3} xl={4}></Col>
          <Col xs={12} md={8} lg={6} xl={4}>
            <UtilBar></UtilBar>
          </Col>
          <Col xs={0} md={2} lg={3} xl={4}></Col>
        </Row>
      </Container>
    )
}

export default Grid
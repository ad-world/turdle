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
    
    const [currentRowIndex, setCurrentRowIndex] = useState(0);
    const [currentColIndex, setCurrentColIndex] = useState(0);

    const arr = grid[currentRowIndex];
    const setter = setters[currentRowIndex];


    function choosePoop(color) {
      if(currentRowIndex != 6 && currentColIndex != 5) {
        if(color == "red") {
          setter(arr => [...arr, "red"]);
        } else if(color == "brown") {
          setter(arr => [...arr, "brown"]);
        } else if(color == "white") {
          setter(arr => [...arr, "white"]);
        } else if(color == "purple") {
          setter(arr => [...arr, "purple"]);
        } else if (color == "green") {
          setter(arr => [...arr, "green"]);
        }
        setCurrentColIndex(currentColIndex + 1);
      } 
    }

    function makeGuess() {
      if(arr.length == 5) {
        setCurrentRowIndex(currentRowIndex + 1);
        setCurrentColIndex(0);
        arr = grid[currentColIndex];
        setter = setters[currentColIndex];
      } else {
        alert("You need to fill the row before you can guess.")
      }
      
    }

    function deleteGuess() {
      if(arr.length > 0) {
        setter(arr => arr.filter((_, i) => i != arr.length - 1));
        setCurrentColIndex(currentColIndex - 1);
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
            <UtilBar guess={makeGuess} delete={deleteGuess}></UtilBar>
          </Col>
          <Col xs={0} md={2} lg={3} xl={4}></Col>
        </Row>
      </Container>
    )
}

export default Grid
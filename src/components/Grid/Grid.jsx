import React from "react";
import { useState, useEffect } from "react";
import { Container, Col, Row} from "react-bootstrap"
import TurdButtonRow from "../TurdButtonRow/TurdButtonRow";
import TurdRow from "../TurdRow/TurdRow";
import UtilBar from "../UtilBar/UtilBar";
import { updateSessionRows, getSessionRows, setSessionPlayed, checkSessionPlayed } from "../../util/useSession";

function Grid(props) {
    const [first, setFirst] = useState([]);
    const [second, setSecond] = useState([]);
    const [third, setThird] = useState([]);
    const [fourth, setFourth] = useState([]);

    const guess = props.guess;
    const [played, setPlayed] = useState(false);
    
    const [lastMatch, setLastMatch] = useState([]);
    const [matches, setMatches] = useState([]);
    const [guesses, setGuesses] = useState([]);

    const grid = [first, second, third, fourth];
    const setters = [setFirst, setSecond, setThird, setFourth];
    
    const [currentRowIndex, setCurrentRowIndex] = useState(0);
    const [currentColIndex, setCurrentColIndex] = useState(0);

    var arr = grid[currentRowIndex];
    var setter = setters[currentRowIndex];

    useEffect(() => {
      const session_rows = getSessionRows();
      setPlayed(checkSessionPlayed());

      if(session_rows) {
        setGuesses(session_rows.rows);    
        setFirst(session_rows.rows.length >= 1 ? session_rows.rows[0] : []);
        setSecond(session_rows.rows.length >= 2 ? session_rows.rows[1] : []);
        setThird(session_rows.rows.length >= 3 ? session_rows.rows[2] : []);
        setFourth(session_rows.rows.length >= 4 ? session_rows.rows[3] : []);

        setCurrentRowIndex(session_rows.rows.length);    
      }

  
      console.log(guesses);
    }, []);
    


    function choosePoop(color) {
      if(currentRowIndex != 4 && currentColIndex != 5) {
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
        updateSessionRows(arr);
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

    useEffect(() => {
      const sum = lastMatch.reduce((prev, current) => prev + current, 0);
      let arr = matches;
      arr.push(lastMatch);
      setMatches(arr);


      if(sum == 10) {
        arr = arr.filter(item => item.length != 0);
        props.rowSetter(arr);
        props.win(currentRowIndex);
        setSessionPlayed();
      } else if(currentRowIndex == 4) {
        props.loss(true);
        setSessionPlayed();
      }

      
    }, [lastMatch])

    return (
        <Container className="justify-content-center">
        <Row>
          <Col xs={0} md={2} lg={3} xl={3}>
            <div style={{color: 'white'}}>
              <h1>
                Welcome To Turdle
              </h1>
              <p>You have four attempts to guess a length five sequence of different colored turds. 
                Yellow means the turd is in the sequence but the wrong location, green means 
                it is in the sequence in the correct location. Good luck!</p>
            </div>
          </Col>
          <Col xs={12} md={8} lg={6} xl={6}>
            <TurdRow turd={first} guess={guess} row={0} guessed={currentRowIndex > 0 ? true : false} set={setLastMatch}></TurdRow>
            <TurdRow turd={second} guess={guess} row={1} guessed={currentRowIndex > 1 ? true : false} set={setLastMatch}></TurdRow>
            <TurdRow turd={third} guess={guess} row={2} guessed={currentRowIndex > 2 ? true : false} set={setLastMatch}></TurdRow>
            <TurdRow turd={fourth} guess={guess} row={3} guessed={currentRowIndex > 3 ? true : false} set={setLastMatch}></TurdRow>
          </Col>
          <Col xs={0} md={2} lg={3} xl={3}></Col>
        </Row>
        {!played && 
        <Row>
          <Col xs={0} md={2} lg={3} xl={4}></Col>
          <Col xs={12} md={8} lg={6} xl={4}>
            <TurdButtonRow choosePoop={choosePoop}></TurdButtonRow>
          </Col>
          <Col xs={0} md={2} lg={3} xl={4}></Col>
        </Row>
        }
        {!played &&
        <Row>
          <Col xs={0} md={2} lg={3} xl={4}></Col>
          <Col xs={12} md={8} lg={6} xl={4}>
            <UtilBar guess={makeGuess} delete={deleteGuess}></UtilBar>
          </Col>
          <Col xs={0} md={2} lg={3} xl={4}></Col>
        </Row> 
        }
      </Container>
    )
}

export default Grid
import React, { useState, useEffect } from "react";
import { Container, Row, Col} from "react-bootstrap"
import "./TurdRow.styles.css"
import TurdImage from "../TurdImage/TurdImage";
import useMatch from "../../util/useMatch";

function TurdRow(props){    
    const { turd, guess, row, guessed, set} = props;

    const styles = {
        default: "#1c1d1f",
        yellow: "#fae100",
        green: "#00fa2e"
    }

    

    const updateColor = (i, color) => {
        if(i == 0) {
            document.getElementById(`cell1_${row}`).style.backgroundColor = color;
        } else if(i == 1) {
            document.getElementById(`cell2_${row}`).style.backgroundColor = color;
        } else if(i == 2) {
            document.getElementById(`cell3_${row}`).style.backgroundColor = color;
        } else if(i == 3) {
            document.getElementById(`cell4_${row}`).style.backgroundColor = color;
        } else if(i == 4) {
            document.getElementById(`cell5_${row}`).style.backgroundColor = color;
        }
    }

    useEffect(() => {
        if(guessed) {
            if(turd.length == 5) {
                const arr = useMatch(turd, guess);
                for(let i = 0; i < arr.length; i++) {
                    if(arr[i] == 0) {
                        updateColor(i, styles.default);
                    } else if(arr[i] == 1) {
                        updateColor(i, styles.yellow);
                    } else if(arr[i] == 2) {
                        updateColor(i, styles.green);
                    } else {
                        console.log('err');
                    }
                }
                set(arr);
            }
        }
    }, [guessed]);


   

    return (
        <Container>
            <Row>
                <Col id={`cell1_${row}`} className="cell m-2 text-center pt-3"><TurdImage color={turd[0]}></TurdImage></Col>
                <Col id={`cell2_${row}`} className="cell m-2 text-center pt-3"><TurdImage color={turd[1]}></TurdImage></Col>
                <Col id={`cell3_${row}`} className="cell m-2 text-center pt-3"><TurdImage color={turd[2]}></TurdImage></Col>
                <Col id={`cell4_${row}`} className="cell m-2 text-center pt-3"><TurdImage color={turd[3]}></TurdImage></Col>
                <Col id={`cell5_${row}`} className="cell m-2 text-center pt-3"><TurdImage color={turd[4]}></TurdImage></Col>
            </Row>
        </Container>
    )
}

export default TurdRow
import React, {useEffect, useState} from "react";
import {Button, Modal} from "react-bootstrap";

function WinModal({day, attemps, win, loss}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(loss);
    useEffect(() => {
        if(win || loss) {
            console.log(win);
            console.log(loss);
            setTimeout(() => handleShow(), 300);
        } 
    }, [win, loss]);

    if(win) {
        return (
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton style={{backgroundColor: '#343438', color: 'white'}}>
                <Modal.Title>Turdle Day {day}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{backgroundColor: '#343438', color: 'white'}}>
                Congratulations! You solved today's Turdle in {attemps} attempt(s)!
                Come back tomorrow for a new Turdle! 💩
                </Modal.Body>
            </Modal>
        )
    } else if(loss) {
        return (
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton style={{backgroundColor: '#343438', color: 'white'}}>
                <Modal.Title>Turdle Day {day}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{backgroundColor: '#343438', color: 'white'}}>
                Unfortunately you could not solve today's wordle. Better luck tomorrow!
                </Modal.Body>
            </Modal>
        )
    }
}

export default WinModal

  
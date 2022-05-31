import React, {useEffect, useState} from "react";
import {Button, Modal} from "react-bootstrap";

function WinModal({day, attemps, win, loss, message}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        if(win || loss) {
            setTimeout(() => handleShow(), 300);
        } 
    }, [win, loss]);

    function handleClick() {
        if(navigator.share) {
            navigator.share(
                {   
                    text: message,
                    url: "https://turdle-9a8d2.web.app/"
                }
                );
        } else if(navigator.clipboard) {
            const copyText = message + "\n\nhttps://turdle-9a8d2.web.app/";
            navigator.clipboard.writeText(copyText);
        } {
            return;
        }
    }

    if(win) {
        return (
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton style={{backgroundColor: '#343438', color: 'white'}}>
                <Modal.Title>Turdle Day {day} 💩</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{backgroundColor: '#343438', color: 'white'}}>
                Congratulations! You solved today's Turdle in {attemps} attempt(s)!
                Come back tomorrow for a new Turdle! 💩
                </Modal.Body>
                
                <Modal.Footer style={{backgroundColor: '#343438', color: 'white'}}>
                {(navigator.share || navigator.clipboard) && 
                    <Button variant="dark" onClick={handleClick}>{navigator.share ? 'Share Score' : 'Copy Score to Clipboard'}</Button>
                }
                </Modal.Footer>
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
                <Modal.Title>Turdle Day {day} 💩</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{backgroundColor: '#343438', color: 'white'}}>
                Unfortunately you could not solve today's wordle. Better luck tomorrow!
                </Modal.Body>
                {(navigator.share || navigator.clipboard) && 
                <Modal.Footer style={{backgroundColor: '#343438', color: 'white'}}>
                    <Button variant="dark" onClick={handleClick}>{navigator.share ? 'Share Score' : 'Copy Score to Clipboard'}</Button>
                </Modal.Footer>}
            </Modal>
        )
    }
}

export default WinModal

  
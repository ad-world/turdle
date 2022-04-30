import React from "react";
import { Container, Row, Col} from "react-bootstrap"
import "./Header.styles.css"

function Header() {
    return (
        <Container fluid class="header-container justify-content-center">
            <h1 class="text-center header">Turdle</h1>
            <hr></hr>
        </Container>
    )
}

export default Header
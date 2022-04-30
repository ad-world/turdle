import { useState } from 'react'
import './App.css'
import "react-bootstrap"
import TurdRow from './components/TurdRow'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Container className="justify-content-center">
        <Row>
          <Col xs={3}></Col>
          <Col xs={6}>
            <TurdRow></TurdRow>
            <TurdRow></TurdRow>
            <TurdRow></TurdRow>
            <TurdRow></TurdRow>
            <TurdRow></TurdRow>
            <TurdRow></TurdRow>
          </Col>
          <Col xs={3}></Col>
        </Row>
      </Container>
    </div>
  )
}

export default App

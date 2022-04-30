import { useState } from 'react'
import './App.css'
import "react-bootstrap"
import TurdRow from './components/TurdRow/TurdRow'
import Header from './components/Header/Header'
import TurdButtonRow from './components/TurdButtonRow/TurdButtonRow'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Header></Header>
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
    </div>
  )
}

export default App

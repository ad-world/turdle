import { useState } from 'react'
import './App.css'
import "react-bootstrap"
import Header from './components/Header/Header'
import Grid from "./components/Grid/Grid";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Grid></Grid>
    </div>
  )
}

export default App

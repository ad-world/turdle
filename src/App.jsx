import { useState } from 'react'
import './App.css'
import "react-bootstrap"
import Header from './components/Header/Header'
import Grid from "./components/Grid/Grid";
import 'bootstrap/dist/css/bootstrap.min.css';
import useHash from './util/useHash';
import moment from "moment"

function App() {

  const startDate = new Date(2022, 3, 29);
  const currentDate = new Date();

  const formattedDate = moment().format('LL');

  const guess = useHash(formattedDate);
  
  const day = currentDate.getDate() - startDate.getDate();

  return (
    <div className="App">
      <Header></Header>
      <Grid guess={guess}></Grid>
    </div>
  )
}

export default App

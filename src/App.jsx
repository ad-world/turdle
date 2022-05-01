import { useState } from 'react'
import './App.css'
import "react-bootstrap"
import Header from './components/Header/Header'
import Grid from "./components/Grid/Grid";
import WinModal from './components/WinModal/WinModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import useHash from './util/useHash';
import moment from "moment"

function App() {
  const [win, setWin] = useState(false);
  const [winRow, setWinRow] = useState(0);

  const [loss, setLoss] = useState(false);

  const startDate = new Date(2022, 3, 29);
  const currentDate = new Date();

  const formattedDate = moment().format('LL');

  const guess = useHash(formattedDate);
  
  const diff = currentDate.getTime() - startDate.getTime();
  const day = Math.ceil(diff / (1000 * 3600 * 24));

  const winner = (row) => {
    setWin(true);
    setWinRow(row);
  }


  return (
    <div className="App">
      <Header></Header>
      <Grid guess={guess} win={winner} loss={setLoss}></Grid>
      { (win || loss) && <WinModal attemps={winRow} day={day} win={win} loss={loss}></WinModal>}
    </div>
  )
}

export default App

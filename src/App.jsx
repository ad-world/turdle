import { useEffect, useState } from 'react'
import './App.css'
import "react-bootstrap"
import Header from './components/Header/Header'
import Grid from "./components/Grid/Grid";
import WinModal from './components/WinModal/WinModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import useHash from './util/useHash';
import useShare from './util/useShare';
import moment from "moment"
import { updateSessionRows, getSessionRows, setSessionPlayed, checkSessionPlayed } from "./util/useSession";

function App() {
  const [win, setWin] = useState(false);
  const [winRow, setWinRow] = useState(0);

  const [loss, setLoss] = useState(false);

  const [rows, setRows] = useState([]);
  const startDate = new Date(2022, 3, 29);
  const currentDate = new Date();

  const formattedDate = moment().format('LL');

  const guess = useHash(formattedDate);
  
  const diff = currentDate.getTime() - startDate.getTime();
  const day = Math.ceil(diff / (1000 * 3600 * 24));

  const [message, setMessage] = useState('');

  useEffect(() => {
    if(checkSessionPlayed()) {
      const item = getSessionRows();
      setMessage(useShare(item.matches, day, win));
    } else {
      setMessage(useShare(rows, day, win));
    }
  }, [rows]);

  // const message = useShare(rows, day, win);

  const winner = (row) => {
    setWin(true);
    setWinRow(row);
  }


  return (
    <div className="App">
      <Header></Header>
      <Grid guess={guess} win={winner} loss={setLoss} rowSetter={setRows}></Grid>
      { (win || loss) && <WinModal attemps={winRow} day={day} win={win} loss={loss} message={message}></WinModal>}
    </div>
  )
}

export default App

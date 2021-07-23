import { useState } from 'react';
import './App.css';
import Board from './Components/Board';
import Footer from './Components/Footer';


function App() {

  const [boardState, setBoardState] = useState([2,2,2,2,2,2,2,2,2]);
  const [currentPlayer, setCurrentPlayer] = useState(0);

  const markSpace = (id, e) => {
    //code to mark space as X or O
    if (currentPlayer === 0) {
      e.target.innerHTML = 'X';
    } else if (currentPlayer === 1) {
      e.target.innerHTML = 'O'
    }
    console.log(id);
    setBoardState(boardState[id - 1] = currentPlayer);
    console.log(boardState);
    setCurrentPlayer((currentPlayer + 1) % 2);    
    console.log(`currentPlayer: ` + currentPlayer);
  }

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Board markSpace={markSpace}/>
      <Footer player={currentPlayer} />
    </div>
  );
}

export default App;

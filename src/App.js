import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Board from './Components/Board';
import Footer from './Components/Footer';
import Winner from './Components/Winner';


function App() {

  const [boardState, setBoardState] = useState([2,2,2,2,2,2,2,2,2]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [winner, setWinner] = useState("There isn't a winner yet.")

  const markSpace = (id, e) => {
    console.log(e.target.innerHTML);
    if(e.target.innerHTML === '<p></p>'){
      console.log("It's blank, Jim!");
    } else {
      alert('You cannot move here, this spot is taken by another player. Try another space.');
      return;
    }
    e.preventDefault();
    //code to mark space as X or O
    if (currentPlayer === 0) {
      e.target.innerHTML = 'X';
    } else if (currentPlayer === 1) {
      e.target.innerHTML = 'O'
    }
    console.log(id);
    let holdState = [...boardState];
    holdState[(id)] = currentPlayer;
    console.log(holdState);
    setBoardState([...holdState]);
    holdState = [];
    setCurrentPlayer((currentPlayer + 1) % 2);
  };

  const newGame = () => {
    window.location.reload();
  }

  return (
    <div className="App">
      <Header />
      <Board markSpace={markSpace} />
      <Footer player={currentPlayer} newGame={newGame} />
      <Winner boardState={boardState} winner={winner} />
    </div>
  );
}

export default App;

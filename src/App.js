import { useState } from 'react';
import './App.css';
import Board from './Components/Board';
import Footer from './Components/Footer';


function App() {

  const [boardState, setBoardState] = useState([2,2,2,2,2,2,2,2,2]);
  const [currentPlayer, setCurrentPlayer] = useState(0);

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
    holdState[(id-1)] = currentPlayer;
    console.log(holdState);
    setBoardState([...holdState]);
    holdState = [];
    setCurrentPlayer((currentPlayer + 1) % 2);
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Board markSpace={markSpace}/>
      <Footer player={currentPlayer} />
    </div>
  );
}

export default App;

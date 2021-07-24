import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Board from './Components/Board';
import Footer from './Components/Footer';


function App() {

  const [boardState, setBoardState] = useState([2,2,2,2,2,2,2,2,2]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [winner, setWinner] = useState("There isn't a winner yet.")
  const [moveCount, setMoveCount] = useState(0);

  const markSpace = (id, e) => {
    //prevents player from overwriting another player's tile:
    if(e.target.innerHTML === '<p></p>'){
      //console.log("It's blank, Jim!");
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
    //set move counter
    let newMCount = moveCount + 1;
    setMoveCount(newMCount);
    console.log('moves: ' + newMCount);
    console.log('id: ' + id);
    //set boardState with new player placement
    let holdState = [...boardState];
    holdState[(id)] = currentPlayer;
    setBoardState([...holdState]);
    //check for a winner, using holdState since boardState isn't fully updated when triggering func
    checkForWin(holdState);
    //set current player
    setCurrentPlayer((currentPlayer + 1) % 2);
  };

  //array showing all of the winning move combinations a player could make
  const winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4 ,8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]]

  //function that compares actual moves to win conditions to see if a player won.
  const checkForWin = (boardState) => {
    if(moveCount < 4) return;

    winConditions.forEach(array => {
      console.log(boardState[(array[0])] + ' ' + boardState[(array[1])] + ' ' + boardState[(array[2])]);
      if(boardState[(array[0])] === boardState[(array[1])] && boardState[(array[1])] === boardState[(array[2])]) {
        if(boardState[array[0]] === 0){
          setWinner('Player X wins!');
        } else if (boardState[array[0]] === 1){
          setWinner('Player O wins!');
        }
      }
    })
  }

  const newGame = () => {
    window.location.reload();
  }

  return (
    <div className="App">
      <Header />
      <Board markSpace={markSpace} />
      <Footer player={currentPlayer} newGame={newGame} winner={winner}/>
    </div>
  );
}

export default App;

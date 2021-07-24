const Winner = ({boardState, winner}) => {

  const winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4 ,8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]]

  const checkForWin = (boardState) => {
    if(moveCount < 5) return;

    winConditions.forEach(array => {
      if(boardState[(array[0])] === boardState[(array[1])] && boardState[(array[1])] === boardState[(array[2])]) {
        if(array[0] === 0){
          setWinner('Player X wins!');
        } else if (array[0] === 1){
          setWinner('Player O wins!');
        }
      }
    })

  }

  return (
    <div>
      <p>{winner}</p>
    </div>
  )
}

export default Winner

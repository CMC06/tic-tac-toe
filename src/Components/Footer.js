const Footer = ({ player, newGame, winner, moveCount }) => {
  return (
    <footer className="footer">
      { winner === "There isn't a winner yet." ? <p>Player {player ? 'O' : 'X'}, it's your turn!</p> : null}
      { winner === "There isn't a winner yet." ? <p className='smallP'>Can you mark 3 spaces in a row? The first player to mark 3 spaces in a row, wins!</p> : null}
      <p>{winner}</p>
      <button onClick={newGame}>New Game</button>
    </footer>
  )
}

export default Footer

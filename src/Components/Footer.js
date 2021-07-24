const Footer = ({ player, newGame, winner }) => {
  return (
    <footer className="footer">
      <p>Player {player ? 'O' : 'X'}, it's your turn!</p>
      <p className='smallP'>Can you mark 3 spaces in a row? The first player to mark 3 spaces in a row, wins!</p>
      <button onClick={newGame}>New Game</button>
      <p>{winner}</p>
    </footer>
  )
}

export default Footer

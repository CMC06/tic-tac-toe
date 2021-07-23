const Footer = ({player, newGame}) => {
  return (
    <footer className="footer">
      <p>Player {player ? 'O' : 'X'}, it's your turn!</p>
      <p className='smallP'>Can you mark 3 spaces in a row? The first player to mark 3 spaces in a row, wins!</p>
      <button onClick={newGame}>New Game</button>
    </footer>
  )
}

export default Footer

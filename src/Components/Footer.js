const Footer = ({player}) => {
  return (
    <footer className="footer">
      <p>It's currently Player {player ? 'O' : 'X'}'s turn!</p>
    </footer>
  )
}

export default Footer

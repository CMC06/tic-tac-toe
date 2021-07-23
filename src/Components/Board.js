import Square from './Square';

const Board = ({markSpace}) => {
  return (
    <div className='board'>
      <div className='row'>
        <Square id={1} markSpace={markSpace}/>
        <Square id={4} markSpace={markSpace}/>
        <Square id={7} markSpace={markSpace}/>
      </div>
      <div className='gutter'></div>
      <div className='row'>
        <Square id={2} markSpace={markSpace}/>
        <Square id={5} markSpace={markSpace}/>
        <Square id={8} markSpace={markSpace}/>
      </div>
      <div className='gutter'></div>
      <div className='row'>
        <Square id={3} markSpace={markSpace}/>
        <Square id={6} markSpace={markSpace}/>
        <Square id={9} markSpace={markSpace}/>
      </div>
      <div className='gutter'></div>
    </div>
  )
}

export default Board

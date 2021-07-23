import SqButton from './SqButton'

const Square = ({markSpace, id}) => {
  return (
    <div className="square">
      <SqButton markSpace={markSpace} id={id}/>
    </div>
  )
}

export default Square

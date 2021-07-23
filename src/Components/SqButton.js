const SqButton = ({markSpace, id}) => {

  return (
    <button className="sqButton" onClick={(e) => markSpace(id, e)}>
      <p>{''}</p>
    </button>
  )
}

export default SqButton

interface Props {
  iconName: string
  type: string
}

const Img = ({ iconName, type }: Props) => {
  return (
    <>
      <div className="icon">
        <img src={`./icons/${iconName}.${type}`} alt={iconName} />
      </div>
    </>
  )
}

export default Img

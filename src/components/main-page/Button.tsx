import "./_button.scss"

// Possible TO-DO: maybe add more values for component to make it more usable
interface Props {
  value?: string
  click?: React.MouseEventHandler<HTMLButtonElement>
  hint?: boolean
}

const Button = ({ value, click, hint }: Props) => {
  return (
    <>
      <button className={`button ${hint ? "set-to-recommended" : null}`} onClick={click}>
        {value}
      </button>
    </>
  )
}

export default Button

import "./_button.scss"

// Possible TO-DO: maybe add more values for component to make it more usable
interface Props {
  value?: string
  click?: React.MouseEventHandler<HTMLButtonElement>
  hint?: boolean
  href?: string
}

const Button = ({ value, click, hint, href }: Props) => {
  return (
    <>
      <a href={href ? href : "#"}>
        <button className={`button ${hint ? "set-to-recommended" : ""}`} onClick={click}>
          {value}
        </button>
      </a>
    </>
  )
}

export default Button

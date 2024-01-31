import Img from "../Img.tsx"
interface Props {
  iconName: string
  iconType: string
  children: string
}

const Greeting = ({ iconName, iconType, children }: Props) => {
  return (
    <>
      <div className="footer-icon-group">
        <Img iconName={iconName} type={iconType} />
        <label>{children}</label>
      </div>
    </>
  )
}

export default Greeting

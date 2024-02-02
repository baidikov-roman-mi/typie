import "./_header.scss"
import Tab from "./Tab.tsx"
import Img from "../Img.tsx"

interface Props {
  device: string
}

const Header = ({ device }: Props) => {
  return (
    <header className="top-page-header">
      <div className="logo-wrapper">
        <Img iconName="logo" type="svg" />
      </div>
      <div className="tools-container">
        <Tab device={device} tabTitle="test" />
        <Tab device={device} tabTitle="lessons" />
        <Tab device={device} tabTitle="leaders" />
        <Tab device={device} tabTitle="settings" />
        <Tab device={device} tabTitle="login" />
      </div>
    </header>
  )
}

export default Header

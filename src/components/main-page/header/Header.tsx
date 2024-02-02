import "./_header.scss"
import Tab from "./Tab.tsx"
import Logo from "./Logo.tsx"

interface Props {
  device: string
}

const Header = ({ device }: Props) => {
  return (
    <header className="top-page-header">
      <Logo homePageLink="/" />
      <div className="tools-container">
        <Tab device={device} tabContent="test" />
        <Tab device={device} tabContent="lessons" />
        <Tab device={device} tabContent="leaders" />
        <Tab device={device} tabContent="settings" />
        <Tab device={device} tabContent="login" />
      </div>
    </header>
  )
}

export default Header

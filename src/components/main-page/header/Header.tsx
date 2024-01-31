import "./_header.scss"
import Tab from "./Tab.tsx"

export default function Header() {
  return (
    <header className="top-page-header">
      <div className="logo-wrapper">
        <h2 className="logo">Typie</h2>
      </div>
      <div className="tools-container">
        <Tab tabTitle="test" />
        <Tab tabTitle="lessons" />
        <Tab tabTitle="leaders" />
        <Tab tabTitle="settings" />
        <Tab tabTitle="login" />
      </div>
    </header>
  )
}

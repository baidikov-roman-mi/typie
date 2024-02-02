import "./_logo.scss"

import Img from "../Img"

interface Props {
  homePageLink?: string
}

const Logo = ({ homePageLink }: Props) => {
  return (
    <>
      <div className="logo-wrapper">
        <a href={homePageLink}>
          <Img iconName="logo" type="svg" />
        </a>
      </div>
    </>
  )
}
export default Logo

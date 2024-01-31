import "./_footer.scss"
import FooterIconGroup from "./FooterIconGroup.tsx"
interface Props {}

const Footer = ({}: Props) => {
  return (
    // TO-DO: refactor IconGroup components into something more compact
    <>
      <footer className="footer">
        <FooterIconGroup iconName="github" iconType="svg">
          Github
        </FooterIconGroup>
        <FooterIconGroup iconName="feedback" iconType="svg">
          Feedback
        </FooterIconGroup>
        <FooterIconGroup iconName="support" iconType="svg">
          Support
        </FooterIconGroup>
        <FooterIconGroup iconName="info" iconType="svg">
          Info
        </FooterIconGroup>
      </footer>
    </>
  )
}

export default Footer

import "./_footer.scss"
import FooterIconGroup from "./FooterIconGroup.tsx"
interface Props {}

const Footer = ({}: Props) => {
  const iconNames = ["github", "feedback", "support", "FAQ"]
  return (
    <footer className="footer">
      {iconNames.map((iconName) => (
        <FooterIconGroup key={iconName} iconName={iconName} iconType="svg">
          {iconName.charAt(0).toUpperCase() + iconName.slice(1)}
        </FooterIconGroup>
      ))}
    </footer>
  )
}

export default Footer

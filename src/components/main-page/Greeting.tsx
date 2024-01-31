import './_greeting.scss'

interface Props {
  userName?: string
}

const Greeting = ({ userName }:Props) => {
  return (
    <>
      <section className="greeting">
        <h1 className="greeting-title">Welcome to the Typie{userName ? `, ${userName}` : ""}!</h1>
        <p className="greeting-description">
          Unleash your typing prowess with our web application and become a maestro of the keyboard!
        </p>
      </section>
    </>
  )
}

export default Greeting

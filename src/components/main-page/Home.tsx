import Audio from "@mainPage/AudioPlayer"
import Greeting from "@mainPage/Greeting"
import Footer from "@mainPage/footer/Footer"
import Button from "@mainPage/Button"

const Home = () => {
  return (
    <>
      <Greeting userName="User" />
      <Button value="Start Test!" hint={true} href="/test" />
      <Footer />
      {/* TO-DO: Create a banner for autoplay */}
      <Audio loop={true} autoplay={false}></Audio>
    </>
  )
}
export default Home

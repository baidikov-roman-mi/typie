/* UseScreen - custom hook for updating current screen width  */
import useScreenWidth from "@hooks/useScreenWidth"

import Header from "@mainPageComponent/header/Header"
import Audio from "@mainPageComponent/AudioPlayer"
import Greeting from "@mainPageComponent/Greeting"
import Footer from "@mainPageComponent/footer/Footer"
import Button from "@mainPageComponent/Button"

import "@styling/App.scss"

const App = () => {
  // Set up current screen size
  const screenSize = useScreenWidth()
  const isPhone = screenSize < 768
  const isPC = screenSize >= 1024

  // Set up device name for props instead of calling useScreenWidth in every file
  const device = isPhone ? "phone" : isPC ? "pc" : "tablet"

  return (
    <>
      <Header device={device} />
      <Greeting userName="User" />
      <Button value="Start Test!" hint={true} />
      <Footer />
      {/* TO-DO: Create a banner for autoplay */}
      <Audio loop={true} autoplay={false}></Audio>
    </>
  )
}

export default App

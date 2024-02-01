/* UseScreen - custom hook for updating current screen width  */
import useScreenWidth from "./hooks/useScreenWidth.tsx"

import Header from "./components/main-page/header/Header"
import Audio from "./components/main-page/AudioPlayer"
import Greeting from "./components/main-page/Greeting"
import Message from "./components/main-page/Message"
import Footer from "./components/main-page/footer/Footer"
import Button from "./components/main-page/Button"

import "./styling/App.scss"

function App() {
  // Set up current screen size
  const screenSize = useScreenWidth()
  console.log('screenSize :>> ', screenSize);

  return (
    <>
      <Message resolution={screenSize} />
      <Header />
      <Greeting userName="User" />
      <Button value="Start Test!" hint={true} />
      <Footer />
      {/* TO-DO: Create a banner for autoplay */}
      {/* I disable playing by default, if you don't mind */}
      <Audio loop={true} autoplay={false}></Audio>
    </>
  )
}

export default App

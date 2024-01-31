import useScreen from "./hooks/useScreen.tsx"
// UseScreen - custom hook

import Header from "./components/main-page/header/Header"
import Audio from "./components/main-page/AudioPlayer"
import Greeting from "./components/main-page/Greeting"
import Message from "./components/main-page/Message"
import Footer from "./components/main-page/footer/Footer"
import Button from "./components/main-page/Button"

import "./styling/App.scss"

function App() {
  // Set up current screen size
  let screenSize = useScreen().width
  console.log('screenSize :>> ', screenSize);

  return (
    <>
      <Message resolution={screenSize} />
      <Header />
      <Greeting userName="User" />
      <Button value="Start Test!" hint={true} />
      <Footer />
      {/* TO-DO: Create a banner for autoplay */}
      <Audio loop={true} autoplay={true}></Audio>
    </>
  )
}

export default App

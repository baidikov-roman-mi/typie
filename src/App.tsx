// importing Router for routes
import { BrowserRouter as Router } from "react-router-dom"
import SetupRouter from "@routes/SetupRouter"
// importing optimizing tools for react
import { Suspense } from "react"

// importing "all pages" component
import Header from "@mainPage/header/Header"

/* UseScreenWidth - custom hook for updating current screen width  */
import useScreenWidth from "@hooks/useScreenWidth"

import "@styling/App.scss"

const App = () => {
  // Set up current screen size
  const screenSize = useScreenWidth()
  const isPhone = screenSize < 768
  const isPC = screenSize >= 1024

  // Set up device name for props
  const device = isPhone ? "phone" : isPC ? "pc" : "tablet"

  return (
    <>
      <Router>
        <Header device={device} />
        <Suspense fallback={<h1>Loading...</h1>}>
          <SetupRouter />
        </Suspense>
      </Router>
    </>
  )
}

export default App

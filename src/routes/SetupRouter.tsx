// import useRoutes to create routes
import { useRoutes } from "react-router-dom"

// import components
import Home from "@mainPage/Home"
import About from "@aboutPage/About"
import Test from "@testPage/Test"
import Lessons from "@lessonsPage/Lessons"
import Leaders from "@leadersPage/Leaders"
import Settings from "@settingsPage/Settings"
import Login from "@loginPage/Login"

// setup our routes
const SetupRouter = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "about", element: <About /> },
    { path: "test", element: <Test /> },
    { path: "lessons", element: <Lessons /> },
    { path: "leaders", element: <Leaders /> },
    { path: "settings", element: <Settings /> },
    { path: "login", element: <Login /> }
  ])
  return routes
}

export default SetupRouter

// importing react otimizing tools
import { lazy } from "react"
// import useRoutes to create routes
import { useRoutes } from "react-router-dom"

// import components
const Home = lazy(() => import("@mainPage/Home"))
const About = lazy(() => import("@aboutPage/About"))
const Test = lazy(() => import("@testPage/Test"))
const Lessons = lazy(() => import("@lessonsPage/Lessons"))
const Leaders = lazy(() => import("@leadersPage/Leaders"))
const Settings = lazy(() => import("@settingsPage/Settings"))
const Login = lazy(() => import("@loginPage/Login"))

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

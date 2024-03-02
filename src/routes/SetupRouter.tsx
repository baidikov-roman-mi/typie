// import useRoutes to create routes
import { lazy } from "react"
import { useRoutes } from "react-router-dom"

// import components
const Home = lazy(() => import("@mainPage/Home"))
const About = lazy(() => import("@views/About"))
const Test = lazy(() => import("@views/Test"))
const Lessons = lazy(() => import("@views/Lessons"))
const Leaders = lazy(() => import("@views/Leaders"))
const Settings = lazy(() => import("@views/Settings"))
const Login = lazy(() => import("@views/Login"))

// setup our routes
const SetupRouter = () => {
  const routes = useRoutes([
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

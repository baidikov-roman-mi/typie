// importing custom hook for lazy load (faster than common imports)
import useLazyLoad from "@hooks/useLazyLoad"

import { useRoutes } from "react-router-dom"

// Import an object of routes
import routesObject from "./routes"

// creating routes object
const routes = Object.fromEntries(
  Object.entries(routesObject).map(([name, path]) => [
    name,
    useLazyLoad({ path, namedExport: null })
  ])
)

const SetupRouter = () => {
  let createRoutes = useRoutes([
    { path: "/", element: <routes.Home /> },
    { path: "about", element: <routes.About /> },
    { path: "test", element: <routes.Test /> },
    { path: "lessons", element: <routes.Lessons /> },
    { path: "leaders", element: <routes.Leaders /> },
    { path: "settings", element: <routes.Settings /> },
    { path: "login", element: <routes.Login /> }
  ])
  return createRoutes
}

export default SetupRouter

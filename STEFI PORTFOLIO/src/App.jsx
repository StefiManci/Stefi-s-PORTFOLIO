import {createBrowserRouter ,RouterProvider} from "react-router-dom"

import './App.css'
import Navigation from "./paths/Navigation"
import Home from "./paths/Home"
import About from "./paths/About"
import Learning from "./paths/Learning"
import Contact from "./paths/Contact"
import Cv from "./paths/Cv"
import Projects from "./paths/Projects"


const router= createBrowserRouter([
  {
    path:"/",
    element:<Navigation></Navigation>,
    children:[
      { 
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/About",
        element:<About></About>
      },
      {
        path:"/Learning",
        element:<Learning></Learning>
      },
      {
        path:"/CV",
        element:<Cv></Cv>
      },
      {
        path:"/Contact",
        element:<Contact></Contact>
      },
      {
        path:"/Projects",
        element:<Projects></Projects>
      },
    
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App

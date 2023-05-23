import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import ContatosContextProvider from "./contexts/ContatosContextProvider.jsx"
import Home from "./components/Home.jsx"
import Novo from "./components/Novo.jsx"
import Err from "./components/Err"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Err />,
  },
  {
    path: "/novo",
    element: <Novo />,
    errorElement: <Err />,
  },

])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContatosContextProvider>
      <RouterProvider router={router} />
    </ContatosContextProvider>
  </React.StrictMode>,
)

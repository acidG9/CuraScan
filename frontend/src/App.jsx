import Navbar from "./assets/Navbar"
import Home from "./assets/Home"
import Footer from "./assets/Footer"
import Prediction from "./assets/Prediction"
import Login from "./assets/Login"
import { Routes, Route, Navigate } from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/prediction"
          element={
            <>
              <Navbar />
              <Prediction />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  )
}

export default App

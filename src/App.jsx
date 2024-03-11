import { Route, Routes } from "react-router-dom"
import Header from "./components/common/Header"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Footer from "./components/common/Footer"


function App() {


  return (
    <>
     <Header/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App

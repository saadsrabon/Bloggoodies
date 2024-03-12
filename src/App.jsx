import { Route, Routes } from "react-router-dom"
import Header from "./components/common/Header"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Footer from "./components/common/Footer"
import CreateBlog from "./pages/CreateBlog"
import { useEffect } from "react"
import { useAuth } from "./hooks/useAuth"
import SingleBlog from "./pages/SingleBlog"


function App() {
  

  return (
    <>
     <Header/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create-blog" element={<CreateBlog />} />
      <Route path="/blogdetails/:id" element={<SingleBlog />} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App

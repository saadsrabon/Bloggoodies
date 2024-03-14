import { Route, Routes } from "react-router-dom"
import Header from "./components/common/Header"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Footer from "./components/common/Footer"
import CreateBlog from "./pages/CreateBlog"
import SingleBlog from "./pages/SingleBlog"
import Profile from "./pages/Profile"
import PrivateRoute from "./privateRoute/PrivateRoute"




function App() {
  

  return (
    <>
     <Header/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create-blog" element={<PrivateRoute><CreateBlog /></PrivateRoute>} />
      <Route path="/blogdetails/:id" element={<SingleBlog />} />
      <Route path="/profile/:id" element={<Profile/>} />

     </Routes>
     <Footer/>
    </>
  )
}

export default App

/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom"
import { useForm,  } from "react-hook-form"
import { useAuth } from "../hooks/useAuth"
import axios from "axios"

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    const {setUser,login}=useAuth()
    const navigate =useNavigate()
    // Register Function
    const handleLogin = async(data) => {
      //  api call korte hne
      try{
      const response = await axios.post('http://localhost:3000/auth/login',data)
      if(response){
        const authDetails =response.data
        setUser(authDetails)
        login(authDetails?.token?.accessToken,authDetails?.token?.refreshToken,authDetails?.user?.id)
        navigate('/')
      }
      console.log(response)
      }
      catch{
        err=>console.log(err)
      }
      // api theke data pabo seita context e save korbo
      //ekta Private Route korbo jate user data gulo k save kore.
    }
  return (
    <main>
    <section className="container">
      {/* <!-- Login Form into a box center of the page --> */}
      <div className="w-full md:w-1/2 mx-auto bg-[#030317] p-8 rounded-md mt-12">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
            {...register("email", { required: "Email is required"})}
              type="email"
              id="email"
              name="email"
              className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2">Password</label>
            <input
            {...register("password", { required: "Password is required"})}
              type="password"
              id="password"
              name="password"
              className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
            >
              Login
            </button>
          </div>
          <p className="text-center">
            {`Don't have an account?  `} <Link to="/register" className="text-indigo-600 hover:underline">Register</Link>
          </p>
        </form>
      </div>
    </section>
  </main>
  )
}

export default Login
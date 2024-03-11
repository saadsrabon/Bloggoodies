import { Link } from "react-router-dom"
import { useForm,  } from "react-hook-form"

// React Hook Form utilities

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
    // Register Function
    const handleRegister = async(data) => {
      
    }
  return (
    <main>
    <section className="container">
      <div className="w-full md:w-1/2 mx-auto bg-[#030317] p-8 rounded-md mt-12">
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        <form onSubmit={handleSubmit(handleRegister)} autoComplete="off">
          <div className="mb-6">
            <label htmlFor="firstName" className="block mb-2">First Name</label>
            <input
             {...register("firstName", { required: "First name is required" , minLength: { value: 3, message: "First Name should be at least 3 characters long" } , maxLength: { value: 10, message: "First Name should be at most 10 characters long" }})}
              type="text"
              id="firstName"
              name="firstName"
              className={`w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none ${errors.firstName?' focus:border-red-500': "focus:border-indigo-500"}`}
            />
            {errors.firstName && <p className="text-red-500 text-xs mt-2">{errors.firstName.message}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="lastName" className="block mb-2">Last Name</label>
            <input
              {...register("lastName", { required: "Last Name is required" , minLength: { value: 3, message: "Last Name should be at least 3 characters long" } , maxLength: { value: 10, message: "Last Name should be at most 10 characters long" }})}
              type="text"
              id="lastName"
              name="lastName"
              className={`w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none ${errors.lastName?' focus:border-red-500': "focus:border-indigo-500"}`}
            />
             {errors.lastName && <p className="text-red-500 text-xs mt-2">{errors.lastName.message}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              {...register("email", { required:"Email is required"})}
              type="email"
              id="email"
              name="email"
              className={`w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none ${errors.email?' focus:border-red-500': "focus:border-indigo-500"}`}
            />
             {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email.message}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2">Password</label>
            <input
             {...register("password", { required:"Password is required"})}
              type="password"
              id="password"
              name="password"
              className={`w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none ${errors.password?' focus:border-red-500': "focus:border-indigo-500"}`}
            />
             {errors.password && <p className="text-red-500 text-xs mt-2">{errors.password.message}</p>}
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
            >
              Create Account
            </button>
          </div>
          <p className="text-center">
            Already have account? <Link to="/login" className="text-indigo-600 hover:underline">Login</Link>
          </p>
        </form>
      </div>
    </section>
  </main>
  )
}

export default Register
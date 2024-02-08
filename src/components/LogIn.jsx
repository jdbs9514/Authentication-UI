import User from "../assets/icons/User"
import UnLock from "../assets/icons/UnLock"
import avatar from "../assets/images/avatar.gif"
import { NavLink } from "react-router-dom"

const LogIn = () => {
  return (
    <section className="bg-zinc-900 h-screen flex justify-center items-center mb-0">
      <div className="flex flex-col items-center w-full ">
        <div>
          <img 
            src={avatar} 
            alt="avatar" 
            className="rounded-full h-[100px] xl:h-[180px]"
          />
        </div>
        <div className="flex justify-center p-8">
          <h1 className="text-white text-4xl font-semibold font-montserrat mb-4 text-center lg:text-6xl">
            Enter your Account
          </h1>
        </div>
        <div className="flex justify-center flex-col gap-4 mt-2">
          <div className="flex gap-4">
            <User />
            <input
              type="text"
              placeholder="Username"
              required
              className="border border-red-600 rounded-full font-montserrat bg-zinc-700 p-1 text-white lg:w-[300px]"
            />
          </div>
          <div className="flex gap-4">
            <UnLock />
            <input
              type="password"
              placeholder="Password"
              required
              className="border border-red-600 rounded-full bg-zinc-700 font-montserrat p-1 text-white lg:w-[300px]"
            />
          </div>
        </div>
        <div className="flex gap-10 mt-4">
          <p className="text-xs text-white font-montserrat lg:text-xl">
            <NavLink to="/forgotpassword">Forgot your Password?</NavLink>
          </p>
          <p className="text-xs text-red-400 font-semibold font-montserrat lg:text-xl">
            <NavLink to="/signup">Register</NavLink>
          </p>
        </div>
        <div className="mt-6 flex justify">
          <button type="button" className="bg-red-500 py-2 px-4 rounded-full text-white font-montserrat lg:text-xl">
            Log in
          </button>
        </div>
      </div>
    </section>
  )
}

export default LogIn
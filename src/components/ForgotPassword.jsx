import { NavLink } from "react-router-dom"

const ForgotPassword = () => {
  return (
    <section className="bg-zinc-900 h-screen flex justify-center items-center mb-0">
      <div className="flex flex-col items-center w-full ">
        <div className="flex justify-center p-8">
          <h1 className="text-white text-4xl font-semibold font-montserrat mb-4 text-center lg:text-6xl">
            Change your Password
          </h1>
        </div>
        <div className="flex justify-center flex-col gap-4 mt-2">
          <div className="flex gap-4">
            <input
              type="password"
              placeholder="New Password"
              required
              className="border border-red-600 rounded-full font-montserrat bg-zinc-700 p-1 text-white lg:w-[300px]"
            />
          </div>
          <div className="flex gap-4">
            <input
              type="Confirm Password"
              placeholder="Password"
              required
              className="border border-red-600 rounded-full bg-zinc-700 font-montserrat p-1 text-white lg:w-[300px]"
            />
          </div>
        </div>
        <div className="flex gap-10 mt-4">
          <p className="text-xs text-white font-montserrat lg:text-xl">
            Already have a account?
          </p>
          <p className="text-xs text-red-400 font-semibold font-montserrat lg:text-xl">
            <NavLink to="/signup">Register</NavLink>
          </p>
        </div>
        <div className="mt-6 flex justify">
          <button type="button" className="bg-red-500 py-2 px-4 rounded-full text-white font-montserrat lg:text-xl">
            Confirm Password
          </button>
        </div>
      </div>
    </section>
  )
}

export default ForgotPassword
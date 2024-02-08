import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import Dancer from '../models/Dancer'
import Loader from './Loader'
import { NavLink } from 'react-router-dom'

const SignUp = () => {

  const [currentAnimation, setCurrentAnimation] = useState('Dance')

  const handleFocus = () => setCurrentAnimation('Dance')

  return (
    <section className="bg-zinc-900 h-screen flex justify-center items-center mb-0">
      <div>
        <div>
          <div>
            <p className="text-xs text-zinc-500 font-bold font-montserrat lg:text-xl text-center">
              START FOR FREE
            </p>
            <h2 className="text-white text-4xl px-4 font-semibold font-montserrat mt-4 text-center lg:text-6xl mb-4">
              Create your Account
            </h2>
            <div className="flex justify-center gap-4 lg:justify-around">
              <p className="text-white font-montserrat mt-2 lg:text-2xl">Already a member?</p>
              <p className="text-red-400 font-montserrat font-semibold mt-2 lg:text-2xl">
                <NavLink to="/">Log In</NavLink>
              </p>
            </div>
            <div className="flex justify-center flex-col">
              <div className="flex flex-col gap-4 lg:flex-row mt-6 px-8">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="border border-red-600 rounded-full font-montserrat bg-zinc-700 p-1 text-white lg:w-[300px]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="border border-red-600 rounded-full font-montserrat bg-zinc-700 p-1 text-white lg:w-[300px]"
                />
              </div>
              <div className="flex flex-col mt-4 px-8">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="border border-red-600 rounded-full font-montserrat bg-zinc-700 p-1 text-white lg:w-[618px]"
                />
              </div>
              <div className="flex flex-col gap-4 lg:flex-row mt-4 px-8">
                <input
                  type="password"
                  placeholder="password"
                  required
                  className="border border-red-600 rounded-full font-montserrat bg-zinc-700 p-1 text-white lg:w-[300px]"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                  className="border border-red-600 rounded-full font-montserrat bg-zinc-700 p-1 text-white lg:w-[300px]"
                />
              </div>
              <div className="flex justify-center mt-4">
                <button
                  type="button"
                  className="bg-red-500 py-2 px-4 rounded-full text-white font-montserrat lg:text-xl"
                >
                  Create Account
                </button>
              </div>
              <div className="lg:w-1/2 w-full lg:h-auto lg:ml-40  md:h-[190px] h-[190px]">
                <Canvas
                  camera={{ 
                    position: [0, 0, 5],
                    fov: 75,
                    near: 0.1,
                    far: 1000
                  }}
                >
                  <directionalLight intensity={2.5} position={[0, 0, 1]} />
                  <ambientLight intensity={1} />
                  <Suspense fallback={<Loader />}>
                    <Dancer
                      currentAnimation={currentAnimation}
                      position={[0.3, -1, 3]}
                      rotation={[6.3, 6.3, 0]}
                      scale={[1, 1, 1]}
                    />
                  </Suspense>
                </Canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp
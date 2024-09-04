import React from 'react'

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white flex rounded-lg shadow-lg overflow-hidden w-2/3 max-w-4xl">
      <div className="w-full md:w-1/2 p-5">
        <h2 className="text-2xl font-bold text-gray-700 text-center">Sign In</h2>
        <div className="flex justify-center mt-4">
          <a href="#" className="text-gray-600 mx-2">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-600 mx-2">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <form className="mt-4">
          <div>
            <label className="block text-gray-700">USERNAME</label>
            <input
              type="text"
              placeholder="Username"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">PASSWORD</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            
            <a href="#" className="text-gray-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button className="w-full mt-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold rounded-md focus:outline-none focus:shadow-outline">
            Sign In
          </button>
        </form>
      </div>
      <div className="hidden md:block md:w-1/2 bg-gradient-to-r from-pink-500 to-red-500 p-10">
        <h2 className="text-3xl font-bold text-white">Welcome to Sign In</h2>
        <p className="mt-2 text-white">Don't have an account?</p>
        <button className="mt-4 py-2 px-4 bg-white text-pink-500 font-bold rounded-md hover:bg-gray-200">
          Sign Up
        </button>
      </div>
    </div>
  </div>
  )
}

export default SignupPage
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Signup() {
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => console.log(data)
  const [showLogin, setShowLogin] = useState(false)
  const navigate = useNavigate()

  // Agar showLogin true hai toh Login form dikhao
  if (showLogin) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="border-2 border-gray-300 shadow-lg p-8 rounded-xl bg-white w-96 relative">
          
          
          <button 
            onSubmit={handleSubmit(onSubmit)} onClick={() => navigate('/')}  // 
            className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-black bg-gray-200 hover:bg-gray-300"
          >
            ✕
          </button>
          
          <h3 className="font-bold text-2xl text-center text-black mb-6">Login</h3>
          
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-black text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-pink-500"
              {...register("email", { required: true })} 
            />
            <br />
                   {errors.email && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          
          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-black text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-pink-500"
              {...register("password", { required: true })}
            />
            <br />
                   {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          
          {/* Login Button */}
          <button className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 duration-200 mb-4">
            Login
          </button>
          
          {/* Signup Link */}
          <div className="text-center">
            <p className="text-black">
              Don't have an account?{" "}
              <button 
                onClick={() => setShowLogin(false)}
                className="text-blue-500 hover:underline font-medium"
              >
                Sign up here
              </button>
            </p>
          </div>
        </div>
      </div>
    )
  }

  
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="border-2 border-gray-300 shadow-lg p-8 rounded-xl bg-white w-96 relative">
        
        
        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-black bg-gray-200 hover:bg-gray-300">
          ✕
        </Link>
        
        <h3 className="font-bold text-2xl text-center text-black mb-6">Sign Up</h3>
        
        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-black text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-pink-500"
            {...register("name", { required: true })} 
          />
          <br />
                   {errors.name && <span className="text-sm text-red-500">This field is required</span>}
        </div>
        
        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-black text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-pink-500"
            {...register("email", { required: true })} 
          />
          <br />
                   {errors.email && <span className="text-sm text-red-500">This field is required</span>}
        </div>
        
        {/* Password Field */}
        <div className="mb-6">
          <label className="block text-black text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-pink-500"
            {...register("password", { required: true })}
          />
          <br />
                   {errors.password && <span className="text-sm text-red-500">This field is required</span>}
        </div>
        
        {/* Signup Button */}
        <button className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 duration-200 mb-4">
          Sign Up
        </button>
        
        {/* Login Link */}
        <div className="text-center">
          <p className="text-black">
            Already have an account?{" "}
            <button 
              onClick={() => setShowLogin(true)}
              className="text-blue-500 hover:underline font-medium"
            >
              Login here
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup
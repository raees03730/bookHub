import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  
  
  const [showLogin, setShowLogin] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  const onSubmit = async (data) => {
    try {
      const userInfo = {
        fullname: data.fullname,
        email: data.email,
        password: data.password,
      };
      
      const res = await axios.post("https://bookhub-backend-vav0.onrender.com/api/user/signup", userInfo);
      console.log(res.data);
      
      if (res.data) {
        toast.success("Signup Successfully");
        navigate(from, { replace: true });
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user));
    } catch (err) {
      console.log(err);
      if (err.response) {
        toast.error("Error: " + err.response.data.message);
      } else if (err.request) {
        toast.error("Error: No response from server");
      } else {
        toast.error("Error: " + err.message);
      }
    }
  };

  
  const onLoginSubmit = async (data) => {
    try {
      const loginInfo = {
        email: data.email,
        password: data.password,
      };
      
      const res = await axios.post("https://bookhub-backend-vav0.onrender.com/api/user/login", loginInfo);
      console.log(res.data);
      
      if (res.data) {
        toast.success("Logged in Successfully");
        navigate('/');
      }
    } catch (err) {
      console.log(err);
      if (err.response) {
        toast.error("Error: " + err.response.data.message);
      } else {
        toast.error("Error: " + err.message);
      }
    }
  };

  
  if (showLogin) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="border-2 border-gray-300 shadow-lg p-8 rounded-xl bg-white w-96 relative">
          <button 
            onClick={() => navigate('/')}
            className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-black bg-gray-200 hover:bg-gray-300"
          >
            ✕
          </button>
          
          <h3 className="font-bold text-2xl text-center text-black mb-6">Login</h3>
          
          <form onSubmit={handleSubmit(onLoginSubmit)}>
            
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
            

            <button 
              type="submit"
              className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 duration-200 mb-4"
            >
              Login
            </button>
          </form>
          

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
    );
  }


  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="border-2 border-gray-300 shadow-lg p-8 rounded-xl bg-white w-96 relative">
        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-black bg-gray-200 hover:bg-gray-300">
          ✕
        </Link>
        
        <h3 className="font-bold text-2xl text-center text-black mb-6">Sign Up</h3>
        
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-4">
            <label className="block text-black text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-pink-500"
              {...register("fullname", { required: true })} 
            />
            <br />
            {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          

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
          

          <button 
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 duration-200 mb-4"
          >
            Sign Up
          </button>
        </form>
        

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
  );
}

export default Signup;

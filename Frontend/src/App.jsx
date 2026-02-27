import React from 'react';
import Home from './home/Home';
import { Route, Routes, Navigate } from "react-router-dom";
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Login from './components/Login';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';
import { UseAuth } from './context/AuthProvider';



function App() {
  const [authUser, setAuthUser] = UseAuth();
  console.log(authUser);
  return (
    <>
     <div className="dark:bg-slate-900 dark:text-white">
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup"/>} />
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;


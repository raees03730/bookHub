
import React from 'react'
import Cards from './Cards'
import list from "../../public/list.json"
import {Link} from "react-router-dom"

function Course() {
  return (
    <>
       <div className="max-w-screen-2xl mx-auto px-4 md:px-20">
          <div className="mt-28 text-center">
             <h1 className="text-2xl md:text-3xl">
                We're delighted to have you{" "} 
                <span className="text-pink-500"> Here! : )</span>
             </h1>
             <p className="mt-4 max-w-2xl mx-auto">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo animi cum atque hic quia exercitationem in facilis nesciunt modi? 
             </p>
             <Link to="/">
                <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                   Back
                </button>
             </Link>
          </div>
          
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {list.map((item) => (
                <Cards key={item.id} item={item}/>
             ))}
          </div>
       </div>
    </>
  );
}

export default Course;
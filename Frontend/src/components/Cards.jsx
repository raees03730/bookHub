import React from 'react';

function Cards({ item }) {
  return (
    <div className="w-full h-full flex">
      <div className="mt-4 my-3 p-3 w-full"> 
        <div className="card bg-white w-full h-full shadow-xl rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col  dark:text-white dark:border"> {/* w-full, h-full, flex flex-col add kiya */}
          <figure className="overflow-hidden relative group flex-shrink-0"> 
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
            />
            
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center rounded-t-2xl">
              <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                
              </div>
            </div>
          </figure>
          <div className="card-body p-5 flex flex-col flex-grow"> 
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
              <span className="rounded-full bg-pink-500 text-white px-3 py-1 text-sm font-medium">
                {item.category}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-4 flex-grow">{item.title}</p> 
            <div className="flex justify-between items-center mt-auto"> 
              <span className="rounded-full bg-gray-100 px-4 py-2 font-semibold text-gray-700">
                ${item.price}
              </span>
              <button className="cursor-pointer border-[2px] rounded-full bg-pink-500 text-white px-5 py-2 hover:bg-pink-600 transition-colors duration-200 font-medium">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards;
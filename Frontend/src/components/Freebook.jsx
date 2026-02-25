import React, { useEffect, useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from './Cards';

function Freebook() {
  const [book,setBook]=useState([]);
   useEffect(() =>{
      const getBook=async()=>{
         try {
          const res = await axios.get("https://bookhub-backend-g1iq.onrender.com/book");
      
          const data = res.data.filter((data) => data.category === "Free")
          console.log(data);
          setBook(data);
         } catch (error) {
            console.log(error);
         }
      };
      getBook();
   },[]);
    

    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }; 
    
  return (
    <>
    
      <div className="max-w-screen-2xl  mx-auto md:px-20 px-4 mt-20 ">
           <div>
              <h1 className="font-semibold text-xl pb-2"> Free Offered Courses </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dignissimos mollitia, velit debitis error, quos quae iste a tempore voluptatem nostrum. Adipisci amet distinctio optio?
              </p> 
            </div> 
    
        
      <div>
        <Slider {...settings}>
           {book.map((item) => (
            <Cards item={item} key={item.id} />
           ))}
       </Slider>
        </div>
     </div>
    </>
  );
}

export default Freebook;

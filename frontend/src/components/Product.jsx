import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

import axiosInstance from '../api/axiosInstance.js';
import Card from './Card';

import vidimg1 from '../../public/image/vidimg1.jpeg'
import vidimg2 from '../../public/image/vidimg2.jpeg'
import Navbar from './Navbar';
function Product() {

  const [spices ,setSpices]=useState([])
  useEffect(()=>{
    const getSpices = async()=>{
      try {
         const res = await axiosInstance.get("/spices");
         console.log(res.data)
         setSpices(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getSpices();
  },[])

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
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
    <Navbar/>
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 mt-0">
         <div className=' item-center justify-center text-center'>
          <h1 className= "text-2xl p-24" > <span className ="text-pink-500">"Welcome" to NAMOH Spices,</span> 
          <br />where flavor meets freshness! 
           Explore our  curated selection of premium spices <span className ="text-pink-500">sourced from around the world.</span> <br /> <br /></h1>
         
         </div>
         <div>
         <Slider {...settings}>
          <div>
           {/* <video src={NAMOH1} autoPlay ="true" /> */}
           <img src={vidimg1} alt="" />
           </div>
          <div>
           {/* <video src={NAMOH2} autoPlay="true" /> */}
           <img src={vidimg2} alt="" />
           </div>
      
            </Slider>

            <p className ="text-green-500 text-3xl mt-6 ">  "   Discover a world of flavors with our premium spices. Elevate 
            every meal with the freshest ingredients, crafted for 
            culinary adventures in your kitchen!"</p>
           <div className =" mt-12 grid grid-cols-1 md:grid-cols-3">
               {spices.map ((item)=>(
               < Card key={item.id} item={item}/>))}
           </div>

         </div>
      </div>
     
     
     </>
  )
}

export default Product;

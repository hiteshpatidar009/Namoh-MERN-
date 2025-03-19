import React from 'react'
import img1 from '../../public/image/slider1.jpg'
import img2 from '../../public/image/slider2.jpeg'
import img3 from '../../public/image/slider3.jpeg'

function Carousel() {
  return (
    <>
      <div className="carousel w-full h-[500px] mt-24 "> {/* Set desired height */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={img1}
            className="w-full h-full object-fill" // Ensures image fills without distortion
            alt="Slide 1"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={img2}
            className="w-full h-full object-fill"
            alt="Slide 2"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={img3}
            className="w-full h-full object-cover"
            alt="Slide 3"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>

        
  
        
      </div>
    </>
  )
}

export default Carousel

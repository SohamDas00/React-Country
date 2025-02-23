import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <main className='main hero-section'>
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <h1 className='heading-xl'>Explore the World, One Country at a Time.</h1>
            <p className='paragraph'>Discover the history,culture, and beauty of every nation.Sort,search, and filter through countries to find the details you need.</p>
            <NavLink to="/about" className="navlink-button">
            <button  className='btn btn-darken btn-inline bg-white-box'>Start Exploring <FaLongArrowAltRight /></button>
            </NavLink>
          </div>
          <div className='hero-image'><img src="/picture/world.png" alt="wordmap" className='banner-image'/></div>
        </div>
      </main>
    </>
  )
}

export default Hero

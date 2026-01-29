import React from 'react'
import './services.css'
import { IoBrush } from "react-icons/io5";

const Services = () => {
  return (
    <div className='services'>
        <h2 className='h2'><span className='color'>■</span> Service</h2>
        <div className='row'>
            <h1><span className='color'>Services </span>I Provide</h1>
        </div>
        <div className="cards">
            <div className="card">
                <div className='icon'>
                    <p className='p'>{"</>"}</p>
                </div>
                <h3 className='h3'>Web Developement</h3>
                <p className='para'>I am certified web developer focused on precision and performance. Every website I build is pixel-perfect, fully responsive, and optimized for a seamless user experience across all devices.</p>
                <button className='btnc'>Hire Me</button>
            </div>
            <div className="card">
                <div className='icon'>
                    <p className='p'><IoBrush /></p>
                </div>
                <h3 className='h3'>UI\UX Designing</h3>
                <p className='para'>I design intutive and engaging interfaces that put users first. My goal is to create visually appealing, easy-to-navigate designs that deliver smooth and enjoyable digital experiences.</p>
                <button className='btnc'>Hire Me</button>
            </div>
            <div className="card">
                <div className='icon'>
                    <p className='p'>{"</>"}</p>
                </div>
                <h3 className='h3'>App Design</h3>
                <p className='para'>I craft responsive and functional app designs that balance aesthetics with usability. Each app is designed to be fast, user-friendly, and aligned with brand's vision.</p>
                <button className='btnc'>Hire Me</button>
            </div>
        </div>
    </div>
  )
}

export default Services
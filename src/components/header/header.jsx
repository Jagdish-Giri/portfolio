import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import { FaBars } from "react-icons/fa6";

const header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='header'>
        <nav className='navbar'>
            <ul className='menu'>
                <li><a className='a' href="#home">Home</a></li>
                <li><a className='a' href="#about">About</a></li>
                <li><a  className='a'href="#skills">Skills</a></li>
             </ul>
                <span className='logo'>
                    <p className='circle'>G</p>
                    <p>Girish</p>
                </span>
                <ul className='menu'>
                <li><a className='a' href="#projects">Self Projects</a></li>
                <li><a className='a' href="#projects">Project</a></li>
                <li><a className='a' href="#contact">Contact Us</a></li>
            </ul>
            <div className='mobile-menu' onClick={() => setMenuOpen(!menuOpen)}>
               <div className='tap'>
                <FaBars size={22} color='white' />
               </div>
               {menuOpen && (
            <ul className='mmenu'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Self Projects</li>
                <li>Contact Us</li>
            </ul>
            )}
            </div>
        </nav>
    </div>
  )
}

export default header
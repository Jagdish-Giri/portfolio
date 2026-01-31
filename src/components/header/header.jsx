import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='header'>
        <nav className='navbar'>
            <ul className='menu'>
                <li><Link className='a' to="/">Home</Link></li>
                <li><Link className='a' to="/about">About</Link></li>
                <li><Link  className='a' to="/skills">Skills</Link></li>
             </ul>
                <span className='logo'>
                    <p className='circle'>G</p>
                    <p>Girish</p>
                </span>
                <ul className='menu'>
                <li><Link className='a' to="/selfproject">Self Projects</Link></li>
                <li><Link className='a' to="/projects">Project</Link></li>
                <li><Link className='a' to="/contact">Contact Us</Link></li>
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
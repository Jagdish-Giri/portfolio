import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'

const header = () => {
  return (
    <div className='header'>
        <nav className='navbar'>
            <ul className='menu'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
             </ul>
                <span className='logo'>
                    <p className='circle'>G</p>
                    <p>Girish</p>
                </span>
                <ul className='menu'>
                <li>Self Projects</li>
                <li>Project</li>
                <li>Contact Us</li>
            </ul>
        </nav>
    </div>
  )
}

export default header
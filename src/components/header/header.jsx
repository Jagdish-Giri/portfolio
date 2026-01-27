import React from 'react'
import './Header.css'

const header = () => {
  return (
    <div>
        <nav className='navbar'>
            <ul className='menu'>
                <li>Home</li>
                <li>About</li>
            </ul>
            <img src="" alt="" />
            <ul className='menu'>
                <li>Project</li>
                <li>Contact Us</li>
            </ul>
        </nav>
    </div>
  )
}

export default header
import React from 'react'
import './contact.css'
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='contact'>
        <div className='left'>
            <p>Contact Us</p>
            <h1 className='h2'>Get In <span className='color'>Touch</span></h1>
            <h1 className='big'>Let's Talk for <span className='color'>Your Projects</span></h1>
            <div className='icons'>
                <div className='iconcard'>
                    <IoMdMail className='iconn' />
                    <p><a href="mailto:developergirishgiri@gmail.com">developergirishgiri@gmail.com</a></p>
                </div>
                <div className='iconcard'>
                    <FaLinkedin className='iconn' />
                    <p><a href="https://www.linkedin.com/in/girish-giri-569b453a4/">Linked In</a></p>
                </div>
            </div>
        </div>
        <div className='right'>
            <form action="">
                <div className="formrow">
                    <div className='f'>
                <p className='p3' htmlFor="name">Name</p>
                <input type="text" required/></div>
<div className='f'>
                <p className='p3' htmlFor="email">Email</p>
                <input type="email" required/></div>
                </div>

<div className="formrow">
    <div className='f'>
                <p className='p3' htmlFor="phone">Phone</p>
                <input type="number" required/></div>
<div className='f'>
                <p className='p3' htmlFor="interest">I'm Interested in</p>
                <input type="text" required/></div>
                </div>
    
    <div className="formrow">
        <div className='f'>
                <p className='p3' htmlFor="budget">Budget Range</p>
                <input type="number" required/></div>
                <div className='f'>
                <p className='p3' htmlFor="country">Country</p>
                <input type="text" required/></div>
                </div>
<div className='f'>
                <p className='p3' htmlFor="message">Your Message</p>
                <input type="text" required/></div>


            </form>
        </div>
    </div>
  )
}

export default Contact
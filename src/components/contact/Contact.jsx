import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'
import { IoMdMail } from "react-icons/io";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_o2c5h4v',
            'template_hkggpg9',
            form.current,
            'FJ7k5jHM0ZCOnjx6h'
        )
        .then((result) => {
            alert("Message sent!");
            form.current.reset();
        }, (error) => {
            alert("Failed to send message, please try again");
        });
    };
  return (
    <div className='contact' id='contact'>
        <div className='leftc'>
            <p>Contact Us</p>
            <h1 className='h2'>Get In <span className='color'>Touch</span></h1>
            <h1 className='big'>Let's Talk for <span className='color'>Your Projects</span></h1>
            <div>
                <p className='p4'>Let's bring your project to real life and make it awesome! If you have any ideas or just wanna talk, I'm here. Don't wait let's make something cool toghther.</p>
            </div>
            <div className='icons'>
                <div className='iconcard'>
                    <IoMdMail className='iconn' />
                    <p><a href="mailto:developergirishgiri@gmail.com">developergirishgiri@gmail.com</a></p>
                </div>
                <div className='iconcard'>
                    <FaLinkedin className='iconn' />
                    <p><a href="https://www.linkedin.com/in/girish-giri-569b453a4/">Linked In</a></p>
                </div>
                <div className='iconcard'>
                    <FaInstagram className='iconn' />
                    <p><a href="https://www.instagram.com/developergirishgiri/">Instagram</a></p>
                </div>
            </div>
        </div>
        <div className='rightc'>
            <form ref={form} onSubmit={sendEmail}>
                <div className="formrow">
                    <div className='f'>
                <p className='p3' htmlFor="name">Name*</p>
                <input name='name' type="text" required/></div>
<div className='f'>
                <p className='p3' htmlFor="email">Email*</p>
                <input name='email' type="email" required/></div>
                </div>

<div className="formrow">
    <div className='f'>
                <p className='p3' htmlFor="phone">Phone*</p>
                <input name='phone' type="number" required/></div>
<div className='f'>
                <p className='p3' htmlFor="interest">I'm Interested in*</p>
                <input name='interest' type="text" required/></div>
                </div>
    
    <div className="formrow">
        <div className='f'>
                <p className='p3' htmlFor="budget">Budget Range*</p>
                <input type="number" name='budget'required/></div>
                <div className='f'>
                <p className='p3' htmlFor="country">Country*</p>
                <input type="text"name='country' required/></div>
                </div>
<div className='f'>
                <p className='p3' htmlFor="message">Your Message*</p>
                <textarea name='message' type="text" required/></div>

                <button className='btn' type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact;
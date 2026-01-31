import React from 'react'
import './Aboutpage.css'

const Aboutpage = () => {
  return (
    <div className='aboutpage-container'>
        <h1 className='aboutpage-title'>About Me</h1>
        <p className='aboutpage-text'>
            Hi! I'm Girish, a passionate web developer and designer. I love building beautiful, responsive, user-freindly websites that help people and businesses shine online.<br/><br/>
            My foucs is on clean code, modern design, and seamless user experience. Whether it's a landing page, portfolio, or a full web app, I bring creativity and precision to every project.<br/><br/>
            Let's connect and create soething amazing together!
        </p>
        <div className='aboutpage-links'>
            <a href="mailto:developergirishgiri@gmail.com" className='aboutpage-link'> developergirishgiri@gmail.com</a>
            <a href="https:www.linkedin.com/developergirishgiri" target='_blank' rel='noopener noreferrer' className='aboutpage-link'>LinkedIn</a>
            <a href="https://www.instagram.com/developergirishgiri" target='_blank' rel='noopener noreferrer'>Instagram</a>

        </div>
    </div>
  )
}

export default Aboutpage
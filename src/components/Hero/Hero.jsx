import React from 'react'
import './Hero.css'
import svg from '../../assets/svg.mp4'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="left">
            <span>
                <div>
                    <p className='h'>Hello Guys</p>
                </div>
                <div>
                    <h1 className='big'>I'm <span className='title'>Girish Giri,</span><br />
                    Web Developer <br />
                    Based in India.</h1>

                    <p>I am a certified web developer who takes pride in precision and detail. Every project I work on is crafted to be pixel-perfect and fully responsive, ensuring seamless user-friendly designs that not only look great but also function flawlessly.</p>

                    <div className='buttons'>
                        <button className='btn1'>View Projects</button>
                        <button className='btn2'>Hire Me</button>
                    </div>
                </div>
            </span>
        </div>
        <div className='right'>
            <video className='svg'autoPlay loop muted src={svg} alt="developer girish giri" />
        </div>
    </div>
  )
}

export default Hero
import React from 'react'
import './Hero.css'
import svg from '../../assets/svg.mp4'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero' id='home'>
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
                        <Link className='a' to="/projects"><button className='btn1'>View Projects</button></Link>
                        <Link className=' w' to="/contact"><button className='btn2'>Hire Me</button></Link>
                    </div>
                </div>
            </span>
        </div>
        <div className='right'>
            <Link to="/contact"><video className='svg'autoPlay loop muted src={svg} alt="developer girish giri" /></Link>
        </div>
    </div>
  )
}

export default Hero;
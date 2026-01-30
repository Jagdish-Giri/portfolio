import React from 'react'
import './tools.css'
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { SiAdobephotoshop } from "react-icons/si";

const Tools = () => {
  return (
    <div id='skills'>
        <h1 className='h1'>Exploring <span className='color'>Tools</span></h1>
            <p className='p1'>Knowing bit about tools</p>

            <div className='collections'>
                <div className='toolcard'>
                    <VscVscode  className='icon' />
                   <h2>Visual Studio Code</h2>
                   <p className="p">95%</p>
                </div>
                <div className='toolcard'>
                    <FaGithub className='icon' />
                    <h2>Git & Github</h2>
                    <p className="p">90%</p>
                </div>
                <div className='toolcard'>
                    <SiCanva className='icon'  />
                    <h2>Canva</h2>
                    <p className="p">75%</p>
                </div>
                <div className='toolcard'>
                    <IoLogoFigma className='icon'  />
                    <h2>Figma</h2>
                    <p className="p">45%</p>
                </div>
                <div className='toolcard'>
                    <SiAdobephotoshop className='icon'  />
                    <h2>Adobe Photoshop</h2>
                    <p className="p">25%</p>
                </div>
            </div>
    </div>
  )
}

export default Tools
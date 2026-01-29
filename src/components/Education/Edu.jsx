import React from 'react'
import './edu.css'
import { FaSchool } from "react-icons/fa6";

const Edu = () => {
  return (
    <div className='edu'>
        <h1 className='h1'>My <span className='color'>Education</span></h1>
            <p className='p1'>Know about my educational background</p>

            <div className="educard">
                 <FaSchool className='icon1' />
                <h2 className='color'>Schooling</h2>
                <p className='p2'>10th Grade</p>
            </div>
    </div>
  )
}

export default Edu
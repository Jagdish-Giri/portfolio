import React from 'react'
import './Skills.css'

const Skills = () => {
    const skills = [
        {name: 'HTML', level: 'Expert'},
        {name: 'CSS', level: 'Expert'},
        {name: 'JavaScript', level: 'Advanced'},
        {name: 'React', level: 'Advanced'},
        {name: 'Node.js', level: 'Intermediate'},
        {name: 'UI/UX Design', level: 'Advanced'},
        {name: 'Git & GitHub', level: 'Advanced'}
    ];
  return (
    <div className='skills-container'>
        <h1 className='skills-title'>My Skils</h1>
        <div className="skills-list">
            {skills.map((skill, idx) => (
                <div className='skill-card' key={idx}>
                    <span className='skill-name'>{skill.name}</span>
                    <span className='skill-level'>{skill.level}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills
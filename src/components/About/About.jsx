import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
import akashImage from '../../assets/akash.jpg'

function About() {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={akashImage} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am expreince frontend developer with over two year of working on several real world projects</p>
                    <p>My passion about frontend development is not only for job but for building cool projects that help the world and bring us together</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>React js</p> <hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>Javascript</p> <hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Node js</p> <hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About

66666
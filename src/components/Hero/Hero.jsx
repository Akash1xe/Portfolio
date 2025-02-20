import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import akashImage from '../../assets/akash.jpg'


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={akashImage} alt="" />
        <h1><span>I'am Akash,</span> frontend developer based in india</h1>
        <p>I'am frontend developer from india i have more than 2 year of expreince of working with project </p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero
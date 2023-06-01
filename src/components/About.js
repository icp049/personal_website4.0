import React from 'react'
import ian from '../images/profile.jpg'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={ian} alt='ian' />
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>""""</p>
                    <p>""""</p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default About
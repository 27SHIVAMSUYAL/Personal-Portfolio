import React from 'react'
import './About.css'
function About() {
    return (
        <div className="about-container">
            <div className='about-image'>
                <img
                    src="https://images.hindustantimes.com/img/2022/09/10/1600x900/Virat_Kohli_1662825893265_1662825895109_1662825895109.jpg"
                    alt="Virat Kohli"
                    style={{ maxWidth: '40vw', height: '80%', marginLeft: '10px', marginTop: '10px' }}
                />


            </div>
            <div className='about-text'>
                <div className='about-heading'>
                    <h2 > About Me
                    </h2>
                </div>
                <div className='about-para'>
                    <p>
                        adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, fuga?
                        <br />
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, cumque?
                        <br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, fugiat.
                        
                    </p>
            
                    <p>
                        adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, fuga?
                        <br />
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, cumque?
                        <br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, fugiat.
                    </p>
                </div>


            </div>
        </div>
    )
}

export default About

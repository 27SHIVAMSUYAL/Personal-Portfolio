import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';
import RESUME from '../../assets/Resume.txt';
function Home() {
  return (
    <>
      <div className="home-container">

        <div className="home-content">
          <h2 className='typewriter-text'>Hi 👋 i am a 
            
            <Typewriter
              options={{
                strings: [
                  'MERN Stack Developer',
                  'A.I. and M.L. Engineer',
                  'Competitive Coder',
                  'Blockchain Developer',
                ],
                autoStart: true,
                loop: true,
                typeSpeed: 150, // Adjust typing speed (lower value = faster)
                deleteSpeed: 30, // Adjust deleting speed (lower value = faster)
                delay: 2, // Remove extra delay between typing
                
              }}
            />

          </h2>
        </div>
        <div className="home-buttons">

          {/* downlaod functionality  */}
        <a href={RESUME} download='Resume.pdf'><button className='btn-resume'>Download Resume</button></a>
          

          <button className='btn-contact'>Contact Me</button>
        </div>

      </div>

    </>
  )
}

export default Home;

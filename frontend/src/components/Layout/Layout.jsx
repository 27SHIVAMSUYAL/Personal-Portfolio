import React, { useState } from 'react';
import Home from '../../pages/Home/Home';
import './layout.css';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import Menu from '../Menu/Menu';
import About from '../../pages/About/About';
import Logos from '../Logos/Logos';
import EmailForm from '../EmailForm/EmailForm';





function Layout() {
    // useState to toggle sidebar
    const [toggle, settoggle] = useState(true);
    const toggleSidebar = () => {
        settoggle(!toggle);
    }
    return (
        <><div>


            <div className="sidebar-section">
                <div className="sidebar" style={{ width: toggle ? '15vw' : '5vw' }}>   {/* If toggle is true, width is 15vw, else 5vw*/}
                    <div className="fixed_sidebar">
                    
                        <div className="sidebar-toggle-icons">
                            <div className="container">
                                <div>
                                    <img src="data:image/jpeg;base64,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"
                                        alt="logo" className='profile-pic' title='Virat Kohli' />
                                </div>
                            </div>
                            <div className='toggle-icon'>
                                <p>

                                    { // If toggle is true, show AiOutlineDoubleRight, else show AiOutlineDoubleLeft
                                        toggle ? < AiOutlineDoubleLeft onClick={toggleSidebar} /> : < AiOutlineDoubleRight onClick={toggleSidebar} />
                                    }
                                </p>
                            </div>

                        </div>
                        <div className='menu-section'>
                            <Menu toggle={toggle} />
                        </div>


                    </div>

                </div>
                <div className='home-section' style={toggle ? { marginLeft: '15vw' } : { marginLeft: '5vw' }}> {/* If toggle is true, marginLeft is 15vw, else 5vw*/}
                    <Home />

                    <About />
                    <div className='Logos-div'>
                        <Logos />
                    </div>
                    <div className='email-form-div'>
                        <EmailForm />
                        </div>
                    


                </div>

            </div>

        </div>
        </>
    )
}

export default Layout;

import React from 'react';
import './Menu.css';
//impoted all icons 
import { IoHomeSharp ,IoBookSharp  } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const Menu = (props) => {
    return (
        props.toggle ? (<div className='icon-with-names'>
            
                <div className='menu-items'>
                    <div className="menu-item" title='Home'>
                      
                        <div className="menu-icon"><IoHomeSharp /> </div>
                        
                         Home
                    </div>
                    <div className="menu-item" title='Education'>
                    
                        <div className="menu-icon"><IoBookSharp/> </div>
                        
                         Education
                    </div>
                    <div className="menu-item" title='Experience'>
                        <div className="menu-icon">< IoHomeSharp /> </div>
                        
                        Experience
                    </div>
                    <div className="menu-item" title='Skills'>
                        <div className="menu-icon"><IoHomeSharp/> </div>
                        
                         Skills
                    </div>
                    <div className="menu-item" title='Project'>
                        <div className="menu-icon"><IoHomeSharp /> </div>
                        
                         Project
                    </div>

                    <div className="menu-item" title='Contact'>
                        <div className="menu-icon"><HiOutlinePhone  /> </div>
                        
                         Contact
                    </div>
                </div>
            

        </div>
        ) : 
        <div className='just-icons'>
        <div className='menu-container'>

            <div className='menu-items'>
                <div className="menu-item" title='Home'>
                    <div className="menu-icon"><IoHomeSharp /> </div>
                  
                </div>
                <div className="menu-item" title='Education'>
                    <div className="menu-icon"><IoBookSharp/> </div>
                    
                  
                </div>
                <div className="menu-item" title='Experience'>
                    <div className="menu-icon">< IoHomeSharp /> </div>
             
                </div>
                <div className="menu-item" title='Skills'>
                    <div className="menu-icon"><IoHomeSharp/> </div>
                    
                
                </div>
                <div className="menu-item" title='Project'>
                    <div className="menu-icon"><IoHomeSharp /> </div>
                    
                     
                </div>

                <div className="menu-item"  title='Contact'>
                    <div className="menu-icon"><HiOutlinePhone  /> </div>
                    
                       </div>
            </div>
        </div>

    </div>);
};

export default Menu;

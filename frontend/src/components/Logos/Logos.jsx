import React from 'react';
import './Logos.css';

import cLogo from './logos-folder/c.svg';
import docker from './logos-folder/docker.svg';
import reactLogo from './logos-folder/react.svg';
import nodeJs from './logos-folder/node-js.svg';
import mongodb from './logos-folder/mongodb-ar21.svg';
import express from './logos-folder/express.svg';
import mysql from './logos-folder/mysql.svg';
import python from './logos-folder/python.svg';

function Logos() {
    return (
        <div className="logos">
            <div className="logos-slide">
                <img src={'../../public/aws.svg'} alt="AWS logo" />
                <img src={cLogo} alt="C logo" />
                <img src={docker} alt="Docker logo" />
                <img src={reactLogo} alt="React logo" />
                <img src={nodeJs} alt="Node.js logo" />
                <img src={mongodb} alt="MongoDB logo" />
                <img src={express} alt="Express logo" />
                <img src={mysql} alt="MySQL logo" />
                <img src={python} alt="Python logo" />
            </div>
            <div className="logos-slide">
            <img src={'../../public/aws.svg'} alt="AWS logo" />
                <img src={cLogo} alt="C logo" />
                <img src={docker} alt="Docker logo" />
                <img src={reactLogo} alt="React logo" />
                <img src={nodeJs} alt="Node.js logo" />
                <img src={mongodb} alt="MongoDB logo" />
                <img src={express} alt="Express logo" />
                <img src={mysql} alt="MySQL logo" />
                <img src={python} alt="Python logo" />
            </div>
        </div>
    );
}

export default Logos;

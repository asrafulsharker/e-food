import React from 'react'
import {FaUserCircle} from 'react-icons/fa';
import './home.css';
import Hero from '../hero/hero';
import Navbar from '../navbar/navbar';
import Top from '../top-restautant/top'
function home() {
    return (
        <div className="back">
        <div className="container">
            <Hero/>
            <Top/>
        </div>
        </div>

    )
}

export default home

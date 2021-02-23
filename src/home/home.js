import React from 'react'
import {FaUserCircle} from 'react-icons/fa';
import './home.css';
import Hero from '../hero/hero';
import Navbar from '../navbar/navbar';
import Top from '../top-restautant/top';
import Booking from '../booking/booking';
import Food from '../food section/food';
import Explore_Food from '../explore_food/explore';
import App_Section from '../app-section/app';
import Footer from '../footer/footer';
function home() {
    return (
        <div className="back">
        <div className="container">
            <Hero/>
            <Top/>
            <Booking/>
            <Food/>
            <Explore_Food/>
            <App_Section/>
            <Footer/>
        </div>
        </div>

    )
}

export default home

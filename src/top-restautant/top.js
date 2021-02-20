import React from 'react'
import {GoLocation} from 'react-icons/go';
import {AiOutlineArrowRight} from 'react-icons/ai';
import Barger from '../images/barger.png';
import Pizza from '../images/pizza.png';
import './top.css';
function top() {
    return (
        <div className="container" style={{padding:"80px 0px 80px 0px",background:"#fff5ec"}}>
            <div className="row " style={{padding:"20px"}}>
            <div className="col-md-6">
                <p style={{fontSize:"35px",fontWeight:"bold",borderLeft:"10px solid red",lineHeight:"40px",padding:"10px"}}>Some top restaurant for dining in or Take away!</p>
            </div>
            <div className="col-md-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed phasellus senectus. Ut tellus donec vestibulum tristique leo bibendum in a, tincidunt. Volutpat metus id amet, nam hac magna accumsan. Nascetur ac tortor purus ultrices morbi tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed.
            </div>
        </div>
        <div className="row" style={{padding:"50px 0px 50px 0px"}}>
            <div className="col-md-4 card-img-rated">
                <img className="card-img-rated" src={Barger}/>
                <div className="card-box-rated">
                    <p style={{fontSize:"23px",fontWeight:"bold"}}>Fire Water</p>
                    <p>We are the new developer</p>
                    <p><GoLocation/><span>New York</span></p>
                    <p className="book-now ml-auto">Book Now</p>
                </div>
            </div>
            <div className="col-md-4 card-img-rated">
                <img className="card-img-rated" src={Pizza}/>
                <div className="card-box-rated">
                    <p style={{fontSize:"23px",fontWeight:"bold"}}>Fire Water</p>
                    <p>We are the new developer</p>
                    <p><GoLocation/><span>New York</span></p>
                    <p className="book-now ml-auto">Book Now</p>
                </div>
            </div>
            <div className="m-auto"> <div className="row">
            <div className="border-arrow"></div><AiOutlineArrowRight className="arrow-icon"/>
                </div></div>

        </div>
        </div>

    )
}

export default top;

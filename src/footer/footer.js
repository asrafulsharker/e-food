import React from 'react'
import './footer.css';
import {AiOutlineArrowRight  , AiOutlineTwitter , AiOutlineInstagram} from 'react-icons/ai';
import {FaFacebookF , FaLinkedinIn} from 'react-icons/fa';

import FooterBg from '../images/footer-bg.png';
function footer() {
    return (
        <div className="footer-div">
            <div className="col-md-6 m-auto">
                <p style={{textAlign:"center",fontSize:"36px",fontWeight:"normal",lineHeight:"48px",textTransform:"capitalize",color:"#2E266F"}}>Get notified
                about new amazing products</p>
                <p style={{textAlign:"center",fontSize:"14px",fontWeight:"normal",lineHeight:"24px",textTransform:"capitalize",color:"#707070"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed phasellus senectus. </p>
                <form style={{textAlign:"center"}}>
                    <input className="footer-input"  type="email" placeholder="E-mail"/>
                    <button className="footer-input-btn" type="submit"><AiOutlineArrowRight style={{fontSize:"35px"}}/></button>
                        <div className="col-md-10 m-auto">
                        <div className="row  " >
                        <a  className="m-auto footer-link" href="3">Product</a>
                        <a className="m-auto footer-link" href="3"> Company</a>
                        <a className="m-auto footer-link" href="3">Learn more</a>
                        <a className="m-auto footer-link" href="3"> Get in touch </a>
                    </div>
                        </div>
                </form>
            </div>
            <hr/>
            <div className="col-md-6 ml-auto">
                <div  className="row ">
                    <a className="ml-auto" href="3"><FaFacebookF style={{color:"707070",fontSize:"25px"}} /></a>
                    <a className="ml-auto" href="3"><FaLinkedinIn style={{color:"707070",fontSize:"25px"}} className="ml-auto"/></a>
                   <a className="ml-auto" href="3"> <AiOutlineTwitter style={{color:"707070",fontSize:"25px"}} className="ml-auto"/></a>
                   <a className="ml-auto" href="3"> <AiOutlineInstagram style={{color:"707070",fontSize:"25px"}} className="ml-auto"/></a>
                    <p className="ml-auto"  style={{color:"707070",fontSize:"20px"}}>© 2021 E-Food71 || All Right Reserved</p>
                </div>
                <div className="right-reserved ml-auto">
                    
                </div>
            </div>
        </div>
    )
}

export default footer

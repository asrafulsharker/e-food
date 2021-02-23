import React from 'react'
import './app.css';
import AppPic from '../images/app.png';
import Google from '../images/google-play.png';
import AppStore from '../images/apple-store.png';
function app() {
    return (
        <div className="" style={{padding:"0px 30px 0px 30px"}}>
                    <div className="row">
            <div className="col-md-5 m-auto">
                <p className="app-p">Download app for 
                Exciting Deals
                </p>
                <p className="app-sm-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed phasellus senectus. Ut tellus donec vestibulum tristique leo bibendum in a, tincidunt. </p>
                <div className="row">
                    <img className="col-md-5 app-app" src={Google}/>
                    <img className="col-md-5 app-app" src={AppStore}/>
                </div>
            </div>
            <div className="col-md-7">
                <img style={{width:"100%"}} src={AppPic}/>
            </div>
        </div>
        </div>
    )
}

export default app;

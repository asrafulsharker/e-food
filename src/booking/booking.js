import React from 'react'
import './booking.css';
function booking() {
    return (
        <div className="main-div-booking" style={{padding:"100px"}}>
            <div className="middle-booking ">
                <p className="m-auto" style={{textAlign:"center",borderTop:"15px solid red",width:"290px",fontWeight:"500",fontSize:"36px",textTransform:"lowercase",color:"#2E266F",paddingBottom:"30px"}}>Advance booking</p>
                <form  style={{textAlign:"center"}}>
                    <input style={{border:"0"}} required className="booking-search" type="text" placeholder="Search restrurent"/>
                    <button className="booking-search-btn" type="submit">GO</button>
                    <br></br>
                    <div className="row " style={{padding:"30px 250px"}}>
                    <div className="date m-auto" style={{textAlign:"center"}}>
                     <p style={{lineHeight:"2px" ,fontWeight:"bold"}}>Date</p>
                 <input className="date-time" type="date" id="start" required name="trip-start"
                    value="2021-01-01"
                    min="2021-01-01" max="2022-12-31"/>
                 </div>
                    <div className="time m-auto" style={{textAlign:"center"}}>
                        <p style={{lineHeight:"2px",fontWeight:"bold"}}>Time</p>
                        <input className="date-time" type="time" id="appt" name="appt"/>
                    </div>
                    <div className="people m-auto" style={{textAlign:"center"}}>
                    <p style={{lineHeight:"2px",fontWeight:"bold"}}>People</p>
                    <select className="date-time">
                    <option value="actual value 1">3 People</option>
                    <option value="actual value 2">5 People</option>
                    <option value="actual value 3">7 People</option>
                    <option value="actual value 3">10 People</option>
                    <option value="actual value 3">15 People</option>
                    <option value="actual value 3">20+ People</option>
                    </select>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default booking;

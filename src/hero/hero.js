import React,{useState} from 'react';
import {GoLocation} from 'react-icons/go';
import Carousel from 'react-bootstrap/Carousel'
import Hero1 from '../images/hero1.png';
import './hero.css';
import Nav1 from '../navbar/navbar';
function Hero() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  

    return (
        <div className=" hero-bg"  style={{}}>
            <Nav1/>
            <div className="row">
            <div className="col-md-7">
                <p className="food-p1" style={{fontSize:"150px",color:"#f2f2eb",fontWeight:"bold",padding:"0px 50px 0px 50px"}}>Food</p>
                <p className="food-p2" style={{fontSize:"70px",lineHeight:"70px",padding:"0px 50px 0px 50px",color:"#05225c"}}>Discover Restaurant<br/>& Delicious Food</p>
                <form style={{margin:"50px 0px 50px 0px",padding:"0px 50px 0px 50px"}}>
                <input className="input-search" type="text" placeholder="Search Restaurant,Food"/>
                <button className="input-btn" type="submit" style={{fontWeight:"bold"}} >GO</button>
                </form>
                <p style={{background:"#40c96a",width:"250px",padding:"10px 15px 10px 15px",fontSize:"25px",color:"white",borderRadius:"0px 50px 50px 0px"}}><GoLocation style={{marginRight:"10px",fontSize:"23px"}}/>Dhaka</p>
            </div>
            <div className="col-md-5" >
                <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src={Hero1}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src={Hero1}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src={Hero1}
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

            </div>
            </div>
        </div>
    )
}

export default Hero;

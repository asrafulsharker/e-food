import React from 'react';
import Card from 'react-bootstrap/Card';
import Food1 from '../images/food1.png';
import Food2 from '../images/food2.png';
import Food3 from '../images/food3.png';
import Food4 from '../images/food4.png';
import Food5 from '../images/food5.png';
import Food6 from '../images/food6.png';
import './food.css';
function food() {
    return (
        <div>
            <div className="container" style={{padding:"50px 0px 50px 0px",background:"#FFF5EC"}}>
                <p className="food-p">Explore Our Foods</p>
                <p className="food-sm-p m-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed phasellus senectus. Ut tellus donec vestibulum tristique leo bibendum in a, tincidunt. Volutpat metus id amet.</p>
                <div className="row" style={{padding:"10px 0px 0px 0px"}}>
                    <div className="col-md-4" style={{padding:"10px 5px 10px 5px"}}>
                    <Card className="food-card " style={{borderRadius:"16px"}}>
                    <Card.Img variant="top" src={Food1}  />
                    <Card.Body>
                        <div className="row" style={{padding:"0px 15px"}}>
                            <p style={{color:"#2E266F",fontWeight:"500",fontSize:"24px",lineHeight:"32px"}}>Hand Sandwich</p>
                            <p className="ml-auto" style={{textAlign:"right",color:"#FE043C",fontSize:"24px",lineHeight:"32px",fontWeight:"bold"}}>$10.25</p>
                        </div>
                        <Card.Text style={{fontSize:"14px",lineHeight:"24px",textAlign:"center",color:"#707070"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing. 
                        </Card.Text>
                    </Card.Body>
                </Card>
                    </div>
                    <div className="col-md-4" style={{padding:"10px 5px 10px 5px"}}>
                    <Card className="food-card " style={{borderRadius:"16px"}}>
                    <Card.Img variant="top" src={Food2} />
                    <Card.Body>
                        <div className="row" style={{padding:"0px 15px"}}>
                            <p style={{color:"#2E266F",fontWeight:"500",fontSize:"24px",lineHeight:"32px"}}>Hand Sandwich</p>
                            <p className="ml-auto" style={{textAlign:"right",color:"#FE043C",fontSize:"24px",lineHeight:"32px",fontWeight:"bold"}}>$10.25</p>
                        </div>
                        <Card.Text style={{fontSize:"14px",lineHeight:"24px",textAlign:"center",color:"#707070"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing. 
                        </Card.Text>
                    </Card.Body>
                </Card>
                    </div>
                    <div className="col-md-4" style={{padding:"10px 5px 10px 5px"}}>
                    <Card className="food-card " style={{borderRadius:"16px"}}>
                    <Card.Img variant="top" src={Food3} />
                    <Card.Body>
                        <div className="row" style={{padding:"0px 15px"}}>
                            <p style={{color:"#2E266F",fontWeight:"500",fontSize:"24px",lineHeight:"32px"}}>Hand Sandwich</p>
                            <p className="ml-auto" style={{textAlign:"right",color:"#FE043C",fontSize:"24px",lineHeight:"32px",fontWeight:"bold"}}>$10.25</p>
                        </div>
                        <Card.Text style={{fontSize:"14px",lineHeight:"24px",textAlign:"center",color:"#707070"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing. 
                        </Card.Text>
                    </Card.Body>
                </Card>
                    </div>
                    <div className="col-md-4" style={{padding:"10px 5px 10px 5px"}}>
                    <Card className="food-card " style={{borderRadius:"16px"}}>
                    <Card.Img variant="top" src={Food4} />
                    <Card.Body>
                        <div className="row" style={{padding:"0px 15px"}}>
                            <p style={{color:"#2E266F",fontWeight:"500",fontSize:"24px",lineHeight:"32px"}}>Hand Sandwich</p>
                            <p className="ml-auto" style={{textAlign:"right",color:"#FE043C",fontSize:"24px",lineHeight:"32px",fontWeight:"bold"}}>$10.25</p>
                        </div>
                        <Card.Text style={{fontSize:"14px",lineHeight:"24px",textAlign:"center",color:"#707070"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing. 
                        </Card.Text>
                    </Card.Body>
                </Card>
                    </div>
                    <div className="col-md-4" style={{padding:"10px 5px 10px 5px"}}>
                    <Card className="food-card " style={{borderRadius:"16px"}}>
                    <Card.Img variant="top" src={Food5} />
                    <Card.Body>
                        <div className="row" style={{padding:"0px 15px"}}>
                            <p style={{color:"#2E266F",fontWeight:"500",fontSize:"24px",lineHeight:"32px"}}>Hand Sandwich</p>
                            <p className="ml-auto" style={{textAlign:"right",color:"#FE043C",fontSize:"24px",lineHeight:"32px",fontWeight:"bold"}}>$10.25</p>
                        </div>
                        <Card.Text style={{fontSize:"14px",lineHeight:"24px",textAlign:"center",color:"#707070"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing. 
                        </Card.Text>
                    </Card.Body>
                </Card>
                    </div>
                    <div className="col-md-4" style={{padding:"10px 5px 10px 5px"}}>
                    <Card className="food-card " style={{borderRadius:"16px"}}>
                    <Card.Img variant="top" src={Food6} />
                    <Card.Body>
                        <div className="row" style={{padding:"0px 15px"}}>
                            <p style={{color:"#2E266F",fontWeight:"500",fontSize:"24px",lineHeight:"32px"}}>Hand Sandwich</p>
                            <p className="ml-auto" style={{textAlign:"right",color:"#FE043C",fontSize:"24px",lineHeight:"32px",fontWeight:"bold"}}>$10.25</p>
                        </div>
                        <Card.Text style={{fontSize:"14px",lineHeight:"24px",textAlign:"center",color:"#707070"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing. 
                        </Card.Text>
                    </Card.Body>
                </Card>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default food;

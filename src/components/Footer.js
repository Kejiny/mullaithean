import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

function Footer(props) {
    return(
        <div className="footer">
            <div className="container">
                {/* <div className="row justify-content-center">             
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>    </h5>
                        <ul className="list-unstyled">
                          
                            <li><Link to="/about">About Us</Link></li>
                        
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                         
                    <br />
                        Kilinochchi<br />
                    
                        <i className="fa fa-phone fa-lg"></i>: 0779996621<br />
                        
                        <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:mullaithean.shop@gmail.com">
                            Mullai Thean</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                          
                            <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/Mullai-Thean-107066021129447"><i className="fa fa-facebook"></i></a>

                            <a className="btn btn-social-icon" href="https://www.instagram.com/mullaithean/"><i className="fa fa-instagram"></i></a>
                        </div>
                    </div>
                </div> */}
                <div className="float-left">
                <h5>Our Address</h5>
                <i className="fa fa-phone fa-lg"></i>: 0779996621<br />
                        
                        <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:mullaithean.shop@gmail.com">
                            Mullai Thean</a>          
                            </div> 
<br></br>
              <div className="float-right">
                
                          
                         <Link to="/about">About Us</Link><br></br>
                      
                          <Link to="/contact">Contact Us</Link>
                     
                </div>
              <div>
                  
              </div>
                <div className="row justify-content-center">             
                    <div className="col-auto">
                   
                            <a className="btn btn-social-icon btn-facebook Extra Large" href="https://www.facebook.com/Mullai-Thean-107066021129447"><i className="fa fa-facebook"></i></a>

                            <a className="btn btn-social-icon- Extra Large " href="https://www.instagram.com/mullaithean/"><i className="fa fa-instagram" size="large"></i></a>
                        <p>© Copyright 2020 Mullai Thean</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;






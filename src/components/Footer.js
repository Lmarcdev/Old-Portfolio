import "./FooterStyles.css"

import React from 'react'
import { FaLinkedin, FaTwitter, FaFacebook, FaHome, FaMailBulk, FaPhone } from "react-icons/fa"
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"white", marginRight:"2rem"}}/>
                   <div>
                    <p>123 Housing Society</p>
                    <p>England.</p>
                   </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"white", marginRight: "2rem"}}/>
                    1-1232-321-32</h4>

                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"white", marginRight: "2rem"}}/>
                    info@gmail.com</h4>

                </div>
            </div>
            <div className="right">
                <h4>About the company</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                
                </p>
                <div className="social">
                <FaFacebook
                    size={30}
                    style={{color:"white",
                    marginRight:"1rem"}}
                    />
                <FaTwitter
                    size={30}
                    style={{color:"white",
                    marginRight:"1rem"}}
                    />
                <FaLinkedin
                    size={30}
                    style={{color:"white",
                    marginRight:"1rem"}}
                    />
                    <i class="fa fa-linkedin"></i>
                </div>
            </div><i class="fa fa-linkedin"></i>
        </div>
    </div>
  )
}

export default Footer
import "./HeroImgStyles.css";
import React from 'react'
import IntroImg from "../assets/intro-bg.jpeg";
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
   <div className="hero">
      <div className="mask">
        <img className="into-img" src=
        {IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I'M A FREELANCER.</p>
        <h1>Luca Marconi.
          <h2>Thank you for being interested in viewing my work as a Web Developer! If you are looking to collab with me or just want to explore my best projects, you are in the right place!</h2>
        </h1>
        
        <div>
          <Link to="/project"
          className="btn">Projects</Link>
          <Link to="/contact"
          className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
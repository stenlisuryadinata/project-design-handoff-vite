import React from 'react';
import aboutUsImage from '../assets/image/aboutUs.png';
import LogoSVG from '../assets/image/logotype.svg';
import '../styles/navBar.css';
import { Link } from 'react-router-dom';
import { OurYoga } from "./ouryoga.jsx";


export const HomePage = () => {
  return (
    <div>
      <div className="aboutus-image-wrapper">
        <div className="navbar-image">
          {/* <div className="navbar-wrapper">
            <img src={LogoSVG} alt="logo" />
            <div className="navBar-list">
              <Link to="/AboutUsImage"  className="navBar_1">ABOUT US</Link>
              <span className="navBar_2">EXPLORE</span>
              <span className="navBar_3">SCHEDULE</span>
              <span className="navBar_4">PRICES</span>
            </div>
          </div> */}
          <div className="aboutus-text">
            <div className="aboutus-text-wrapper">
              <h1 className="aboutus-text-head">Your Journey to inner balance begins here</h1>
              <div className="aboutus-text-wrapper-2">
                <h2 className="aboutus-text-subhead">
                  With us, yoga is for everyone, whether you are an experienced yogini. Welcome to a place where you belong!
                </h2>
              </div>

              <div>
                <button className="discover-button">Discover our studios</button>
                <button className="login-button">Log in</button>
              </div>
            </div>
            <img className="aboutus-image" src={aboutUsImage} alt="about us" />
          </div>
        </div>
      </div>
    </div>
    
  );
};






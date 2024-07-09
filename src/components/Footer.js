import React from 'react';
import './Footer.css';
import logo from '../images/JewelBOX.png'; 
import twitterIcon from '../images/twitter.svg';
import facebookIcon from '../images/facebook.svg'; 
import instagramIcon from '../images/instagram.svg'; 
import vector1 from '../images/vector-1.svg'
import vector3 from '../images/vector-3.svg'

const Footer = () => {
  return (
    <footer className="footer">
     <div className="vector1" > 
         <img src={vector1} alt="vector 1" />
     </div>
     <div>
      <div className="footer-top">
        <img src={logo} alt="JewelBOX Logo" className="footer-logo" />
        <div className="social-icons">
          <img src={twitterIcon} alt="Twitter" className="icon" />
          <img src={facebookIcon} alt="Facebook" className="icon" />
          <img src={instagramIcon} alt="Instagram" className="icon" />
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h4>Help</h4>
          <ul>
            <li>Shipping</li>
            <li>Returns & Exchanges</li>
            <li>Warranty</li>
            <li>FAQs</li>
            <li>Customer Service</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Our Services</h4>
          <ul>
            <li>Membership</li>
            <li>Style Guide</li>
            <li>Product Care</li>
            <li>Product Authentication</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>About JewelBOX</h4>
          <ul>
            <li>Who we are</li>
            <li>Where we are</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact us</h4>
          <p>Phone: +234 700 100 0000</p>
          <p>Email: help@jewelbox.com</p>
        </div>
      </div>
     </div>
     <div className="vector2">
     <img src={vector3} alt="vector 2"  />
     </div>
    </footer>
  );
}

export default Footer;

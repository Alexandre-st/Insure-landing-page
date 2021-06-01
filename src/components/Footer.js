/* eslint-disable jsx-a11y/anchor-is-valid */
// == Import npm
import React from 'react';

// == Import local
import logo from '../assets/img/logo.svg';
import iconFacebook from '../assets/img/icon-facebook.svg';
import iconTwitter from '../assets/img/icon-twitter.svg';
import iconPinterest from '../assets/img/icon-pinterest.svg';
import iconInstagram from '../assets/img/icon-instagram.svg';
import bgMobileFooter from '../assets/img/bg-pattern-footer-mobile.svg';
import bgMobileDesktop from '../assets/img/bg-pattern-footer-desktop.svg';

const Footer = () => {
  return ( 
    <footer id="footer" className="grid">
      <div className="background">
        <img src={bgMobileFooter} alt="Pattern background" />
      </div>
      <img className="desktop" src={bgMobileDesktop} alt="Pattern background" />      
      <div className="footer">
      
        <div className="footer-header">
          <a href="#" className="logo">
            <img src={logo} alt="Logo INSURE" className="logo" />
          </a>

          <ul className="footer-social">
            <li><img src={iconFacebook} alt="Icon de facebook" /></li>
            <li><img src={iconTwitter} alt="Icon de twitter" /></li>
            <li><img src={iconPinterest} alt="Icon de Pinterest" /></li>
            <li><img src={iconInstagram} alt="Icon d'instagram" /></li>
          </ul>
        </div>

        <div className="footer-container">
        <div className="footer-link">
          <h4>OUR COMPANY</h4>
          <ul>
            <li>how we work</li>
            <li>why insure?</li>
            <li>check price</li>
            <li>reviews</li>
          </ul>
        </div>

        <div className="footer-link">
          <h4>HELP ME</h4>
          <ul>
            <li>faq</li>
            <li>terms of use</li>
            <li>privacy policy</li>
            <li>cookies</li>
          </ul>
        </div>

        <div className="footer-link">
          <h4>CONTACT</h4>
          <ul>
            <li>sales</li>
            <li>support</li>
            <li>live chat</li>
          </ul>
        </div>

        <div className="footer-link">
          <h4>OTHERS</h4>
          <ul>
            <li>carerrs</li>
            <li>press</li>
            <li>licenses</li>
          </ul>
        </div>
        </div>
        
      </div>
    </footer>
  
  );
} 
export default Footer;

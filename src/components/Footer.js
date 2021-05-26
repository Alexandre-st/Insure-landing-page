// == Import npm
import React from 'react';

// == Import local
import iconFacebook from '../assets/img/icon-facebook.svg';
import iconTwitter from '../assets/img/icon-twitter.svg';
import iconPinterest from '../assets/img/icon-pinterest.svg';
import iconInstagram from '../assets/img/icon-instagram.svg';

const Footer = () => {
  return ( 
    <footer className="grid">
      <div className="footer">

        <h2>INSURE</h2>

        <ul className="footer-social">
          <li><img src={iconFacebook} alt="Icon de facebook" /></li>
          <li><img src={iconTwitter} alt="Icon de twitter" /></li>
          <li><img src={iconPinterest} alt="Icon de Pinterest" /></li>
          <li><img src={iconInstagram} alt="Icon d'instagram" /></li>
        </ul>

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
    </footer>
  
  );
} 
export default Footer;

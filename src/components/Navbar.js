/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
// == Import npm
import React, { useState } from 'react';

// == Import local
import logo from '../assets/img/logo.svg'
import iconHamburger from '../assets/img/icon-hamburger.svg';
import iconClose from '../assets/img/icon-close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  
  const Toggle = () => {
    if (menu === false) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };

  return ( 
    <nav className="navbar grid">
      <a className="navbar-logo" href="#"><img src={logo} alt="Logo Insure" /></a>

      <ul className="navbar-menu">
        {/* <li><a href="#">How we work</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Account</a></li
        <li><a href="#">View Plans</a></li> */}
      </ul>

        {/* Menu Icon */}
        {/* <div className="menuIcon">
          <span className="icon icon-bars"><img src={iconHamburger} alt="" /></span>
          <span className="icon icon-bars overlay"><img src={iconClose} alt="" /></span>
        </div> */}

        {/* Navbar menu */}
        <div className="menuIcon" onClick={Toggle}>
          {!menu && 
            <span className="icon icon-bars">
              <img src={iconHamburger} alt="" />
            </span>
          }
          {menu && 
              <span className="icon icon-bars overlay">
                <img src={iconClose} alt="" />
              </span>
          }
          </div>

        {/* Overlay Menu */}
        {/* <div className="overlay-menu">
          <ul id="menu">
            <li><a href="#"></a>How we work</li>
            <li><a href="#"></a>Blog</li>
            <li><a href="#"></a>Account</li>
          </ul>
        </div> */}
    </nav>
   );
}
 
export default Navbar;
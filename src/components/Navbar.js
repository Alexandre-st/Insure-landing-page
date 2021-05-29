/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
// == Import npm
import React, { useState } from 'react';

// == Import local
import logo from '../assets/img/logo.svg'
import iconHamburger from '../assets/img/icon-hamburger.svg';
import iconClose from '../assets/img/icon-close.svg';
import background from '../assets/img/bg-pattern-mobile-nav.svg';

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
      <a href="#" className="logo">
        <img src={logo} alt="Logo Insure" />
      </a>

        {/* Navbar menu */}
        <div className="menuIcon" onClick={Toggle}>
          {!menu && 
            <span className="icon icon-bars">
              <img src={iconHamburger} alt="" />
            </span>
          }
          {menu && 
            <div>
              <span className="icon icon-bars overlay">
                <img src={iconClose} alt="" />
              </span>

              <ul className="menu">
                <li><a href="#"></a>How we work</li>
                <li><a href="#"></a>Blog</li>
                <li><a href="#"></a>Account</li>
                <li><a href="#"></a>View Plans</li>
                
                <span><img src={background} alt="" /></span>
              </ul>
            </div>
          }
          </div>
    </nav>
   );
}
 
export default Navbar;
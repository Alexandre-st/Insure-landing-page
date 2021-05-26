// == Import npm
import React from 'react';

const Navbar = () => {
  return ( 
    <nav className="navbar grid">
      <h1>INSURE</h1>

      <ul className="navbar-menu">
      {/* eslint-disable-next-line */}
        <li><a href="#">How we work</a></li>
        {/* eslint-disable-next-line */}
        <li><a href="#">Blog</a></li>
        {/* eslint-disable-next-line */}
        <li><a href="#">Account</a></li>
        {/* eslint-disable-next-line */}
        <li><a href="#">View Plans</a></li>
      </ul>

      {/* <ul className="navbar-dropdown">

      </ul> */}
    </nav>
   );
}
 
export default Navbar;
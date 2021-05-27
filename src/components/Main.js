// == Import npm 
import React from 'react';

// == Import local
import flash from '../assets/img/icon-snappy-process.svg';
import dollar from '../assets/img/icon-affordable-prices.svg';
import personn from '../assets/img/icon-people-first.svg';
 

const Main = () => {
  return ( 
    <section id="main" className="grid">
    
    <span></span>
    <h2>We're different</h2>

    <div className="main-text">
      <img src={flash} alt="Icon d'un éclair" />
      <h3>Snappy Process</h3>
      <p>Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.</p>
    </div>

    <div className="main-text">
      <img src={dollar} alt="Icon du dollar" />
      <h3>Affordable Prices</h3>
      <p>We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
    </div>

    <div className="main-text">
      <img src={personn} alt="Icon d'une personne" />
      <h3>People First</h3>
      <p>Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.</p>
    </div>

    </section>
  );
}
 
export default Main;
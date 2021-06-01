// == Import npm
import React from 'react';

const Banner = () => {
  return ( 
    <section id="banner">

    {/* <div>
      <img className="banner-mobile" src={bgMobile} alt="Pattern Mobile" />
      <img className="banner-desktop" src={bgDesktop} alt="Pattern Desktop" />
    </div> */}

      <div className="banner-container">
        <h2>Find out more about how we work</h2>
        
        <button className="button">How we work</button>
      </div>

    </section>
  );
}
 
export default Banner;
// == Import npm
import React from 'react';

// == Import local 
import IntroDesktop from '../assets/img/image-intro-desktop.jpg';
import mPatternLeft from '../assets/img/bg-pattern-intro-left-mobile.svg';

const Welcome = () => {
  return ( 
    <section id="welcome" className="grid">

      <div className="welcome-mobile">
        <img src={IntroDesktop} alt="Famille heureuse" />
        <img className="welcome-pattern-left" src={mPatternLeft} alt="Pattern Left" />
      </div>

           
      <div className="welcome-text">
        <h2 className="welcome-text-title">Humanizing your insurance.</h2>
        
        <p className="welcome-text-paragraph">
          Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.
        </p>

        <button className="welcome-text-button button">VIEW PLANS</button>
        
      </div>

    </section>
   );
}
 
export default Welcome;
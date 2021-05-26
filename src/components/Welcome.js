// == Import npm
import React from 'react';

// == Import local 
import BackgroundPhone from '../assets/img/image-intro-mobile.jpg';
import BackgroundDesktop from '../assets/img/image-intro-desktop.jpg';

const Welcome = () => {
  return ( 
    <section id="welcome" className="grid">

      <div className="welcome-text">
        <img className="welcome-mobile" src={BackgroundPhone} alt="Famille heureuse" />

        <h2>Humanizing your insurance</h2>
        
        <p className="welcome-text-paragraph">Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
        <img className="welcome-mobile" src={BackgroundDesktop} alt="Famille heureuse" />
        <button className="button"></button>
      </div>

    </section>
   );
}
 
export default Welcome;
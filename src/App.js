// == Import npm
import React from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';

const App = () => {
  return ( 
    <>
    <Navbar />
    <Welcome />
    <Main />
    <Banner />
    <Footer />
    </>
   );
}
 
export default App;
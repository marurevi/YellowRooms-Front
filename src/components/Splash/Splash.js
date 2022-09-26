import React from 'react';
import SignUp from '../SignUp/SignUp';
import Footer from '../Footer/Footer';
import mainLogo from '../../img/YELLOW-3.png';
import './Splash.css';
import LogIn from '../SignUp/LogIn';

const Splash = () => (
  <section className="splash-page">
    <img src={mainLogo} alt="mainLogo" className="mainLogo" />
    <LogIn />
    <SignUp />
    <Footer />
  </section>
);

export default Splash;

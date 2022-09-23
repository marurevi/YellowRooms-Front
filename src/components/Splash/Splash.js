import React, { useState } from 'react';
import SignUp from '../SignUp/SignUp';
import Footer from '../Footer/Footer';
import mainLogo from '../../img/YELLOW-3.png';
import './Splash.css';
import LogIn from '../SignUp/LogIn';

const Splash = () => {
  const [style1, setStyle1] = useState('inactive');
  const [style2, setStyle2] = useState('inactive');
  const activeRegisterModal1 = () => {
    const splashBody = document.querySelector('.mainContentSplash');
    setStyle1('active');
    splashBody.classList.toggle('blur');
  };
  const activeRegisterModal2 = () => {
    const splashBody = document.querySelector('.mainContentSplash');
    setStyle2('active');
    splashBody.classList.toggle('blur');
  };

  return (
    <section className="splash-page">
      <div className="mainContentSplash">
        <img src={mainLogo} alt="mainLogo" className="mainLogo" />
        <button className="registerBtn" id="loginBtn" type="button" onClick={activeRegisterModal1}>
          LOGIN
        </button>
        <button className="registerBtn" id="signBtn" type="button" onClick={activeRegisterModal2}>
          REGISTER
        </button>
      </div>
      <LogIn style={style1} />
      <SignUp style={style2} />
      <Footer />
    </section>
  );
};

export default Splash;

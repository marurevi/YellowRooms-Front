import React from 'react';
import '../Splash/Splash.css';

const Footer = () => {
  const profiles = {
    Mariana: 'https://github.com/marurevi',
    Andres: 'https://github.com/anagudelogu',
    Axel: 'https://github.com/AxelSoler',
    Tadesse: 'https://github.com/Tadesse-Alemayehu',
  };

  return (
    <footer className="footer">
      <li className="profile">Microverse Final Capstone Team</li>
      <ul className="ulProfile">
        {
        Object.entries(profiles).map((key) => {
          const name = key[0];
          const mail = key[1];
          return (
            <li key={name}>
              <a
                className="profile"
                href={mail}
                target="_blank"
                rel="noopener noreferrer"
              >
                {name}
              </a>
            </li>
          );
        })
      }
      </ul>
    </footer>
  );
};

export default Footer;

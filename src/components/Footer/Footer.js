import React from 'react';
import '../Splash/Splash.css';

const Footer = () => {
  const marianaGithub = 'https://github.com/marurevi';
  const andresGithub = 'https://github.com/anagudelogu';
  const axelGithub = 'https://github.com/AxelSoler';
  const tadesseGithub = 'https://github.com/Tadesse-Alemayehu';

  return (
    <footer className="footer">
      <li className="profile">Microverse Final Capstone Team</li>
      <ul className="ulProfile">
        <li>
          <a
            className="profile"
            href={marianaGithub}
            target="_blank"
            rel="noopener noreferrer"
          >
            Mariana
          </a>
        </li>
        <li>
          <a
            className="profile"
            href={andresGithub}
            target="_blank"
            rel="noopener noreferrer"
          >
            Andres
          </a>
        </li>
        <li>
          <a
            className="profile"
            href={axelGithub}
            target="_blank"
            rel="noopener noreferrer"
          >
            Axel
          </a>
        </li>
        <li>
          <a
            className="profile"
            href={tadesseGithub}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tadesse
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

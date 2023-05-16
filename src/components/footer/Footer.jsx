import React from "react";
import resume from '../../assets/Baby_Gupta_Resume.pdf';
import './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">BABY GUPTA</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skill
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              Project
            </a>
          </li>
          <li>
            <a href="#github" className="footer__link">
              Git
            </a>
          </li>
          <li>
            <a href={resume} rel="noreferrer" target="_blank" className="footer__link">
              Resume
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              contact
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/baby-gupta-14a30126b/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/BabyGupta05"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-github "></i>
          </a>
          <a
            href="https://wa.me/8766946031"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-whatsapp"></i>
          </a>
          <a
            href="https://discord.com/users/baby05
#3276"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-discord-alt"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

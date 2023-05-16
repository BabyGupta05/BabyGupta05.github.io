import React, { useState } from "react";
import resume from '../../assets/Baby_Gupta_Resume.pdf';
import "./header.css";
const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [toggle, showMenu] = useState(false);
  const [active, setActive] = useState("#home");
  return (
    <header className="header" id="nav-menu">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          BABY GUPTA
        </a>
        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" onClick={()=>setActive('#home')} className={active==='#home'?"nav__link active-link nav-link home":"nav__link nav-link home"}>
                <i className="uil uil-estate nav__icon"> </i>Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" onClick={()=>setActive('#about')} className={active==='#about'?"nav__link active-link nav-link about":"nav__link nav-link about"}>
                <i className="uil uil-user nav__icon"> </i>About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={()=>setActive('#Skills')} className={active==='#Skills'?"nav__link active-link nav-link skills":"nav__link nav-link skills"}
              >
                <i className="uil uil-file-alt nav__icon"> </i>Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#projects"
                onClick={()=>setActive('#Projects')} className={active==='#Projects'?"nav__link active-link nav-link projects":"nav__link nav-link projects"}
              >
                <i className="uil uil-briefcase nav__icon"> </i>Projects
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#github"
                onClick={()=>setActive('#git')} className={active==='#git'?"nav__link active-link nav-link git":"nav__link nav-link git"}
              >
                <i className="uil uil-github-alt nav__icon"> </i>GitHub
              </a>
            </li>
            <li className="nav__item">
              <a
                href={resume} rel="noreferrer" target="_blank" onClick={()=>setActive('#resume')} className={active==='#resume'?"nav__link active-link nav-link resume":"nav__link nav-link resume"}
              >
                <i className="uil uil-file-alt nav__icon"> </i>Resume
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={()=>setActive('#contact')} className={active==='#contact'?"nav__link active-link nav-link contact":"nav__link nav-link contact"}
              >
                <i className="uil uil-message nav__icon"> </i>Contact
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;

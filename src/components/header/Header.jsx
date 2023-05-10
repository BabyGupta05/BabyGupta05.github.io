import React,{useState} from 'react'
import './header.css'
const Header = () => {
    const [toggle,showMenu]=useState(false);
  return (
    <header className="header" id='nav-menu'>
        <nav className='nav container'>
            <a href="index.html" className='nav__logo'>BABY GUPTA</a>
            <div className={toggle?"nav__menu show-menu":"nav__menu"}>
                <ul className='nav__list grid'>
                    <li className='nav__item'>
                        <a href="#home" className='nav__link active-link nav-link home'>
                            <i className='uil uil-estate nav__icon'> </i>Home
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href="#about" className='nav__link active-link nav-link about'>
                            <i className='uil uil-user nav__icon'> </i>About
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href="#Skills" className='nav__link active-link nav-link skills'>
                            <i className='uil uil-file-alt nav__icon'> </i>Skills
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href="#Projects" className='nav__link active-link nav-link projects'>
                            <i className='uil uil-briefcase nav__icon'> </i>Projects
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href="#contact" className='nav__link active-link nav-link contact'>
                            <i className='uil uil-message nav__icon'> </i>Contact
                        </a>
                    </li>
                </ul>
                <i className='uil uil-times nav__close' onClick={()=>showMenu(!toggle)}></i>
            </div>
            <div className="nav__toggle" onClick={()=>showMenu(!toggle)}>
                <i class="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header
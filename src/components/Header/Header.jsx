import React, { useState } from 'react';
import "./Header.css";

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

  return (
    <header className='header'>
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Ye Huang</a>

            <div className={showMenu ? 'nav__menu show-menu' : "nav__menu"}>
                <ul className='nav__list grid'>
                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link">
                            <i className="uil uil-estate nav__icon"></i> Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" className="nav__link active-link">
                            <i className="uil uil-user nav__icon"></i> About
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" className="nav__link active-link">
                            <i className="uil uil-file nav__icon"></i> Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" className="nav__link active-link">
                            <i className="uil uil-estate nav__icon"></i> Contact
                        </a>
                    </li>
                </ul>

                <i className="uil uil-times nav__close" onClick={() => {setShowMenu(!showMenu);}}></i>
            </div>

            <div className="nav__toggle" onClick={() => {setShowMenu(!showMenu);}}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  );
};

export default Header;
import React from 'react';

function Navbar() {
  return (
    <header className="header navbar-fixed-top">
        <nav className="navbar" role="navigation">
            <div className="container">
                <div className="menu-container js_nav-item">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="toggle-icon"></span>
                    </button>
                </div>

                <div className="collapse navbar-collapse nav-collapse">
      asdf
                    <div className="menu-container">
                        <ul className="nav navbar-nav navbar-nav-right">
                            <li className="js_nav-item nav-item"><a className="nav-item-child nav-item-hover" href="#body">Home</a></li>
                            <li className="js_nav-item nav-item"><a className="nav-item-child nav-item-hover" href="#about">About</a></li>
                            <li className="js_nav-item nav-item"><a className="nav-item-child nav-item-hover" href="#experience">Skills</a></li>
                            <li className="js_nav-item nav-item"><a className="nav-item-child nav-item-hover" href="#experience">Background</a></li>
                            <li className="js_nav-item nav-item"><a className="nav-item-child nav-item-hover" href="#experience">Blog</a></li>
                            <li className="js_nav-item nav-item"><a className="nav-item-child nav-item-hover" href="#work">Work</a></li>
                            <li className="js_nav-item nav-item"><a className="nav-item-child nav-item-hover" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  );
}

export default Navbar;

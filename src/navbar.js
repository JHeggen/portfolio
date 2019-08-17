import React from 'react';

const sections = [ 'Home', 'About', 'Skills', 'Background', 'Blog', 'Work', 'Contact' ];

const toLower = function(x){ 
  return x.toLowerCase();
};

const listItems = sections.map((section, i) =>
  <li key={i} className="js_nav-item nav-item"><a className="nav-item-child nav-item-hover" href={`#`+toLower(section)}>{section}</a></li>
);

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
                    <div className="menu-container">
                        <ul className="nav navbar-nav navbar-nav-right">
                            {listItems}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  );
}

export default Navbar;

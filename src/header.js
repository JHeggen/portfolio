import React from 'react';

const links = [ 
    {name: 'linkedin', url: 'https://www.linkedin.com/in/sonyamoisset/'},
    {name: 'github', url: 'https://github.com/SonyaMoisset'},
    {name: 'twitter', url: 'https://twitter.com/SonyaMoisset'},
    {name: 'medium', url: 'https://medium.com/@sonya.moisset'}
];

const listLinks = links.map((link, i) =>
    <li key={i}><a href={link.url} target="_blank" rel="noopener noreferrer"> <i className={"fa fa-3x fa-" + link.name} aria-hidden="true"></i></a></li>
);

function Header() {
  return (
        <div className="promo-block parallax-window" data-parallax="scroll" data-image-src="https://sonyamoisset.github.io/img/bg.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="promo-block-divider">
                            <h1 className="text-left promo-block-title">Jonathan <br/> Heggen</h1>
                            <p className="text-left promo-block-text">Full Stack JavaScript Mary Sue &amp; Tech Advocate</p>
                        </div>
                        <ul className="text-left list-inline">
                            {listLinks}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Header;

import React from 'react';

function Header(props) {

    const size = '3';

    const listLinks = (props.links).map((link, i) =>
        <li key={i}><a href={link.url} target="_blank" rel="noopener noreferrer"> <i className={"fa fa-"+ size +"x fa-" + link.name} aria-hidden="true"></i></a></li>
    );

  return (
        <div className="promo-block parallax-window" data-parallax="scroll" data-image-src={require("./img/bg.jpg")}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="promo-block-divider">
                            <h1 className="text-left promo-block-title">Jonathan <br/> Heggen</h1>
                            <p className="text-left promo-block-text">Full Stack JavaScript / PHP Engineer</p>
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

import React from 'react';

const links = [ 
    {name: 'linkedin', url: 'https://www.linkedin.com/in/jonathan-heggen-8b5637152/'},
    {name: 'github', url: 'https://github.com/JHeggen'}
];

const listLinks = links.map((link, i) =>
    <li key={i}><a href={link.url} rel="noopener noreferrer" target="_blank"> <i className={"fa fa-2x fa-" + link.name} aria-hidden="true"></i></a></li>
);

function Contact() {
  return (
    <div id="contact">
        <div className="bg-color-sky-light">
            <div className="container content-lg">
                <div className="row">
                    <div className="col-sm-3 sm-margin-b-30">
                        <div className="text-right sm-text-left">
                            <h2 className="margin-b-0">Contact</h2>
                            <p>Looking for new exciting opportunites. Hire me!</p>
                        </div>
                    </div>
                    <div className="col-sm-8 col-sm-offset-1">
                        <div className="row">
                            <div className="col-md-3 col-xs-6 md-margin-b-30">
                                <h5>Location</h5>
                                <p>London, United Kingdom</p>
                            </div>
                            <div className="col-md-3 col-xs-6 md-margin-b-30">
                                <h5>Email</h5>
                                <a href="mailto:#">jonathan.heggen@gmail.com</a>
                            </div>
                            <div className="col-md-3 col-xs-6">
                                <h5>Social Media</h5>
                                <ul className="list-inline">
                                    {listLinks}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Contact;

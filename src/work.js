import React from 'react';

var outerStyle = {
    position: 'relative',
    height: '678.343px'
};

const projects = [
    {
        imageSrc: require("./img/portfolio/fraser_park_restaurant.png"),
        title: 'Fraser Park Restaurant',
        subtitle: 'Single-page web site displaying menu, story, and contact info',
        description: 'This is where it all started -- my first real client, who challenged me to create a clean, modern and easily navigable website.',
        link: 'http://fraserparkrestaurant.com/',
        linkName: 'fraserparkrestaurant.com',
        technology: 'HTML5, Bootstrap, Javascript, CSS3, PHP (contact form)'
    },
    {
        imageSrc: require("./img/portfolio/mecinco.png"),
        title: 'Mecinco',
        subtitle: 'Business information website',
        description: 'Worked together with the client to design this page exactly to their requirements, as well as designing logos and branding.',
        link: 'http://mecinco.com/',
        linkName: 'mecinco.com',
        technology: 'HTML5, Bootstrap, Javascript, CSS3, Adobe Photoshop, PHP (contact form)'
    },
    {
        imageSrc: require("./img/portfolio/boxwood.png"),
        title: 'The Boxwood Review',
        subtitle: 'News / fiction webpage',
        description: 'A passion project that unfortunately is now defunct, I designed the layout of the site myself with inspiration from larger newssites.',
        link: '',
        linkName: '[No longer active]',
        technology: 'HTML5, Javascript, CSS3, PHP'
    },
    {
        imageSrc: require("./img/portfolio/jonathan_heggen.png"),
        title: 'Online portfolio page',
        subtitle: 'This website!',
        description: 'I started this project as a challenge to teach myself React / Redux.',
        link: 'http://jonathanheggen.com/',
        linkName: 'jonathanheggen.com',
        technology: 'HTML5, React JS, Javascript, JS Libraries including Bootstrap, CSS3'
    }
];  

const listProjects = projects.map((project, i) =>
    <div key={i} className="masonry-grid-item col-xs-12 col-sm-6 margin-b-30">
        <div className="work work-popup-trigger">
            <div className="work-overlay">
                <img className="full-width img-responsive" src={project.imageSrc} alt="Portfolio"/>
            </div>
            <div className="work-popup-overlay">
                <div className="work-popup-content">
                    <a href='#work' className="work-popup-close">Hide</a>
                    <div className="margin-b-30">
                        <h3 className="margin-b-5">{project.title}</h3>
                        <span>{project.subtitle}</span>
                    </div>
                    <div className="row">
                        <div className="col-sm-8 work-popup-content-divider sm-margin-b-20">
                            <div className="margin-t-10 sm-margin-t-0">
                                <p>{project.description}</p>
                                <p>Link: <a href={project.link} target='"_blank"' rel="noopener noreferrer">{project.linkName}</a></p>
                                <ul className="list-inline work-popup-tag">
                                    <li className="work-popup-tag-item"><a className="work-popup-tag-link" href="/#">Design,</a></li>
                                    <li className="work-popup-tag-item"><a className="work-popup-tag-link" href="/#">Coding,</a></li>
                                    <li className="work-popup-tag-item"><a className="work-popup-tag-link" href="/#">Portfolio</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="margin-t-10 sm-margin-t-0">
                                <p className="margin-b-5"><strong>Tech:</strong> {project.technology}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

function Work() {

  return (
    <div id="work">
        <div className="section-seperator">
            <div className="content-md container">
                <div className="row margin-b-40">
                    <div className="col-sm-6">
                        <h2>Portfolio</h2>
                        <p>Some of my favorite projects that I've built.</p>
                    </div>
                </div>
                <div className="masonry-grid row" style={outerStyle}>
                    <div className="masonry-grid-sizer col-xs-6 col-sm-6 col-md-1"></div>
                    {listProjects}
                </div>
            </div>
        </div>
    </div>
  );

}

export default Work;

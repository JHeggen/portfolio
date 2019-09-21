import React from 'react';

var containerDivStyle = {
    position: 'relative',
    height: '554.328px'
};

var imgStyle = {
    visibility: 'visible',
    animationDelay: '0.2s',
    animationName: 'fadeInUp'
};

const divStyle = function(x) { 
    return {
        position: 'absolute',
        left: x,
        top: '0px'
    };
};

const sections = [ 
    {
        name: 'UX / UI', 
        leftStyle: divStyle('0%'),
        image: require("../img/intro/01.jpg"),
        wowDelay: '.2s',
        text: 'UX design is so much more than filling in a few wireframes -- I care about better UX because it means better retention, a pleasing experience, and happy customers.'
    },
    {
        name: 'Product', 
        leftStyle: divStyle('33.299%'),
        image: require("../img/intro/02.jpg"),
        wowDelay: '.3s',
        text: 'What keeps a customer coming back? I am a student of good product design, and that means constantly striving to learn exactly what a user needs.'
    },
    {
        name: 'Efficiency', 
        leftStyle: divStyle('66.5979%'),
        image: require("../img/intro/03.jpg"),
        wowDelay: '.4s',
        text: 'Nobody likes staring at loading pages. From good, clean queries to efficient analytics, speed and program architecture are paramount when I develop a product.' 
    }
];

const listSections = sections.map((section, i) => 
    <div key={i} className="masonry-grid-item col-xs-12 col-sm-6 col-md-4 sm-margin-b-30" style={section.leftStyle}>
    {i % 2 !== 0 ? <img className="full-width img-responsive wow fadeInUp animated" src={section.image} alt="Portfolio" data-wow-duration=".3" data-wow-delay={section.wowDelay} style={imgStyle}/> : ''}
    <div className="margin-b-60">
        <br/>
        <h2>{section.name}</h2>
        <p>{section.text}</p>
    </div>
    {i % 2 === 0 ? <img className="full-width img-responsive wow fadeInUp animated" src={section.image} alt="Portfolio" data-wow-duration=".3" data-wow-delay={section.wowDelay} style={imgStyle}/> : ''}
    </div>
);

function Coding() {
  return (
    <div className="content-lg container">
        <div className="masonry-grid row" style={containerDivStyle}>
            <div className="masonry-grid-sizer col-xs-6 col-sm-6 col-md-1"></div>
            {listSections}
        </div>
    </div>
  );
}

export default Coding;

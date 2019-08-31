import React from 'react';

var containerDivStyle = {
    position: 'relative',
    height: 'height: 554.328px'
};
var imgStyle = {
    visibility: 'visible',
    animationDelay: '0.2s',
    animationName: 'fadeInUp'
};

const divStyle = function(x){ 
    var innerDivStyle = {
        position: 'absolute',
        left: x,
        top: '0px'
    };
    return innerDivStyle;
  };

const sections = [ 
    {
        name: 'Coding', 
        leftStyle: divStyle('0%'),
        image: 'https://sonyamoisset.github.io/img/about/01.jpg',
        wowDelay: '.2s',
        text: 'I am constantly pursuing my passion to learn more about programming languages (C#, Java, Python, Ruby, Kotlin, Elixir), frameworks (React, Angular, Vue, Laravel, Rails, Django, Phoenix) and techniques in order to become a more well-rounded Software Engineer.'
    },
    {
        name: 'Challenges', 
        leftStyle: divStyle('33.299%'),
        image: 'https://sonyamoisset.github.io/img/about/02.jpeg',
        wowDelay: '.3s',
        text: 'From International Business Consultant to Full-Stack Software Engineer, my journey is being depicted in this interview <a href="https://medium.com/worldremit/sonyas-journey-international-business-consultant-to-full-stack-dev-9254598bc2c0" target="_blank" rel="noopener noreferrer"><u>@worldremit Interview</u></a>'
    },
    {
        name: 'Interests', 
        leftStyle: divStyle('66.5979%'),
        image: 'https://sonyamoisset.github.io/img/about/03.jpg',
        wowDelay: '.4s',
        text: 'Software Development, Programming Languages, App Security, Web App, Mobile App, VR, AR, Alexa Skills, Watson API, Machine Learning, AI, Amazon Fire TV Stick, Video Games, eSports, Blockchain, Cryptocurrency'
    }
];

const listSections = sections.map((section, i) => 
    <div key={i} className="masonry-grid-item col-xs-12 col-sm-6 col-md-4 sm-margin-b-30" style={section.leftStyle}>
    {i % 2 !== 0 ? <img className="full-width img-responsive wow fadeInUp animated" src={section.image} alt="Portfolio" data-wow-duration=".3" data-wow-delay={section.wowDelay} style={imgStyle}/> : ''}
    <div className="margin-b-60">
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

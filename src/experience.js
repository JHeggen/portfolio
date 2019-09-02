import React from 'react';

var serviceHeight = {
    height: '377px'
};

const topRows = [
    {
        name: 'Front-end I', 
        classExtra: '',
        serviceIconClass: 'icon-chemistry',
        nameClass: '',
        text: 'HTML5, Templating engines, CSS3, CSS frameworks, CSS preprocessors, CSS Grid, Flexbox, Atomic Design, BEM, Pattern Library'
    },
    {
        name: 'Back-end', 
        classExtra: 'bg-color-base wow zoomIn animated',
        serviceIconClass: 'color-white icon-screen-tablet',
        nameClass: 'color-white',
        text: 'Node.js, Express, MongoDB, Firebase, SQL, Adonis, Laravel, Rails, Sinatra, Django, Flask, Phoenix'
    },
    {
        name: 'Front-end II', 
        classExtra: '',
        serviceIconClass: 'icon-badge',
        nameClass: '',
        text: 'JS, ES6, JS Frameworks (React, Redux, Angular, Vue, Ember, jQuery), TypeScript, JS Tools (Yarn, npm, Webpack, Rollup, Babel, Browserify, Gulp)'
    }
];  

const bottomRows = [
    {
        serviceIconClass: 'icon-chemistry',
        name: 'Testing, Code Coverage &amp; Performance', 
        text: 'Karma, Mocha, Enzyme, Sinon, Istanbul, Chrome DevTools, LightHouse, PageSpeed, React/Redux DevTools'
    },
    {
        serviceIconClass: 'icon-chemistry',
        name: 'Mobile First', 
        text: 'UX/UI, Responsive Design, Mobile Design, Cross-Browser Dev, Performance Testing, Accessibility, SEO, PWA'
    },
    {
        serviceIconClass: 'icon-badge',
        name: 'Full Stack', 
        text: 'Wireframe, Prototype, MVC, Design Pattern, OOP, REST API, Modules, SPA, Agile Methodologies, Scrum, Mobile Dev, Android, Swift, React Native'
    }
]

const listTopRows = topRows.map((section, i) =>
    <div key={i} className="col-md-4 md-margin-b-4">
        <div className={`service `+ section.classExtra} data-height="height" style={serviceHeight}>
            <div className="service-element">
                <i className={`service-icon `+ section.serviceIconClass}></i>
            </div>
            <div className="service-info">
                <h3 className={section.nameClass}>{section.name}</h3>
                <p className={`margin-b-5 `+ section.nameClass}>{section.text}</p>
            </div>   
        </div>
    </div>
);

const listBottomRows = bottomRows.map((section, i) =>
    <div key={i} className="col-md-4 md-margin-b-4">
        <div className="service" data-height="height" style={serviceHeight}>
            <div className="service-element">
                <i className={`service-icon `+ section.serviceIconClass}></i>
            </div>
            <div className="service-info">
                <h3>{section.name}</h3>
                <p className="margin-b-5">{section.text}</p>
            </div>
        </div>
    </div>
);

function Experience() {
  return (
        <div id="experience">
            <div className="bg-color-sky-light" data-auto-height="true">
                <div className="container content-lg">
                    <div className="row margin-b-40">
                        <div className="col-sm-6">
                            <h2>Skills</h2>
                            <p>I specialize in Full Stack Development as my knowledge of multiple fields allows me to work on a project with the full scope in mind.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-9 col-sm-offset-1">
                            <div className="row row-space-2 margin-b-4">
                                {listTopRows}
                            </div>
                            <div className="row row-space-2 margin-b-4">
                                {listBottomRows}
                            </div>
                            <div className="row row-space-2 margin-b-4">
                                <div className="col-md-12 md-margin-b-4">
                                    <div className="service" data-height="height" style={serviceHeight}>
                                        <div className="service-element">
                                            <i className="service-icon icon-chemistry"></i>
                                        </div>
                                        <div className="service-info">
                                            <h3>Other Languages, Deploy &amp; CMS</h3>
                                            <p className="margin-b-5">Markdown, Java, Ruby, PHP, Python, Elixir, Bash/Command Line, WordPress, Umbraco, Shopify, Prestashop, Nginx, Team City, Octopus, Splunk, CircleCI, AppVeyor, Heroku, Git, GitHub, GitLab</p>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Experience;
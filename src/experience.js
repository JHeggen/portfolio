import React from 'react';

var serviceHeight = {
    height: '377px'
};

const topRows = [
    {
        name: 'Front-end', 
        classExtra: '',
        serviceIconClass: 'icon-chemistry',
        nameClass: '',
        text: 'HTML5, CSS3, Javascript ES6, React / Redux, jQuery, npm, Bootstrap, Responsive Design'
    },
    {
        name: 'Back-end', 
        classExtra: 'bg-color-base wow zoomIn animated',
        serviceIconClass: 'color-white icon-screen-tablet',
        nameClass: 'color-white',
        text: 'SQL (MSSQL & MySQL), Amazon RDS & S3, Firebase, Laravel'
    },
    {
        name: 'Cloud Computing', 
        classExtra: '',
        serviceIconClass: 'icon-badge',
        nameClass: '',
        text: 'Amazon Web Services, Google Cloud Platform, Microsoft Azure'
    }
];  

const bottomRows = [
    {
        serviceIconClass: 'icon-chemistry',
        name: 'Environments', 
        text: 'PHPStorm, Atom, Notepad++, Eclipse, Android Studio, VSCode, Uniface 3GL'
    },
    {
        serviceIconClass: 'icon-chemistry',
        name: 'Code Pipelining', 
        text: 'Docker, Jenkins, Puppet, Vagrant, Bitbucket, SVN, CI/CD, Scrum, Agile'
    },
    {
        serviceIconClass: 'icon-badge',
        name: 'Full Stack', 
        text: 'LAMP, MVC, OOP, REST APIs, Java, Mobile Dev, Android, React Native'
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
        <div id="skills">
            <div className="bg-color-sky-light" data-auto-height="true">
                <div className="container content-lg">
                    <div className="row margin-b-40">
                        <div className="col-sm-6">
                            <h2>Skills</h2>
                            <p></p>
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
                                            <p className="margin-b-5">PHP, Bash/Command Line, MAMP, Heroku, Git, GitHub</p>
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
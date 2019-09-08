import React from 'react';

const experience = [
    {
        title: 'International Business Mgmt &amp; Geopolitics', 
        subtitle: 'Master',
        moreInfo: 'Valedictorian | Paris School of Business',
        location: 'Paris, France'
    },
    {
        title: 'Korean Language, Culture, History &amp; Economics', 
        subtitle: 'Degree',
        moreInfo: 'Honours | Sogang University',
        location: 'Seoul, South Korea'
    },
    {
        title: 'Android Developer Nanodegree', 
        subtitle: 'Google EU Scholarship',
        moreInfo: 'In Progress | Udacity',
        location: 'London, UK'
    }
];  

const achievements = [ 
    'TREEHOUSE. Top 10 All Time Points Leaderboard | 80k+ points | 1k+ achievements | 350+ courses ', 
    'PLURALSIGHT. 150+ courses completed', 
    'CODESCHOOL. 475k+ points | 265+ levels | 50+ courses', 
    'UDACITY. Intro to Algorithms | HTML5 Canvas | Responsive Images | Responsive Web Design Fundamentals | JS Design Patterns | Object-Oriented JS | JS Testing | Front End Frameworks | Web Tooling &amp; Automation | Android Development for Beginners', 
    'COURSERA. CS 101 | An Intro to Programming | Algorithmic Toolbox | Fundamentals of Graphic Design | SEO Fundamentals | HCD | Gamification | Full Stack Web Dev | Responsive Web Dev and Design | Software Product Management', 
    'EDX. Intro to CS | Intro to Bootstrap | Intro to jQuery | Intro to TypeScript | Intro to Project Management | The Sotfware Architect Code | Mobile App Experience'
];

const listExperience = experience.map((experience, i) =>
    <div key={i} className="col-sm-4 margin-b-40 sm-margin-b-50">
        <h4>{experience.title}<span className="text-uppercase margin-l-20">{experience.subtitle}</span></h4>
        <p>{experience.moreInfo}</p>
        <a href="#/" className="link">{experience.location}</a>
    </div>
);

const listAchievements = achievements.map((achievement, i) =>
    <p key={i}>{achievement}</p>
);

function Background() {

  return (
    <div id="background">
        <div className="content-lg container">
            <div className="row margin-b-40">
                <div className="col-sm-6">
                    <h2>Background</h2>
                    <p>Former Consultant with 10+ years experience in International Business Development, constantly learning about Web App Development and Software Engineering through online courses, training, MOOCs, books and meet ups.</p>
                </div>
            </div>

            <div className="row">
                {listExperience}
            </div>

            <div className="row margin-b-40">
                <div className="col-sm-12">
                    {listAchievements}
                </div>
            </div>
        </div>
    </div>
  );
}

export default Background;

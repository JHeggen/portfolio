import React from 'react';

const experience = [
    {
        title: 'Computing Systems Technology, Cloud Computing', 
        subtitle: 'Associate\'s Degree',
        moreInfo: 'Distinction | BCIT',
        location: 'Burnaby, British Columbia'
    }
];  

const achievements = [ 
    {
        title: 'BEST APP: New Westminster open data competition, 2017', 
        link: 'https://commons.bcit.ca/news/2017/04/computer-systems-technology-students-wow-vips-with-apps-using-city-data/'
    }
];

const listExperience = experience.map((experience, i) =>
    <div key={i} className="col-sm-4 margin-b-40 sm-margin-b-50">
        <h4>{experience.title}<span className="text-uppercase margin-l-20">{experience.subtitle}</span></h4>
        <p>{experience.moreInfo}</p>
        <a href="#/" className="link">{experience.location}</a>
    </div>
);

const listAchievements = achievements.map((achievement, i) =>
    <p key={i}>{achievement.title}<a href={achievement.link} rel="noopener noreferrer" target='"_blank"'>  [LINK]</a></p>
);

function Background() {

  return (
    <div id="background">
        <div className="content-lg container">
            <div className="row margin-b-40">
                <div className="col-sm-6">
                    <h2>Background</h2>
                    <p>With a background in QA, support and Full-stack, I've seen the every step of the SDLC.</p>
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

import React from 'react';

var outerStyle = {
    position: 'relative',
    height: '678.343px'
};

const projects = [
    {
        imageSrc: 'https://sonyamoisset.github.io/img/portfolio/wr.png',
        title: 'WorldRemit',
        subtitle: 'Online money transfer service',
        description: 'As a Frontend Engineer, I work on the main product, the corporate website and the development of new features.',
        link: 'https://github.com/SonyaMoisset/miwok_ANDROID',
        linkName: 'www.miwok.com',
        technology: 'React/Redux'
    },
    {
        imageSrc: 'https://sonyamoisset.github.io/img/portfolio/news.png',
        title: 'Daily News',
        subtitle: 'React &amp; Redux news web app',
        description: 'Users can see the latest news and other news on the homepage.',
        link: 'https://github.com/SonyaMoisset/miwok_ANDROID',
        linkName: 'www.miwok.com',
        technology: 'React/Redux'
    },
    {
        imageSrc: 'https://sonyamoisset.github.io/img/portfolio/nba.png',
        title: 'Users can can see NBA highlights and vote for his/her favorite teams.',
        subtitle: 'Daily News',
        description: 'React &amp; Redux news web app',
        link: 'https://github.com/SonyaMoisset/miwok_ANDROID',
        linkName: 'www.miwok.com',
        technology: 'React/Redux'
    },
    {
        imageSrc: 'https://sonyamoisset.github.io/img/portfolio/musicdb.png',
        title: 'NBA',
        subtitle: 'React &amp; Redux sports web app',
        description: 'Users can navigate between multiple artists and see a profile from each artist including albums covers.',
        link: 'React &amp; Redux news web app',
        linkName: 'www.miwok.com',
        technology: 'React/Redux'
    },
    {
        imageSrc: 'https://sonyamoisset.github.io/img/portfolio/saas.png',
        title: 'Music DB',
        subtitle: 'A fictional startup where developers and entrepreneurs can meet up.',
        description: 'Users can navigate between multiple artists and see a profile from each artist including albums covers.',
        link: 'https://github.com/SonyaMoisset/miwok_ANDROID',
        linkName: 'www.miwok.com',
        technology: 'React/Redux'
    },
    {
        imageSrc: 'https://sonyamoisset.github.io/img/portfolio/miwok.png',
        title: 'DevMatch',
        subtitle: 'Clean &amp; Minimalistic Design',
        description: 'A fictional startup where developers and entrepreneurs can meet up.',
        link: 'https://github.com/SonyaMoisset/miwok_ANDROID',
        linkName: 'www.miwok.com',
        technology: 'React/Redux'
    },
    {
        imageSrc: 'https://sonyamoisset.github.io/img/portfolio/vm.png',
        title: 'MiWok',
        subtitle: 'English &amp; Miwok Translation Mobile App',
        description: 'An Android app to learn the Miwok language.',
        link: 'https://github.com/SonyaMoisset/miwok_ANDROID',
        linkName: 'www.miwok.com',
        technology: 'React/Redux'
    }
];  

const listProjects = projects.map((project, i) =>
    <div key={i} class="masonry-grid-item col-xs-12 col-sm-6 margin-b-30">
        <div class="work work-popup-trigger">
            <div class="work-overlay">
                <img class="full-width img-responsive" src={project.imageSrc} alt="Portfolio"/>
            </div>
            <div class="work-popup-overlay">
                <div class="work-popup-content">
                    <a href="/#" class="work-popup-close">Hide</a>
                    <div class="margin-b-30">
                        <h3 class="margin-b-5">{project.title}</h3>
                        <span>{project.subtitle}</span>
                    </div>
                    <div class="row">
                        <div class="col-sm-8 work-popup-content-divider sm-margin-b-20">
                            <div class="margin-t-10 sm-margin-t-0">
                                <p>{project.description}</p>
                                <p>Link: <a href={project.link} target="_blank" rel="noopener noreferrer">{project.linkName}</a></p>
                                <ul class="list-inline work-popup-tag">
                                    <li class="work-popup-tag-item"><a class="work-popup-tag-link" href="/#">Design,</a></li>
                                    <li class="work-popup-tag-item"><a class="work-popup-tag-link" href="/#">Coding,</a></li>
                                    <li class="work-popup-tag-item"><a class="work-popup-tag-link" href="/#">Portfolio</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="margin-t-10 sm-margin-t-0">
                                <p class="margin-b-5"><strong>Tech:</strong> {project.technology}</p>
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
        <div class="section-seperator">
            <div class="content-md container">
                <div class="row margin-b-40">
                    <div class="col-sm-6">
                        <h2>Portfolio</h2>
                        <p>I deliver the real value.</p>
                    </div>
                </div>
                <div class="masonry-grid row" style={outerStyle}>
                    <div class="masonry-grid-sizer col-xs-6 col-sm-6 col-md-1"></div>
                    {listProjects}
                </div>
            </div>
        </div>
    </div>
  );

}

export default Work;

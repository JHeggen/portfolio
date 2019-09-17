import React from 'react';

const sections = [ 
    "A few years ago, while working at a local restaurant, I was asked if I knew anyone who knew how to build a website.",
    "I remember thinking \"How hard could it be?\" and set out building my first site with some books borrowed from the library.",
    "The rest, as they say, is history.",
    "From working on static pages for local businesses, to full-stack development on an SaaS used by more than 80,000 people, I've taken every opportunity to improve my understanding of enterprise architectures, new languages and libraries. I believe that no matter the project, big or small, there will always be some way to make it just a little bit better.", 
    "I care about what I build, and I believe that's what sets me apart."
];

const bio = sections.map((section, i) =>
  <p key={i}>{section}</p>
);

function Intro() {
  return (
    <div className="row section-seperator">
        <div className="col-sm-3 sm-margin-b-30">
            <div className="text-right sm-text-left">
                <h2 className="margin-b-0">Intro</h2>
            </div>
        </div>
        <div className="col-sm-8 col-sm-offset-1">
            <div className="margin-b-60">
                {bio}
            </div>
        </div>
    </div>
  );
}

export default Intro;

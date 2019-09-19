import React from 'react';

const sections = [ 
    "I'm Jonathan, a Vancouver-based software engineer / tinkerer / ping-pong champion in training. ",
    "From working on static pages for local businesses, to full-stack development on an SaaS used by more than 80,000 people, I've taken every opportunity to improve my understanding of web enterprise architectures, new languages and libraries.",
    "I believe that no matter the project, big or small, there will always be some way to make it just a little bit better."
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
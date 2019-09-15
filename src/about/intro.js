import React from 'react';

const sections = [ 
    "\"Can you build us a website?\"", 
    "When I was first asked that question almost ten years ago, I could have easily answered \"no\".",
    "Instead, I said \"no, but I'll learn\".", 
    "That spirit of discovery has guided my career to this point, and continues to be a principle that I bring to all of my projects.", 
    "From working on static websites for local businesses, to full-stack development on an SaaS used by more than 80,000 people, I've taken every opportunity to improve my understanding of enterprise architectures, new languages and libraries. I believe that no matter the project, big or small, there will always be some way to make it just a little bit better.", 
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

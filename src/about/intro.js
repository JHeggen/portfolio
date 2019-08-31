import React from 'react';

const sections = [ 
    "I'm Jonathan Heggen.", 
    "I'm a lifelong traveler who lived in the Middle-East, North Africa and Asia and always looking for new challenges.", 
    "1996. Tunisia | 2002. France | 2006. Saudi Arabia | 2010. Singapore", 
    "2016. UK. Based in London, I am working as a Software Engineer for a FinTech company.", 
    "Technology and computer have been in my life since I was a kid and I have always loved anything related with arts or pixels. I started to code and design at a very young age. Most of my skills and knowledge are self-taugh.", 
    "I have a passion for designing detailed, creative and modern websites and applications on various platforms.", 
    "I am also a Tech Advocate and member of Google Women Techmakers, Women Who Code, Ada's List, Ladies of Code, London Halfstack, React London, Amazon Appstore Developers UK &amp; many more. I regularly attend meetups, events and conferences in London."
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
                <p>#StayCurious, #KeepOnHacking &amp; #MakeItHappen</p>
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

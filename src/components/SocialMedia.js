import React from 'react';
import '../assets/scss/social.scss';
import GitHubIcon from '../assets/Images/svg/github.svg';
import LinkedInIcon from '../assets/Images/svg/linkedIn.svg';
// import StackIcon from '../assets/Images/svg/stack.svg';
// import TwitterIcon from '../assets/Images/svg/twitter.svg';

export default function SocialMedia() {
  return (
    <div className="social">
      <h4>
        <a href="https://github.com/AnnadaJena">
          <img src={GitHubIcon} />
        </a>
        <a href="https://www.linkedin.com/in/annada-sankar-jena-02146898">
          <img src={LinkedInIcon} />
        </a>
        {/* <a href="#">
          <img src={StackIcon} />
        </a>
        <a href="#">
          <img src={TwitterIcon} />
        </a> */}
      </h4>
    </div>
  );
}

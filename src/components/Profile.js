import React from 'react';
import ProfilePic from '../assets/Images/Clr.jpg';
import SocialLinks from './SocialMedia';
import '../assets/scss/profile.scss';

export default function Profile() {
  return (
    <div className="profile">
      <img className="profile-pic" src={ProfilePic} />
      <h3>
        Hi! I{"'"}m <strong>Annada Jena</strong>
      </h3>
      <h4 className="tag-line">Software Engineer @ Rakuten</h4>
      <p className="about-me">
        I enjoy building javascript projects. I love learning and working on
        latest patterns and web primitives. At Rakuten I am a javascript
        developer for{' '}
        <a href="https://affiliate.rakuten.com.tw/">
          Global Affiliate Platform
        </a>
        . Besides coding in Javascript, I love spending time with my family and
        helping out in the community.
      </p>
      <SocialLinks />
    </div>
  );
}

import React from 'react';
import andy from '../../../images/andy_climber.png';
import elisha from '../../../images/elisha_climber.png';
import kalvin from '../../../images/kalvin_climber.png';
import ethel from '../../../images/ethel_climber.png';
import sean from '../../../images/sean_climber.png';
import joce from '../../../images/joce_climber.png';
import { FriendsContainer } from '../styles/styles.js';

const Friends = function Friends() {
  return (
    <FriendsContainer>
      <div className="friends-header">
        <h2>Friends</h2>
      </div>
      <div className="climbers">
        <div className="climber-photo">
          <img src={andy} alt="andy" />
          <img src={elisha} alt="elisha" />
          <a href="https://www.instagram.com/kalvinhom/">
            <img src={kalvin} alt="kalvin" />
          </a>
        </div>

        <div className="climber-photo">
          <img src={ethel} alt="ethel" />
          <img src={sean} alt="sean" />
          <img src={joce} alt="joce" />
        </div>
      </div>
    </FriendsContainer>
  );
};

export default Friends;

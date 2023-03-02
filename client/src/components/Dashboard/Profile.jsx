import React from 'react';
import { ProfileContainer } from '../styles/styles.js';
import userimg from '../../../images/aimee_climber.png';

const Profile = function Profile() {
  return (
    <ProfileContainer>
      <img src={userimg} alt="user" />
      <div className="user">Aimee K.</div>
      <div className="user-location">Las Vegas, NV</div>
    </ProfileContainer>
  );
};

export default Profile;

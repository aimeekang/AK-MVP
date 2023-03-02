import React from 'react';
import { ProfileContainer } from '../styles/styles.js';
import userimg from '../../../images/userimg.png';

const Profile = function Profile() {
  return (
    <ProfileContainer>
      <img src={userimg} alt="user" />
      <div className="user">Aimee K</div>
    </ProfileContainer>
  );
};

export default Profile;

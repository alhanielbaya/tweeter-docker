import React from 'react';
import './ProfileImage.scss';

const ProfileImage = (props: { imageUrl?: string }) => {
  const imageUrl = props.imageUrl;
  return (
    <div className='profile-pic'>
      {imageUrl ? (
        <img src={imageUrl} alt='' />
      ) : (
        <img src='./fallback-profile.jpeg' alt='' />
      )}
    </div>
  );
};

export default ProfileImage;

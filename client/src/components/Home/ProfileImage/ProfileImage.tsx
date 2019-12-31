import React from 'react';
import './ProfileImage.scss';

const ProfileImage = (props: { imageUrl?: string }) => {
  const imageUrl = props.imageUrl;
  return (
    <div className='profile-pic'>
      {imageUrl && imageUrl.substring(0, 4) === 'http' ? (
        <img src={imageUrl} alt='profile pic' />
      ) : (
        <img src='./fallback-profile.jpeg' alt='profile pic' />
      )}
    </div>
  );
};

export default ProfileImage;

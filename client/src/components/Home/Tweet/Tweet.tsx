import React from 'react';
import './Tweet.scss';
import ProfileImage from '../ProfileImage/ProfileImage';
import { Itweet } from '../../../store/tweets/tweetsTypes';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { IRootState } from '../../..';
import Follow from './Follow';

const Tweet = (props: { tweet: Itweet }) => {
  const { name, atSign, date, post, imageUrl, uid: uidToFollow } = props.tweet;
  const uid = useSelector((state: IRootState) => state.user.profile.uid);

  if (name === '' || post === '') return <div className=''></div>;

  function handleHover(e: any) {
    e.target.innerHTML = moment(date).format('YYYY-MM-DD LTS');
  }
  function handleLeave(e: any) {
    e.target.innerHTML = moment(date).fromNow();
  }

  return (
    <div className='tweet-container'>
      <div className='profile-container'>
        <ProfileImage imageUrl={imageUrl}></ProfileImage>
      </div>

      <div className='actual-tweet'>
        <div className='headers'>
          <h1 className='user-name'>{name} </h1>
          <h2 className='at-sign'>@{atSign}</h2>
          <h2
            className='time'
            onMouseOver={handleHover}
            onMouseLeave={handleLeave}
          >
            {moment(date).fromNow()}
          </h2>
        </div>

        <div className='text'>
          <p>{post}</p>
        </div>

        <div className='icons'>
          <Follow uid={uid} uidToFollow={uidToFollow}></Follow>
        </div>
      </div>
    </div>
  );
};

export default Tweet;

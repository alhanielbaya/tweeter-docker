import React from 'react';
import './TweetList.scss';
import Tweet from './../../../Tweet/Tweet';
import { Itweet } from '../../../../../store/tweets/tweetsTypes';

const TweetList = (props: { tweets: Itweet[] }) => {
  return (
    <div className='tweet-list-container'>
      {props.tweets.map((tweet: Itweet, index: number) => {
        return <Tweet tweet={tweet} key={`tweet-${index}`}></Tweet>;
      })}
    </div>
  );
};

export default TweetList;

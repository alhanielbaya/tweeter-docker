import React from 'react';
import TweetList from './TweetList/TweetList';

import { Itweet } from '../../../../store/tweets/tweetsTypes';
import LoadMore from '../../LoadMore/LoadMore';
import { useHasTweets } from '../../../../custom-hooks/custom-hooks';

const TweetContainer = (props: { tweets: Itweet[]; type: string }) => {
  const { tweets } = props;
  const hasTweets = useHasTweets();

  return (
    <>
      {hasTweets ? (
        <>
          <TweetList tweets={tweets}></TweetList>
          <LoadMore type={props.type} />
        </>
      ) : (
        ' '
      )}
    </>
  );
};

export default TweetContainer;

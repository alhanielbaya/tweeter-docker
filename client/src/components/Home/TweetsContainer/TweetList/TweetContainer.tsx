import React from 'react';
import TweetList from './TweetList/TweetList';

import { Itweet } from '../../../../store/tweets/tweetsTypes';
import LoadMore from '../../LoadMore/LoadMore';
import { usePageState } from '../../../../custom-hooks/custom-hooks';

const TweetContainer = (props: { tweets: Itweet[] }) => {
  const { tweets } = props;
  const { limit } = usePageState();

  return (
    <>
      {tweets.length ? (
        <>
          <TweetList tweets={tweets}></TweetList>
          <LoadMore />
        </>
      ) : (
        ' '
      )}
    </>
  );
};

export default TweetContainer;

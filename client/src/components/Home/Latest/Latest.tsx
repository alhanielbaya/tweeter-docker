import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TweetList from '../TweetsContainer/TweetList/TweetContainer';
import { IRootState } from '../../..';
import { setTweets } from '../../../store/tweets/tweetsActions';
import LoadMore from '../LoadMore/LoadMore';
import { usePageState } from '../../../custom-hooks/custom-hooks';
import InfiniteScroll from 'react-infinite-scroller';
import TweetContainer from '../TweetsContainer/TweetList/TweetContainer';

const Latest = () => {
  const dispatch = useDispatch();
  const tweets = useSelector((state: IRootState) => state.tweets.tweets);
  const isPending = useSelector((state: IRootState) => state.tweets.pending);
  const { offset, setOffset, setHasMore, limit } = usePageState();
  console.log('@@@ from latest');

  React.useEffect(() => {
    setHasMore(true);
    setOffset(0);
    setTweets(dispatch, offset, limit, true);
  }, []);

  return (
    <>
      {isPending ? (
        <div className='loading loading-lg' style={{ marginTop: '1rem' }}></div>
      ) : (
        <>
          <TweetContainer tweets={tweets}></TweetContainer>
        </>
      )}
    </>
  );
};

export default Latest;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IRootState } from '../../..';
import { setTweets } from '../../../store/tweets/tweetsActions';
import { usePageState } from '../../../custom-hooks/custom-hooks';
import TweetContainer from '../TweetsContainer/TweetList/TweetContainer';

const Latest = () => {
  const dispatch = useDispatch();
  const tweets = useSelector((state: IRootState) => state.tweets.tweets);
  const isPending = useSelector((state: IRootState) => state.tweets.pending);
  const { offset, setOffset, setHasMore, limit } = usePageState();

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
          <TweetContainer tweets={tweets} type='latest'></TweetContainer>
        </>
      )}
    </>
  );
};

export default Latest;

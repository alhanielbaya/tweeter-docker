import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IRootState } from '../../..';
import { getFollowedTweets } from '../../../store/tweets/tweetsActions';
import {
  usePageState,
  useSocket,
  useHasTweets
} from '../../../custom-hooks/custom-hooks';
import TweetContainer from '../TweetsContainer/TweetList/TweetContainer';

const Followed = () => {
  const dispatch = useDispatch();
  const tweets = useSelector((state: IRootState) => state.tweets.tweets);
  const isPending = useSelector((state: IRootState) => state.tweets.pending);
  const hasTweets = useHasTweets();

  const socket = useSocket();
  const { offset, setOffset, setHasMore, limit } = usePageState();

  React.useEffect(() => {
    setHasMore(true);
    setOffset(0);
    getFollowedTweets(dispatch, offset, limit, true);

    socket.on('unfollow success', () => {
      setHasMore(true);
      setOffset(0);
      getFollowedTweets(dispatch, offset, limit, true);
    });

    return () => {
      socket.off('unfollow success');
    };
  }, []);
  return (
    <>
      {isPending ? (
        <div className='loading loading-lg' style={{ marginTop: '1rem' }}></div>
      ) : (
        <>
          {hasTweets ? (
            <TweetContainer tweets={tweets} type='followed'></TweetContainer>
          ) : (
            <h1 style={{ textAlign: 'center', margin: '2rem 0 0 0 ' }}>
              You have no followed users.
            </h1>
          )}
        </>
      )}
    </>
  );
};

export default Followed;

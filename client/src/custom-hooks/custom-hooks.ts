import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '..';
import { SET_OFFSET, SET_HASMORE } from '../store/tweets/tweetsReducer';
import { isAuthenticated } from '../auth/auth';
import { useState } from 'react';

export function usePageState() {
  const offset = useSelector((state: IRootState) => state.tweets.offset);
  const hasMore = useSelector((state: IRootState) => state.tweets.hasMore);
  const limit = useSelector((state: IRootState) => state.tweets.limit);
  const dispatch = useDispatch();

  function setOffset(offset: number) {
    dispatch({ type: SET_OFFSET, payload: offset });
  }
  function setHasMore(hasMore: boolean) {
    dispatch({ type: SET_HASMORE, payload: hasMore });
  }

  return {
    offset,
    hasMore,
    limit,
    setOffset,
    setHasMore
  };
}

export function useSocket() {
  const socket = useSelector((state: IRootState) => state.socket.socket);

  return socket;
}
export function useFollowedUsers() {
  const followedUsers = useSelector(
    (state: IRootState) => state.user.followedUsers
  );

  return followedUsers;
}
export function useAuth() {
  const [isAuth, setIsAuth] = useState(false);
  isAuthenticated().then(isAuth => {
    setIsAuth(isAuth);
  });

  return isAuth;
}

export function useHasTweets() {
  const tweets = useSelector((state: IRootState) => state.tweets.tweets);

  return tweets.length && tweets[0].name !== '' ? true : false;
}

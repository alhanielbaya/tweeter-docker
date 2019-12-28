import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '..';
import { SET_OFFSET, SET_HASMORE } from '../store/tweets/tweetsReducer';

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

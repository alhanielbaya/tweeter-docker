import React from 'react';
import './LoadMore.scss';
import { loadMore } from '../../../store/tweets/tweetsActions';
import { useDispatch } from 'react-redux';
import { usePageState } from '../../../custom-hooks/custom-hooks';

const LoadMore = (props: { type: string }) => {
  const dispatch = useDispatch();
  const { offset, setOffset, setHasMore, hasMore, limit } = usePageState();

  function handleClick() {
    loadMore(dispatch, offset + limit, limit, props.type).then(
      (res: boolean) => {
        setOffset(offset + limit);
        setHasMore(res);
      }
    );
  }
  return (
    <div className='load-more-container'>
      <button
        className='btn btn-primary h1'
        onClick={handleClick}
        disabled={!hasMore}
      >
        Load More
      </button>
    </div>
  );
};

export default LoadMore;

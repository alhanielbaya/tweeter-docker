import { ItweetsState, ItweetsAction } from './tweetsTypes';
import io from 'socket.io-client';

export const SET_TWEETS = 'SET_TWEETS';
export const APPEND_TWEETS = 'APPEND_TWEETS';
export const SET_PENDING = 'SET_PENDING';
export const SET_OFFSET = 'SET_OFFSET';
export const SET_HASMORE = 'SET_HASMORE';

const initialState: ItweetsState = {
  tweets: [
    { imageUrl: '', name: '', atSign: '', date: '', post: '', tid: 0, uid: 0 }
  ],
  pending: false,
  limit: 10,
  offset: 0,
  hasMore: true
};

export const tweetsReducer = (state = initialState, action: ItweetsAction) => {
  switch (action.type) {
    case SET_TWEETS:
      return {
        ...state,
        tweets: action.payload,
        pending: false
      };
    case APPEND_TWEETS:
      return {
        ...state,
        tweets: [...state.tweets, ...action.payload],
        pending: false
      };
    case SET_PENDING:
      return {
        ...state,
        pending: action.payload
      };
    case SET_HASMORE:
      return {
        ...state,
        hasMore: action.payload
      };
    case SET_OFFSET:
      return {
        ...state,
        offset: action.payload
      };

    default:
      return state;
  }
};

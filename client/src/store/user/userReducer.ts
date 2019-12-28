import { IuserState } from './userTypes';
import io from 'socket.io-client';

export const SET_PROFILE = 'SET_PROFILE';
export const SET_AUTH = 'SET_AUTH';
export const SET_FOLLOWED_USERS = 'SET_FOLLOWED_USERS';

const initialState: IuserState = {
  profile: {
    uid: undefined,
    email: '',
    name: '',
    imageUrl: '',
    atSign: ''
  },
  isAuth: false,
  followedUsers: []
};

interface action {
  type: string;
  payload: any;
}

export const userReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        isAuth: action.payload
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload
      };
    case SET_FOLLOWED_USERS:
      return {
        ...state,
        followedUsers: action.payload
      };
    default:
      return state;
  }
};

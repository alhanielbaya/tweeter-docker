import { SET_AUTH, SET_PROFILE, SET_FOLLOWED_USERS } from './userReducer';
import { Iprofile } from '../../oauth-helpers/oauthTypes';

export function setAuth(bool: boolean) {
  return {
    type: SET_AUTH,
    payload: bool
  };
}
export function setProfile(profile: Iprofile) {
  return {
    type: SET_PROFILE,
    payload: profile
  };
}
export function setFollowedUsers(followedUsers: Array<number>) {
  return {
    type: SET_FOLLOWED_USERS,
    payload: followedUsers
  };
}

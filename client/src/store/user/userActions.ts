import { SET_AUTH, SET_PROFILE } from './userReducer';
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

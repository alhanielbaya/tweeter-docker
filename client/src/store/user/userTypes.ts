export interface IuserState {
  profile: {
    uid: number | undefined;
    email: string;
    name: string;
    imageUrl: string;
    atSign: string;
  };
  isAuth: boolean;
  followedUsers: Array<number>;
}

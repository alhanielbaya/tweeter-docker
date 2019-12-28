export interface Iprofile {
  uid?: number;
  email: string;
  name: string;
  imageUrl: string;
  atSign: string;
}

export interface IfacebookRes {
  email: string;
  name: string;
  picture: { data: { url: string } };
  atSign: string;
}

export interface IgoogleRes {
  profileObj: {
    email: string;
    name: string;
    imageUrl: string;
    atSign: string;
  };
}

export interface ItweetsState {
  tweets: Array<Itweet>;
  pending: boolean;
  limit: number;
  offset: number;
  hasMore: boolean;
}

export interface Itweet {
  tid: number;
  uid: number;
  imageUrl?: string | undefined;
  name: string;
  atSign: string;
  date: string;
  post: string;
}

export interface ItweetsAction {
  type: string;
  payload: any;
}

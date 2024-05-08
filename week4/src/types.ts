export interface LoginType {
  authenticationId: string;
  password: string;
}

export interface infoType {
  authenticationId: string;
  nickname: string;
  phone: string;
}

export interface JoinType extends infoType {
  password: string;
}

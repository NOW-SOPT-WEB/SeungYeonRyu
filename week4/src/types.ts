export interface LoginType {
  authenticationId: string;
  password: string;
}

export interface InfoType {
  authenticationId: string;
  nickname: string;
  phone: string;
}

export interface JoinType extends InfoType {
  password: string;
}

export interface ChangePwdType {
  previousPassword: string;
  newPassword: string;
  newPasswordVerification: string;
}

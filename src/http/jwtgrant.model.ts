export interface IUser {
  authorization: IAuthorization;
  userInfo: IUserInfo;
}

export interface IAuthorization {
  accessToken: string;
  tokenType: string;
  expiresDate: Date;
  refreshExpiresDate: Date;
  issuedDate: Date;
}

export interface IUserInfo {
  userId: string;
  accountId: string;
  orgId: string;
  identity: string;
  enrollType: string;
  managedBy: string;
  fName: string;
  lName: string;
}

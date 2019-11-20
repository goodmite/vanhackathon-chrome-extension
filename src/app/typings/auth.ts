export interface ILoginData {
  email: string;
  password: string;
}

export interface IUser {
  '_id': string;
  'id': number;
  'email': string;
  'createdAt': string;
  'updatedAt': string;
  'username': string;
  'bio': string;
  'image': string;
  'token': string;
  idToken: string;
  name: string;
  provider: string;
}

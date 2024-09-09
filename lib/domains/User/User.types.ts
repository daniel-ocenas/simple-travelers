export interface UserDbModel extends User {
  password: string;
}

export interface User {
  _id?: string;
  userName: string;
}

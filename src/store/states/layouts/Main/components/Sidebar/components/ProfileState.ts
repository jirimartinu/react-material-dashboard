// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface IProfileState {
  user: IUser;
}

interface IUser {
  name: string;
  avatar: string;
  bio: string;
}
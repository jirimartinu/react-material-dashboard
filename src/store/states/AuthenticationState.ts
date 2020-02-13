export interface IAuthenticationState {
    loggedIn: boolean;
    user: IUser;
}

export interface IUser {
    id?: string;
    userName?: string;
}
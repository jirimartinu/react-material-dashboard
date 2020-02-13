import { IUser } from "./AuthenticationState";

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface IUsersState {
    isLoading: boolean;
    users: IUser[];
    error: any;
}
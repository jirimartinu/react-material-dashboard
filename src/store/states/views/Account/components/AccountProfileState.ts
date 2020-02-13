// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface IAccountProfileState {
    user: IAccountProfileUser;
}

interface IAccountProfileUser {
    name: string;
    city: string;
    country: string;
    timezone: string;
    avatar: string;
}

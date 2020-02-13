// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface IUsersTableState {
    users: IUser[];
    selectedUsers: string[];
    rowsPerPage: number;
    page: number;
}

export interface IUser {
    id: string,
    name: string;
    address: IAddress;
    email: string;
    phone: string;
    avatarUrl: string;
    createdAt?: number;
}

interface IAddress {
    country: string;
    state: string;
    city: string;
    street: string;
}
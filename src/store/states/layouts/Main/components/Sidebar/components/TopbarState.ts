// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface ITopbarState {
  notifications: INotification[];
}

interface INotification {
  text: string;
}
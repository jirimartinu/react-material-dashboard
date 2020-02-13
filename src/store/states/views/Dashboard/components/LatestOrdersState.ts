// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export default interface ILatestOrdersState {
    orders: IOrder[];
}

interface IOrder {
    id: number;
    ref: string;
    amount: number;
    customer: ICustomer;
    createdAt: number;
    status: string;
}

interface ICustomer {
    name: string;
}

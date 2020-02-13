import { Moment } from "moment";

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export default interface ILatestProductsState {
    products: IProduct[];
}

interface IProduct {
    id: number;
    name: string;
    imageUrl: string;
    updatedAt: Moment;
}
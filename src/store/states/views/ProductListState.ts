// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export default interface IProductListState {
    products: IProduct[];
}

export interface IProduct {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    totalDownloads: string;
    createdAt?: string;
    updatedAt?: string;
}
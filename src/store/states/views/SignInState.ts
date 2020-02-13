// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface ISignInState {
    formState: ISignInFormState;
}

interface ISignInFormState {
    isValid: boolean;
    values: any;
    touched: any;
    errors: any;
}
// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface ISignUpState {
    formState: ISignUpFormState;
}

interface ISignUpFormState {
    isValid: boolean;
    values: any;
    touched: any;
    errors: any;
}
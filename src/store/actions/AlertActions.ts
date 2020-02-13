import { AlertConstants } from '../constants/AlertConstants';

interface IAlertSuccess {
    type: AlertConstants.SUCCESS;
    message: string;
}

interface IAlertError {
    type: AlertConstants.ERROR;
    message: string;
}

interface IAlertClear {
    type: AlertConstants.CLEAR;
}

export type KnownAlertAction = IAlertSuccess | IAlertError | IAlertClear;

const success = (message: string): IAlertSuccess => ({ type: AlertConstants.SUCCESS, message })
const error = (message: string): IAlertError => ({ type: AlertConstants.ERROR, message })
const clear = (): IAlertClear => ({ type: AlertConstants.CLEAR })

export const actionCreators = {
    success,
    error,
    clear
};

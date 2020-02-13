import { Action, Reducer } from 'redux';
import { AlertConstants } from '../constants/AlertConstants';
import { KnownAlertAction } from '../actions/AlertActions';
import { IAlertState } from '../states/AlertState';

const unloadedState = { type: null, message: null }

export const AlertReducer: Reducer<IAlertState> = (state: IAlertState = unloadedState, incomingAction: Action) => {
    const action = incomingAction as KnownAlertAction;

    switch (action.type) {
        case AlertConstants.SUCCESS:
            return {
                type: 'alert-success',
                message: action.message
            };
        case AlertConstants.ERROR:
            return {
                type: 'alert-danger',
                message: action.message
            };
        case AlertConstants.CLEAR:
            return {
                type: null,
                message: null
            };
        default:
            // eslint-disable-next-line
            const exhaustiveCheck: never = action;
    }

    return state || unloadedState;
}
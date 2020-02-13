import { Action, Reducer } from 'redux';
import { PasswordConstants } from 'src/store/constants/views/Settings/components/PasswordConstants';
import { KnownPasswordAction } from 'src/store/actions/views/Settings/components/PasswordActions';
import { IPasswordState } from 'src/store/states/views/Settings/components/PasswordState';

const unloadedState: IPasswordState = { 
    password: '',
    confirm: '',
}

export const PasswordReducer: Reducer<IPasswordState> = (state: IPasswordState = unloadedState, incomingAction: Action) => {
    const action = incomingAction as KnownPasswordAction;

    switch (action.type) {
        case PasswordConstants.CHANGE:
            return {
                ...state,
                [(action.event.target as any).name]: (action.event.target as any).value
            };
        default:
            // eslint-disable-next-line
            const exhaustiveCheck: any = action;
    }

    return state || unloadedState;
};
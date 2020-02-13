import { Action, Reducer } from 'redux';
import { AccountDetailsConstants } from 'src/store/constants/views/Account/components/AccountDetailsConstants';
import { KnownAccountDetailsAction } from 'src/store/actions/views/Account/components/AccountDetailsActions';
import { IAccountDetailsState } from 'src/store/states/views/Account/components/AccountDetailsState';

const unloadedState: IAccountDetailsState = { 
    firstName: 'Shen',
    lastName: 'Zhi',
    email: 'shen.zhi@devias.io',
    phone: '',
    state: 'new-york',
    country: 'USA'
}

export const AccountDetailsReducer: Reducer<IAccountDetailsState> = (state: IAccountDetailsState = unloadedState, incomingAction: Action) => {
    const action = incomingAction as KnownAccountDetailsAction;

    switch (action.type) {
        case AccountDetailsConstants.CHANGE:
            return {
                ...state,
                [(action.event.target as any).name]: (action.event.target as any).value
            };
        default:
            //const exhaustiveCheck: never = action;
    }

    return state || unloadedState;
};
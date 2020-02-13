import { Action, Reducer } from 'redux';
import { IAccountProfileState } from 'src/store/states/views/Account/components/AccountProfileState';

const unloadedState: IAccountProfileState = { 
    user: {
        name: 'Shen Zhi',
        city: 'Los Angeles',
        country: 'USA',
        timezone: 'GTM-7',
        avatar: '/images/avatars/avatar_11.png'
    }
}

export const AccountProfileReducer: Reducer<IAccountProfileState> = (state: IAccountProfileState = unloadedState, incomingAction: Action) => {
    return state || unloadedState;
};
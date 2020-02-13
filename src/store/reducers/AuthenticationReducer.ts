import { AuthenticationConstants } from '../constants/AuthenticationConstants';
import { Action, Reducer } from 'redux';
import { IAuthenticationState } from '../states/AuthenticationState';
import { KnownLoginAction, KnownLogoutAction } from '../actions/AuthenticationActions';

const user = window.localStorage !== undefined ? JSON.parse(localStorage.getItem('user')) : null;

const unloadedState = user ? { loggedIn: true, user } : { loggedIn: false, user: null };

export const AuthenticationReducer: Reducer<IAuthenticationState> = (state: IAuthenticationState = unloadedState, incomingAction: Action) => {
    const action = incomingAction as KnownLoginAction | KnownLogoutAction;

    switch (action.type) {
        case AuthenticationConstants.LOGIN_REQUEST:
            return {
                loggedIn: false,
                user: action.user
            };
        case AuthenticationConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case AuthenticationConstants.LOGIN_FAILURE:
            return {
                ...state
            };
        case AuthenticationConstants.LOGOUT_REQUEST:
            return {
                ...state
            };
        case AuthenticationConstants.LOGOUT_SUCCESS:
            return {
                loggedIn: false,
                user: null,
            };
        case AuthenticationConstants.LOGOUT_FAILURE:
            return {
                ...state
            };                          
        default:
            // eslint-disable-next-line
            const exhaustiveCheck: never = action;
    }

    return state || unloadedState;
};
import { IAppThunkAction } from '..';
import { IUser } from '../states/AuthenticationState';
import { AuthenticationConstants } from '../constants/AuthenticationConstants';
import { actionCreators as AlertActionCreators, KnownAlertAction } from './AlertActions';
import { AuthenticationService } from '../../services/AuthenticationService';
import { push, RouterAction } from 'connected-react-router';

interface IUsersLoginRequest {
    type: AuthenticationConstants.LOGIN_REQUEST;
    user: IUser;
}

interface IUsersLoginSuccess {
    type: AuthenticationConstants.LOGIN_SUCCESS;
    user: IUser;
}

interface IUsersLoginFailure {
    type: AuthenticationConstants.LOGIN_FAILURE;
    error: any;
}

export type KnownLoginAction = IUsersLoginRequest | IUsersLoginSuccess | IUsersLoginFailure;

const login = (userName: string, password:string): IAppThunkAction<KnownLoginAction | KnownAlertAction | RouterAction> => async (dispatch, getState) => {
    const request = (user: IUser): IUsersLoginRequest => ({ type: AuthenticationConstants.LOGIN_REQUEST, user });
    const success = (user: IUser): IUsersLoginSuccess => ({ type: AuthenticationConstants.LOGIN_SUCCESS, user });
    const failure = (error: any): IUsersLoginFailure => ({ type: AuthenticationConstants.LOGIN_FAILURE, error });

    // Setting name will allow us show user name in error.
    dispatch(request({ userName }));

    await AuthenticationService.login(userName, password)
        .then(data => {
              dispatch(success(data));
              dispatch(push("/"));
              dispatch(AlertActionCreators.success('Login successful'));
            },
            error => {
                dispatch(failure(error));
                dispatch(AlertActionCreators.error(error));
            }
        );
};

interface IUsersLogoutRequest {
    type: AuthenticationConstants.LOGOUT_REQUEST;
}

interface IUsersLogoutSuccess {
    type: AuthenticationConstants.LOGOUT_SUCCESS;
}

interface IUsersLogoutFailure {
    type: AuthenticationConstants.LOGOUT_FAILURE;
    error: any;
}

export type KnownLogoutAction = IUsersLogoutRequest | IUsersLogoutSuccess | IUsersLogoutFailure;

const logout = (): IAppThunkAction<KnownLogoutAction | KnownAlertAction | RouterAction> => async (dispatch, getState) => {
    const request = (): IUsersLogoutRequest => ({ type: AuthenticationConstants.LOGOUT_REQUEST });
    const success = (): IUsersLogoutSuccess => ({ type: AuthenticationConstants.LOGOUT_SUCCESS });
    const failure = (error: any): IUsersLogoutFailure => ({ type: AuthenticationConstants.LOGOUT_FAILURE, error });

    dispatch(request());

    await AuthenticationService.logout()
        .then(
            _ => { 
                dispatch(success());
                dispatch(push("/"));
                dispatch(AlertActionCreators.success('Logout successful'));
            },
            error => {
                dispatch(failure(error));
                dispatch(AlertActionCreators.error(error));
            }
        );
};

interface IUsersRegisterRequest {
    type: AuthenticationConstants.REGISTER_REQUEST;
}

interface IUsersRegisterSuccess {
    type: AuthenticationConstants.REGISTER_SUCCESS;
}

interface IUsersRegisterFailure {
    type: AuthenticationConstants.REGISTER_FAILURE;
    error: any;
}

export type KnownRegisterAction = IUsersRegisterRequest | IUsersRegisterSuccess | IUsersRegisterFailure;

const register = (user: IUser): IAppThunkAction<KnownRegisterAction | KnownAlertAction | RouterAction> => async (dispatch, getState) => {
    const request = (): IUsersRegisterRequest => ({ type: AuthenticationConstants.REGISTER_REQUEST });
    const success = (): IUsersRegisterSuccess => ({ type: AuthenticationConstants.REGISTER_SUCCESS });
    const failure = (error): IUsersRegisterFailure => ({ type: AuthenticationConstants.REGISTER_FAILURE, error });

    dispatch(request());

    await AuthenticationService.register(user)
        .then(
            () => { 
                dispatch(success());
                dispatch(push("/"));
                dispatch(AlertActionCreators.success('Registration successful'));
            },
            error => {
                dispatch(failure(error));
                dispatch(AlertActionCreators.error(error));
            }
        );
};

export const actionCreators = {
    login,
    logout,
    register
};

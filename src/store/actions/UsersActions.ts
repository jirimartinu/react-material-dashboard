import { IAppThunkAction } from '..';
import { IUser } from '../states/AuthenticationState';
import { UsersService } from '../../services/UsersService';
import { UsersConstants } from '../constants/UsersConstants';

interface IUsersGetAllRequest {
    type: UsersConstants.GETALL_REQUEST;
}

interface IUsersGetAllSuccess {
    type: UsersConstants.GETALL_SUCCESS;
    users: IUser[]
}

interface IUsersGetAllFailure {
    type: UsersConstants.GETALL_FAILURE;
    error: any;
}

export type KnownGetAllAction = IUsersGetAllRequest | IUsersGetAllSuccess | IUsersGetAllFailure;

const getAll = (): IAppThunkAction<KnownGetAllAction> => async (dispatch, getState) => {
    const request = (): IUsersGetAllRequest => ({ type: UsersConstants.GETALL_REQUEST })
    const success = (users: IUser[]): IUsersGetAllSuccess => ({ type: UsersConstants.GETALL_SUCCESS, users })
    const failure = (error): IUsersGetAllFailure => ({ type: UsersConstants.GETALL_FAILURE, error })

    dispatch(request());

    await UsersService.getAll()
        .then(
            (users: IUser[]) => dispatch(success(users)),
            error => dispatch(failure(error))
        );
}

/*

interface IUsersRemoveRequest {
    type: UsersConstants.REMOVE_REQUEST;
    id: number;
}

interface IUsersRemoveSuccess {
    type: UsersConstants.REMOVE_SUCCESS;
    id: number;
}

interface IUsersRemoveFailure {
    type: UsersConstants.REMOVE_FAILURE;
    id: number;
    error: any;
}

export type KnownRemoveAction = IUsersRemoveRequest | IUsersRemoveSuccess | IUsersRemoveFailure;

const remove = (id: number): IAppThunkAction<KnownRemoveAction> => async (dispatch, getState) => {
    const request = (id: number): IUsersRemoveRequest => ({ type: UsersConstants.REMOVE_REQUEST, id })
    const success = (id: number): IUsersRemoveSuccess => ({ type: UsersConstants.REMOVE_SUCCESS, id })
    const failure = (id: number, error): IUsersRemoveFailure => ({ type: UsersConstants.REMOVE_FAILURE, id, error })

    dispatch(request(id));

    UserService.remove(id)
        .then(
            () => { 
                dispatch(success(id));
            },
            error => {
                dispatch(failure(id, error));
            }
        );
} */

export const actionCreators = {
    getAll,
    /* remove */
};

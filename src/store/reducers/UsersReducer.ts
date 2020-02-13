import { Action, Reducer } from 'redux';
import { UsersConstants } from '../constants/UsersConstants';
import { IUsersState } from '../states/UsersState';
import { KnownGetAllAction/* , KnownRemoveAction */ } from '../actions/UsersActions';

const unloadedState: IUsersState = { isLoading: false, users: [], error: null }

export const UsersReducer: Reducer<IUsersState> = (state: IUsersState = unloadedState, incomingAction: Action) => {
    const action = incomingAction as KnownGetAllAction/*  | KnownRemoveAction */;

    switch (action.type) {
        case UsersConstants.GETALL_REQUEST:
            return {
                isLoading: true,
                users: state.users,
                error: state.error
            };
        case UsersConstants.GETALL_SUCCESS:
            return {
                isLoading: false,
                users: action.users,
                error: state.error
            };
        case UsersConstants.GETALL_FAILURE:
            return {
                isLoading: state.isLoading,
                users: state.users,
                error: action.error
            };
/*         case UsersConstants.REMOVE_REQUEST:
            // add 'deleting:true' property to user being deleted
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.id
                        ? { ...user, deleting: true }
                        : user
                )
            };
        case UsersConstants.REMOVE_SUCCESS:
            // remove deleted user from state
            return {
                isLoading: state.isLoading,
                users: state.users.filter(user => user.id !== action.id),
                error: state.error
            };
        case UsersConstants.REMOVE_FAILURE:
            // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        // make copy of user without 'deleting:true' property
                        const { deleting, ...userCopy } = user;
                        // return copy of user with 'deleteError:[error]' property
                        return { ...userCopy, deleteError: action.error };
                    }

                    return user;
                })
            }; */
        default:
            // eslint-disable-next-line
            const exhaustiveCheck: never = action;
    }

    return state || unloadedState;
};
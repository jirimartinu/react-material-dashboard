import { config } from '../utils/config';
import { FetchHeader } from 'src/utils/FetchHeader';
import { handleResponse, handleError} from '../utils/PromiseHandler';

const getAll = (): Promise<{}> => {
    return fetch(config.apiUrl + '/api/users/getall', FetchHeader(null, 'GET'))
        .then(handleResponse, handleError);
}

/* 
const getById = (id: number) => {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(config.apiUrl + '/users/' + id, requestOptions).then(handleResponse, handleError);
}

const update = (user: IUser) => {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(config.apiUrl + '/users/' + user.id, requestOptions).then(handleResponse, handleError);
}

const remove = (id: number) => {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(config.apiUrl + '/users/' + id, requestOptions).then(handleResponse, handleError);
} */

export const UsersService = {
    getAll,
/*
    getById,
    update,
    remove  */
};
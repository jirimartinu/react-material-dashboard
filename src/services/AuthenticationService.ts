import { config } from '../utils/config';
import { IUser } from 'src/store/states/AuthenticationState';
import { FetchHeader } from 'src/utils/FetchHeader';
import { handleResponse, handleError} from '../utils/PromiseHandler';

const login = (userName: string, password: string): Promise<{}> => {
    return fetch(config.apiUrl + '/api/account/login', FetchHeader(JSON.stringify({ userName, password })))
        .then(handleResponse, handleError)
        .then((user) => {
            if (user && window.localStorage !== undefined) {
                window.localStorage.setItem('user', JSON.stringify(user));
            } 

            return user;
        });
}

const logout = () => {
    return fetch(config.apiUrl + '/api/account/logout', FetchHeader())
        .then(handleResponse, handleError)
        .then(() => {
            if (window.localStorage !== undefined) {
                window.localStorage.removeItem('user');
            }
        }
    );
}

const register = (user: IUser): Promise<{}> => {
    return fetch(config.apiUrl + '/api/account/register', FetchHeader(JSON.stringify(user)))
        .then(handleResponse, handleError);
}

const getAntiForgeryToken = (): Promise<{}> => {
    return fetch(config.apiUrl + '/api/antiforgery')
        .then(handleResponse, handleError);
}

export const AuthenticationService = {
    login,
    logout,
    register,
    getAntiForgeryToken,
};
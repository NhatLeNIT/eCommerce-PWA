import setAuthorizationToken from './setAuthorizationToken';
import { setUserAuthenticated } from './../actions/authenticate';
import jwt_decode from 'jwt-decode';
import { store } from './../index';

const isAuthenticated = () => {
    if (localStorage.accessToken) {
        const token = localStorage.accessToken;
        const decoded = jwt_decode(token);
        setAuthorizationToken(token);
        store.dispatch(setUserAuthenticated(decoded));
    }
}

export default isAuthenticated;


import setAuthorizationToken from './setAuthorizationToken';
import { setMemberAuthenticated } from './../actions/back/authenticate';
import jwt_decode from 'jwt-decode';
import { store } from './../index';

const isAuthenticated = () => {
    if (localStorage.accessToken) {
        const token = localStorage.accessToken;
        const decoded = jwt_decode(token);
        setAuthorizationToken(token);
        store.dispatch(setMemberAuthenticated(decoded));
    }
}

export default isAuthenticated;


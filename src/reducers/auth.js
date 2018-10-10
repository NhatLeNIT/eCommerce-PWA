import isEmpty from 'lodash/isEmpty';
import { SET_USER_AUTHENTICATED, SET_USER_CURRENT } from '../constants/actionType';

const initialState = {
    isAuthenticated: false,
    authInfo: {},
    user: {}
};
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTHENTICATED: {
            let updateState = { ...state };
            updateState.isAuthenticated = !isEmpty(action.authInfo);
            updateState.authInfo = action.authInfo;

            return updateState;
        }
        case SET_USER_CURRENT: {
            let updateState = { ...state };
            updateState.user = action.user;

            return updateState;
        }

        default:
            return state
    }
}

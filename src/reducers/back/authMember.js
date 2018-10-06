import isEmpty from 'lodash/isEmpty';
import { SET_MEMBER_AUTHENTICATED } from './../../constants/actionType';

const initialState = {
    isAuthenticated: false,
    authInfo: {}
};
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_MEMBER_AUTHENTICATED: {
            // console.log('isAuthenticated ' + !isEmpty(action.user));
            return {
                isAuthenticated: !isEmpty(action.authInfo),
                authInfo: action.authInfo
            }
        }

        default:
            return state
    }
}

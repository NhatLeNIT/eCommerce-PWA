import { SET_MEMBER_AUTHENTICATED } from '../../constants/actionType';
import api from '../../utils/axios';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import isAuthenticated from '../../utils/isAuthenticated'
import { toastr as Toast } from 'react-redux-toastr'
import * as Loading from '../loading';

export const loginMemberRequest = (userInfo) => {
    return dispatch => {
        api.post('auth/login', userInfo)
            .then(res => {
                let token = res.data.data.access_token;
                localStorage.setItem('accessToken', token);

                setAuthorizationToken(token);
                isAuthenticated();

                Toast.success('Thông báo', 'Đăng nhập thành công!');
                dispatch(Loading.changeLoadingStatus(false));
            }).catch(err => {
                console.log(err);
                Toast.error('Có lỗi xảy ra', err.response.data.message);
                dispatch(Loading.changeLoadingStatus(false));
            });
    }
}

export const setMemberAuthenticated = (authInfo) => ({ type: SET_MEMBER_AUTHENTICATED, authInfo });
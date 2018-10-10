import { SET_USER_LIST } from './../constants/actionType';
import api from './../utils/axios';
import { toastr as Toast } from 'react-redux-toastr';

export const fetchUsers = (offset, limit) => {
    return dispatch => {
        api.get(`users/${offset}/${limit}`)
            .then(res => {
                dispatch(setUserList(res.data.data))
            }).catch(err => {
                console.log(err);
                Toast.error('Có lỗi xảy ra', err.response.data.message);
            })
    }
}

export const setUserList = (data) => ({ type: SET_USER_LIST, data });
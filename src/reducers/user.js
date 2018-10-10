import { SET_USER_LIST } from './../constants/actionType';
const initialState = {
    list: [],
    totalRows: 0
}

export default (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_LIST: {
            return { 
                list: action.data.users,
                totalRows: action.data.totalRows
             }
        }

        default:
            return state
    }
}

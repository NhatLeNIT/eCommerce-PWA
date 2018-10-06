import { CHANGE_LOADING_STATUS } from './../constants/actionType';
const initialState = false;

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LOADING_STATUS:
            return action.status

        default:
            return state
    }
}

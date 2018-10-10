import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr'
import loading from './loading';
import auth from './auth';
import user from './user';

const rootReducer = combineReducers({
    loading,
    auth,
    toastr: toastrReducer,
    user
});

export default rootReducer;
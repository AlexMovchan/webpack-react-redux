import { combineReducers } from 'redux';

import addUser from './addUser';
import login from './login';

export default combineReducers({
    addUser,
    login
})
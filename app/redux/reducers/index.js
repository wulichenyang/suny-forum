import { combineReducers } from 'redux';
import user from '@reducers/user';
import forum from './forum';
import discussion from './discussion';

export default combineReducers({ user, forum, discussion })
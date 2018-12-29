import { combineReducers } from 'redux';
import user from '@reducers/user';
import forum from './forum';

export default combineReducers({ user, forum })
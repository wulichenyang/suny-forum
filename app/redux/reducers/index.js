import { combineReducers } from 'redux';
import user from '@reducers/user';
import forum from './forum';
import discussion from './discussion';
import discussionDetail from './discussionDetail';

export default combineReducers({
  user,
  forum,
  discussion,
  discussionDetail,
})
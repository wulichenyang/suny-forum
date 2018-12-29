import {
  START_FETCHING_FORUMS,
  STOP_FETCHING_FORUMS,
  FETCHING_FORUMS_SUCCESS,
  FETCHING_FORUMS_FAILURE,
  UPDATE_CURRENT_FORUM,
} from '../../actionTypes';

import {
  forumApi
} from '@api'

/**
 * get all forum list
 * @return {action}
 */
export const getForums = () => {
  return async (dispatch, getState) => {
    dispatch({ type: START_FETCHING_FORUMS })
    try {
      const forums = await forumApi.fetchForum()
      if (forums && forums.length > 0) {
        dispatch({
          type: FETCHING_FORUMS_SUCCESS,
          payload: forums
        })
      } else {
        dispatch({ type: FETCHING_FORUMS_FAILURE })
      }
    } catch (error) {
      dispatch({ type: FETCHING_FORUMS_FAILURE })
    }
  }
}


/**
 * update current forum when route change occurs
 * @param  {String} currentForum
 * @return {action}
 */
export const updateCurrentForum = (currentForum) => {
  return {
    type: UPDATE_CURRENT_FORUM,
    payload: currentForum
  }
}
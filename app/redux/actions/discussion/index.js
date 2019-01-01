import {
  // Dscussion
  START_FETCHING_DISCUSSIONS,
  FETCHING_DISCUSSIONS_SUCCESS,
  FETCHING_DISCUSSIONS_FAILURE,

  // Pined discussion
  START_FETCHING_PINED_DISCUSSIONS,
  FETCHING_PINED_DISCUSSIONS_SUCCESS,
  FETCHING_PINED_DISCUSSIONS_FAILURE,

  UPDATE_SORTING_METHOD
} from '../../actionTypes';

import {
  discussionApi
} from '@api'

/**
 * action to fetch forum discussions
 * @param  {String}  forumId               current forum id
 * @param  {Boolean} feedChanged         if the feed has been changed, default is false
 * @param  {String}  sortingMethod       define the sorting method, default is 'date'
 * @return {thunk}
 */
export const getDiscussions = (forumId) => {
  return async (dispatch, getState) => {
    const sortingMethod = getState().discussion.sortingMethod
    const getDiscussion = discussionApi.fetchDiscussions(forumId, sortingMethod)

    dispatch({ type: START_FETCHING_DISCUSSIONS })
    try {
      const discussions = await getDiscussion()
      if (discussions && discussions.length > 0) {
        dispatch({
          type: FETCHING_DISCUSSIONS_SUCCESS,
          payload: discussions
        })
      } else {
        dispatch({ type: FETCHING_DISCUSSIONS_FAILURE })
      }
    } catch (error) {
      dispatch({ type: FETCHING_DISCUSSIONS_FAILURE })
    }
  }
}

/**
 * action to fetch forum pinned discussions
 * @param  {String}  forumId               current forum_id
 * @return {thunk}
 */
export const getPinedDiscussions = (forumId) => {
  return async (dispatch, getState) => {
    const getPinedDiscussions = discussionApi.fetchPinedDiscussions(forumId)

    dispatch({ type: START_FETCHING_PINED_DISCUSSIONS })
    try {
      const discussions = await getPinedDiscussions()
      if (discussions && discussions.length > 0) {
        dispatch({
          type: FETCHING_PINED_DISCUSSIONS_SUCCESS,
          payload: discussions
        })
      } else {
        dispatch({ type: FETCHING_PINED_DISCUSSIONS_FAILURE })
      }
    } catch (error) {
      dispatch({ type: FETCHING_PINED_DISCUSSIONS_FAILURE })
    }
  }
}
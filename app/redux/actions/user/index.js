import {
  START_FETCHING_USER,
  FETCHING_USER_SUCCESS,
  FETCHING_USER_FAILURE,
} from '../../actionTypes';

import {
  userApi
} from '@api'

export const getUser = () => {
  return async (dispatch, getState) => {
    dispatch({ type: START_FETCHING_USER })
    try {
      const userinfo = await userApi.fetchUser()
      if (userinfo && userinfo.data && userinfo.data._id) {
        dispatch({
          type: FETCHING_USER_SUCCESS,
          payload: userinfo.data
        })
      } else {
        dispatch({ type: FETCHING_USER_FAILURE })
      }
    } catch (error) {
      dispatch({ type: FETCHING_USER_FAILURE })
    }
  }
}

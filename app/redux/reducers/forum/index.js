import {
  START_FETCHING_FORUMS,
  STOP_FETCHING_FORUMS,
  FETCHING_FORUMS_SUCCESS,
  FETCHING_FORUMS_FAILURE,
  UPDATE_CURRENT_FORUM,
} from '../../actionTypes';

const initialState = {
  fetchingForums: false,
  forums: null,
  currentForum: 'general',
  error: null
}


export default (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING_FORUMS: {
      return {
        ...state,
        fetchingForums: true,
      }
    }
    case STOP_FETCHING_FORUMS: {
      return {
        ...state,
        fetchingForums: false,
      }
    }
    case FETCHING_FORUMS_SUCCESS: {
      return {
        ...state,
        fetchingForums: false,
        forums: action.payload,
        error: false,
      }
    }
    case FETCHING_FORUMS_FAILURE: {
      return {
        ...state,
        fetchingForums: false,
        error: 'Failed to fetch forums.',
      }
    }
    case UPDATE_CURRENT_FORUM: {
      return {
        ...state,
        currentForum: action.payload,
      }
    }
    default:
      return state
  }
}
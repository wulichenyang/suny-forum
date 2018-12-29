import {
  START_FETCHING_USER,
  FETCHING_USER_SUCCESS,
  FETCHING_USER_FAILURE,
} from '../../actionTypes';

const initialState = {
  fetchingUser: true,
  authenticated: false,
  error: null,
  _id: null,
  name: null,
  email: null,
  username: null,
  avatarUrl: null,
  githubUrl: null,
  githubLocation: null,
  githubBio: null,
  role: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING_USER: {
      return {
        ...state,
        fetchingUser: true,
      }
    }
    case FETCHING_USER_SUCCESS: {
      const {
        _id,
        name,
        username,
        avatarUrl,
        email,
        githubBio,
        githubUrl,
        githubLocation,
        role,
      } = action.payload;
      return {
        ...state,
        fetchingUser: false,
        authenticated: true,
        error: null,

        _id,
        name,
        username,
        avatarUrl,
        email,
        githubBio,
        githubUrl,
        githubLocation,
        role,
      }
    }
    case FETCHING_USER_FAILURE: {
      return {
        ...state,
        fetchingUser: false,
        authenticated: false,
        error: 'Failed to fetch user',
      }
    }
    default:
      return state
  }
}
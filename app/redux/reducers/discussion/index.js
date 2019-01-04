import {
  START_FETCHING_DISCUSSIONS,
  FETCHING_DISCUSSIONS_SUCCESS,
  FETCHING_DISCUSSIONS_FAILURE,

  START_FETCHING_PINED_DISCUSSIONS,
  FETCHING_PINED_DISCUSSIONS_SUCCESS,
  FETCHING_PINED_DISCUSSIONS_FAILURE,

  UPDATE_SORTING_METHOD,
  INVALID_FORUM
} from '../../actionTypes';

const initialState = {
  fetchingDiscussions: false,
  discussions: null, // {}
  discussionsError: null,

  fetchingPinedDiscussions: false,
  pinedDiscussions: null,
  pinedDiscussionsError: null,

  sortingMethod: 'date',

}

export default (state = initialState, action) => {
  switch (action.type) {
    // Discussions
    case START_FETCHING_DISCUSSIONS: {
      return {
        ...state,
        fetchingDiscussions: true,
      }
    }
    case FETCHING_DISCUSSIONS_SUCCESS: {
      if(!state.discussions) state.discussions = {}
      state.discussions[action.payload.forumSlug] = action.payload.discussions
      return {
        ...state,
        fetchingDiscussions: false,
        discussionsError: false,
      }
    }
    case FETCHING_DISCUSSIONS_FAILURE: {
      return {
        ...state,
        fetchingDiscussions: false,
        discussionsError: 'Failed to fetch discussions.',
      }
    }

    // Pined discussions
    case START_FETCHING_PINED_DISCUSSIONS: {
      return {
        ...state,
        fetchingPinedDiscussions: true,
      }
    }
    case FETCHING_PINED_DISCUSSIONS_SUCCESS: {
      return {
        ...state,
        fetchingPinedDiscussions: false,
        pinedDiscussions: action.payload,
        pinedDiscussionsError: false,
      }
    }
    case FETCHING_DISCUSSIONS_FAILURE: {
      return {
        ...state,
        fetchingPinedDiscussions: false,
        pinedDiscussionsError: 'Failed to fetch pined discussions.',
      }
    }

    case UPDATE_SORTING_METHOD: {
      return {
        ...state,
        sortingMethod: action.payload
      }
    }
    case INVALID_FORUM: {
      return {
        ...state,
        discussionsError: 'Failed to find the forum.',
        pinedDiscussionsError: 'Failed to find the forum.'
      }
    }
    default:
      return state
  }
}
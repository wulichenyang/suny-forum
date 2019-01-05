import {
  FETCHING_DISCUSSIONS_DETAIL_START,
  FETCHING_DISCUSSIONS_DETAIL_END,
  FETCHING_DISCUSSIONS_DETAIL_SUCCESS,
  FETCHING_DISCUSSIONS_DETAIL_FAILURE,

  TOGGLE_FAVORITE_START,
  TOGGLE_FAVORITE_SUCCESS,
  TOGGLE_FAVORITE_FAILURE,

  UPDATE_OPINION_CONTENT,

  POSTING_OPINION_START,
  POSTING_OPINION_SUCCESS,
  POSTING_OPINION_FAILURE,

  DELETE_DISCUSSION_START,
  DELETE_DISCUSSION_SUCCESS,
  DELETE_DISCUSSION_FAILURE,
  DELETE_DISCUSSION_REDIRECT,

  DELETE_OPINION_START,
  DELETE_OPINION_SUCCESS,
  DELETE_OPINION_FAILURE,
} from '../../actionTypes';

const initialState = {
  fetchingDiscussionDetail: true,
  discussionDetail: null,
  fetchingDiscussionDetailError: null,

  togglingFavorite: false,

  postingOpinion: false,
  newOpinion: null,
  postOpinionError: null,

  deletingDiscussion: false,
  isDiscussionDeleted: false,

  deletedOpinion: null,
};


export default (state = initialState, action) => {
  switch (action.type) {
    // Discussion detail
    case FETCHING_DISCUSSIONS_DETAIL_START: {
      return {
        ...state,
        fetchingDiscussionDetail: true,
        fetchingDiscussionDetailError: null
      }
    }
    case FETCHING_DISCUSSIONS_DETAIL_SUCCESS: {
      if (!state.discussionDetail) state.discussionDetail = {}
      state.discussionDetail[action.payload.discussionSlug] = action.payload.discussionDetail
      return {
        ...state,
        fetchingDiscussionDetail: false,
        fetchingDiscussionDetailError: false,
      }
    }
    case FETCHING_DISCUSSIONS_DETAIL_FAILURE: {
      return {
        ...state,
        fetchingDiscussionDetail: false,
        fetchingDiscussionDetailError: 'Failed to fetch details of the discussions.',
      }
    }

    // Toggle favorites
    case TOGGLE_FAVORITE_START: {
      return {
        ...state,
        togglingFavorite: true
      }
    }
    case TOGGLE_FAVORITE_SUCCESS:
    case TOGGLE_FAVORITE_FAILURE: {
      return {
        ...state,
        togglingFavorite: false
      }
    }

    // Update opinions
    case UPDATE_OPINION_CONTENT: {
      if (!state.opinions) state.opinions = {}
      state.opinions[action.payload.discussionSlug] = action.payload.opinions
      return {
        ...state,
      }
    }

    // Post a new opinion
    case POSTING_OPINION_START: {
      return {
        ...state,
        postingOpinion: true,
        postOpinionError: null
      }
    }
    case POSTING_OPINION_SUCCESS: {
      return {
        ...state,
        postingOpinion: false,
        newOpinion: null,
        postOpinionError: null,
      }
    }
    case POSTING_OPINION_FAILURE: {
      return {
        ...state,
        postingOpinion: false,
        newOpinion: null,
        postOpinionError: action.payload,
      }
    }

    // Delete a discussionDetail
    case DELETE_DISCUSSION_START: {
      return {
        ...state,
        deletingDiscussion: true,
        isDiscussionDeleted: false
      }
    }
    case DELETE_DISCUSSION_SUCCESS: {
      return {
        ...state,
        deletingDiscussion: false,
        isDiscussionDeleted: true
      }
    }
    case DELETE_DISCUSSION_FAILURE: {
      return {
        ...state,
        deletingDiscussion: false,
        isDiscussionDeleted: false
      }
    }
    case DELETE_DISCUSSION_REDIRECT: {
      return {
        ...state,
        isDiscussionDeleted: false
      }
    }

    // Delete an opinion
    case DELETE_OPINION_START: {
      return {
        ...state,
        deletedOpinion: action.payload
      }
    }
    case DELETE_OPINION_SUCCESS:
    case DELETE_OPINION_FAILURE: {
      return {
        ...state,
        deletedOpinion: null
      }
    }

    default:
      return state
  }
}
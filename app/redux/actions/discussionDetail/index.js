import {
  FETCHING_DISCUSSIONS_DETAIL_START,
  // FETCHING_DISCUSSIONS_DETAIL_END,
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

import {
  discussionDetailApi
} from '@api'

/**
 * get the discussion from server
 * @param  {String} discussionSlug
 * @return {action}
 */
export const getDiscussionDetail = (discussionSlug) => {
  return async (dispatch, getState) => {
    dispatch({ type: FETCHING_DISCUSSIONS_DETAIL_START })
    try {
      console.debug
      const fetchDiscussionDetail = discussionDetailApi.fetchDiscussionDetail(discussionSlug)
      let discussionDetail = await fetchDiscussionDetail()
      if (discussionDetail && discussionDetail._id) {
        dispatch({
          type: FETCHING_DISCUSSIONS_DETAIL_SUCCESS,
          payload: {
            discussionSlug,
            discussionDetail
          }
        })
      } else {
        dispatch({
          type: FETCHING_DISCUSSIONS_DETAIL_FAILURE,
          payload: 'No discussion detail data'
        })
      }
    } catch (error) {
      dispatch({
        type: FETCHING_DISCUSSIONS_DETAIL_FAILURE,
        payload: error
      })
    }
  }
}

/**
 * toggle favorite status of the discussion
 * @param  {ObjectId} discussionId
 * @param  {String} discussionSlug
 * @return {action}
 */
export const toggleFavorite = (discussionId, discussionSlug) => {
  return async (dispatch, getState) => {
    dispatch({ type: TOGGLE_FAVORITE_START });
    try {
      let toggleRes = discussionDetailApi.toggleFavorite(discussionId)
      if (toggleRes && toggleRes.data && toggleRes.data._id) {
        dispatch({ type: TOGGLE_FAVORITE_SUCCESS })
        // Update discussion detail
        dispatch({
          type: FETCHING_DISCUSSIONS_DETAIL_SUCCESS,
          payload: {
            discussionSlug,
            discussionDetail: toggleRes.data
          }
        })
      } else {
        dispatch({ type: TOGGLE_FAVORITE_FAILURE })
      }
    } catch (error) {
      dispatch({ type: TOGGLE_FAVORITE_FAILURE })
    }
  }
}

// /**
//  * update opinion content in redux state (controlled input)
//  * @param  {Object} value
//  * @return {action}
//  */
// export const updateOpinionContent = (value) => {
//   return {
//     type: UPDATE_OPINION_CONTENT,
//     payload: value,
//   };
// };

// /**
//  * post an opinion
//  * @param  {Object} opinion
//  * @param  {String} discussionSlug
//  * @return {action}
//  */
// export const addOpinion = (opinion, discussionSlug) => {
//   return async (dispatch, getState) => {
//     // dispatch to show the posting message
//     dispatch({ type: POSTING_OPINION_START });

//     // validate the opinion
//     if (!opinion.content || opinion.content.length < 10) {
//       dispatch({ type: POSTING_OPINION_FAILURE, payload: 'Please provide more info in your opinion....at least 10 characters.' });
//     } else {
//       // call the api to post the opinion
//       try {
//         let opinionRes = await discussionDetailApi.addOpinion(opinion)
//         if (opinionRes && opinionRes.data && opinionRes.data._id) {
//           // fetch the discussion to refresh the opinion list
//           let discussionDedail = await fetchDiscussionDetail(discussionSlug)

//           data => {
//             dispatch({ type: FETCHING_SINGLE_DISC_SUCCESS, payload: data.data });
//             dispatch({ type: POSTING_OPINION_SUCCESS });
//           },
//             error => dispatch({ type: FETCHING_SINGLE_DISC_FAILURE })
//         } else dispatch({ type: POSTING_OPINION_FAILURE });
//       } catch (error) {
//         error => dispatch({ type: POSTING_OPINION_FAILURE })
//       }
//     }
//   };
// };

// /**
//  * delete the discussion post
//  * @param  {String} discussionSlug
//  * @return {action}
//  */
// export const deletePost = (discussionSlug) => {
//   return (dispatch, getState) => {
//     dispatch({ type: DELETE_DISC_START });
//     deletePostApi(discussionSlug).then(
//       data => {
//         if (data.data.deleted) { dispatch({ type: DELETE_DISC_SUCCESS }); }
//         else { dispatch({ type: DELETE_DISC_FAILURE }); }
//       },
//       error => dispatch({ type: DELETE_DISC_FAILURE })
//     );
//   };
// };

// /**
//  * after a successfull deletion of a discussion
//  * the user should be redirected to the home page
//  * @return {action}
//  */
// export const deletedDiscussionRedirect = () => {
//   return (dispatch, getState) => {
//     dispatch({ type: DELETE_DISC_REDIRECT });
//   };
// };

// /**
//  * delete an opinion
//  * @param  {ObjectId} opinionId
//  * @param  {String} discussionSlug
//  * @return {action}
//  */
// export const deleteOpinion = (opinionId, discussionSlug) => {
//   return (dispatch, getState) => {
//     // show the loading message
//     dispatch({ type: DELETE_OPINION_START, payload: opinionId });

//     // call the api
//     deleteOpinionApi(opinionId).then(
//       data => {
//         if (data.data.deleted) {

//           // fetch the discussion again to refresh the opinions
//           fetchSingleDiscussion(discussionSlug).then(
//             data => {
//               dispatch({ type: DELETE_OPINION_SUCCESS });
//               dispatch({ type: FETCHING_SINGLE_DISC_SUCCESS, payload: data.data });
//             },
//             error => dispatch({ type: FETCHING_SINGLE_DISC_FAILURE })
//           );

//         }
//         else { dispatch({ type: DELETE_OPINION_FAILURE }); }
//       },
//       error => dispatch({ type: DELETE_OPINION_FAILURE })
//     );
//   };
// };

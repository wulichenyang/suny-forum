import { createSelector } from 'reselect'

const forums = state => state.forum.forums
const forumSlug = state => state.forum.currentForum

const getCurrentForum = (forums, keyword) => {
  return forums ? forums.find(forum => forum.forum_slug === keyword) : null
}

const selectedForumSelector = createSelector([
  forums,
  forumSlug,
],
  getCurrentForum
)

export default selectedForumSelector


import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Discussion from '@components/Discussion'
import Loading from '@components/Loading'
import Error from '@components/Error'
import { getDiscussions } from '@actions/discussion'

import selectedForumSelector from '@selectors/forum'
import './index.less'

class DiscussionList extends Component {
  componentDidMount() {
    const {
      currentForumInfo,
      getDiscussions,
      currentForumSlug,
      discussions
    } = this.props
    // Index page
    if (currentForumInfo) {
      // Get discussions if no data
      if (!discussions || !discussions[currentForumSlug]) {
        getDiscussions(currentForumInfo._id, currentForumSlug)
      }
    }
  }

  componentWillReceiveProps(nextProp) {
    const {
      discussions,
      currentForumInfo,
      currentForumSlug,
      getDiscussions,
    } = this.props
    // Index page
    if (currentForumInfo === null && nextProp.currentForumInfo) {
      // Get discussions if no data
      if (!nextProp.discussions || !nextProp.discussions[nextProp.currentForumSlug]) {
        getDiscussions(nextProp.currentForumInfo._id, nextProp.currentForumSlug)
      }
    }
    // Change forum
    else if (currentForumSlug !== nextProp.currentForumSlug && nextProp.currentForumInfo && nextProp.currentForumInfo._id) {
      // Get discussions if no data
      if (!nextProp.discussions || !nextProp.discussions[nextProp.currentForumSlug]) {
        getDiscussions(nextProp.currentForumInfo._id, nextProp.currentForumSlug)
      }
    }
  }

  render() {
    const {
      fetchingDiscussions,
      discussions,
      currentForumSlug
		} = this.props

    return (
      <Fragment>
        <Loading
          loading={fetchingDiscussions}
        >
        </Loading>
        {discussions && discussions[currentForumSlug] && discussions[currentForumSlug].length &&
          <section className='discussion-list'>
            {
              discussions[currentForumSlug].map(discussion => {
                return (
                  <Discussion
                    forumSlug={discussion.forum.forum_slug}
                    key={discussion._id}
                    title={discussion.title}
                    content={discussion.content}
                    tags={discussion.tags}
                    date={discussion.date}
                    opinionCount={discussion.opinion_count}
                    username={discussion.user.name}
                    userGitHandler={discussion.user.username}
                    likeCount={discussion.favorites.length}
                    avatarUrl={discussion.user.avatarUrl}
                    link={`/${currentForumSlug}/discussion/${discussion.discussion_slug}`}
                  >
                  </Discussion>
                )
              })
            }
          </section>
        }
        {discussions && discussions[currentForumSlug] && discussions[currentForumSlug].length === 0 &&
          <Error
            text={'没有数据...'}
          ></Error>
        }
      </Fragment>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // ... computed data from state and optionally ownProps
  fetchingDiscussions: state.discussion.fetchingDiscussions,
  currentForumSlug: state.forum.currentForum,
  currentForumInfo: selectedForumSelector(state),
  discussions: state.discussion.discussions,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // dispatching plain actions
    ...bindActionCreators({ getDiscussions }, dispatch)
    // getDiscussions: (forumId) => dispatch(getDiscussions(forumId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscussionList);

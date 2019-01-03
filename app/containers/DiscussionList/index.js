import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Discussion from '@components/Discussion'
import './index.less'
import Loading from '@components/Loading'
import Error from '@components/Error'
import { getDiscussions } from '@actions/discussion'

import selectedForumSelector from '@selectors/forum'

class DiscussionList extends Component {
  componentDidMount() {

  }

  componentWillReceiveProps(nextProp) {
    const {
      currentForumInfo,
      currentForumSlug,
      getDiscussions,
    } = this.props
    // Index page
    if (currentForumInfo === null && nextProp.currentForumInfo) {
      getDiscussions(nextProp.currentForumInfo._id)
    }
    // Change forum
    else if (currentForumSlug !== nextProp.currentForumSlug && nextProp.currentForumInfo && nextProp.currentForumInfo._id) {
      getDiscussions(nextProp.currentForumInfo._id)
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

        {discussions && discussions.length &&
          <section className='discussion-list'>
            {
              discussions.map(discussion => {
                return (
                  <Discussion
                    key={discussion._id}
                    title={discussion.title}
                    content={discussion.content}
                    tags={discussion.tags}
                    date={discussion.date}
                    opinionCount={discussion.opinion_count}
                    username={discussion.user.username}
                    userGitHandler={discussion.user.username}
                    likeCount={discussion.favorites.length}
                    link={`/${currentForumSlug}/discussion/${discussion.discussion_slug}`}
                  >
                  </Discussion>
                )
              })
            }
          </section>
        }
        {discussions && discussions.length === 0 &&
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

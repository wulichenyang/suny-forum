import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Discussion from '@components/Discussion'
import './index.less'

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
			discussions,
		} = this.props

    return (
      <section className='discussion-list'>
        {discussions &&
          discussions.map(discussion => {
            return (
              <Discussion
                key={discussion._id}
                discussion={discussion}
              >
              </Discussion>
            )
          })
        }
      </section>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // ... computed data from state and optionally ownProps
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

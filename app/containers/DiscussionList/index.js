import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Discussion from '@components/Discussion'
import './index.less'

import { getDiscussions } from '@actions/discussion'

import selectedForumSelector from '@selectors/forum'

class DiscussionList extends Component {
  // componentDidMount() {
  //   const {
  //     currentForumSlug,
  //     getDiscussions,
  //   } = this.props
  //   console.log(currentForumSlug)
  //   getDiscussions(currentForumInfo._id)
  // }

  componentWillReceiveProps(nextProp) {
    const {
      forums,
      currentForumSlug,
      getDiscussions,
    } = this.props
    // if(currentForumSlug === '') {
    //   getDiscussions(currentForumInfo._id)
    // }
    console.log('forums', forums)
    console.log('currentForumSlug', currentForumSlug)
    const newForumSlug = nextProp.currentForumSlug
    const newForums = nextProp.forums

    if (nextProp.forums && nextProp.forums._id) {
      getDiscussions(nextProp.currentForumInfo._id)
    } else if (currentForumSlug !== newForumSlug && nextProp.currentForumInfo && nextProp.currentForumInfo._id) {
      getDiscussions(nextProp.currentForumInfo._id)
    }
  }

  componentDidUpdate() {
    console.log('this.props.currentForumSlug', this.props.currentForumSlug)
    console.log('this.props.currentForumInfo', this.props.currentForumInfo)
    console.log('this.props.forums', this.props.forums)
    // if(this.props.currentForumSlug === null) {
    //   getDiscussions(this.props.currentForumInfo._id)
    // }
  }

  render() {
    const {
			discussions,
		} = this.props

    return (
      <section className='discussion-list'>
        {this.props.currentForumSlug}
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
  forums: state.forum.forums,
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

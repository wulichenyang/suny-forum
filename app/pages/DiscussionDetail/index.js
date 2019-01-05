import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import OpinionList from '@components/OpinionList'
import ReplyBox from '@components/ReplyBox'
import DiscussionContentDetail from '@components/DiscussionContentDetail'

import {
	getDiscussionDetail
} from '@actions/discussionDetail'

import './index.less'

class DiscussionDetail extends Component {
	componentDidMount() {
		const {
			params: {
				forum,
				discussion
			},
			getDiscussionDetail
		} = this.props

		getDiscussionDetail(discussion)
	}
	render() {
		const {
			discussionDetail,
			fetchingDiscussionDetail,
			fetchingDiscussionDetailError,
		} = this.props

		return (
			<div className="discussion-detail">
				<DiscussionContentDetail></DiscussionContentDetail>
				<ReplyBox></ReplyBox>
				<OpinionList></OpinionList>
			</div>
		)
	}

}

const mapStateToProps = (state, ownProps) => ({
	// ... computed data from state and optionally ownProps
	fetchingDiscussionDetail: state.discussionDetail.fetchingDiscussionDetail,
	discussionDetail: state.discussionDetail.discussionDetail,
	fetchingDiscussionDetailError: state.discussionDetail.fetchingDiscussionDetailError,

	// currentForumSlug: state.forum.currentForum,
	// currentForumInfo: selectedForumSelector(state),

});

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		// dispatching plain actions
		...bindActionCreators({
			getDiscussionDetail,
		}, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DiscussionDetail);
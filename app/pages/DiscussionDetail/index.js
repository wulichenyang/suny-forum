import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import OpinionList from '@components/OpinionList'
import ReplyBox from '@components/ReplyBox'
import RichEditor from '@components/RichEditor'
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
			params: {
				forum,
			discussion
			},
			discussionDetail,
			fetchingDiscussionDetail,
			fetchingDiscussionDetailError,
		} = this.props

		return (
			<div className="discussion-detail">
				{discussionDetail && discussionDetail[discussion] &&
					<DiscussionContentDetail
						key={discussionDetail[discussion]._id}
						forumSlug={discussionDetail[discussion].forum.forum_slug}
						title={discussionDetail[discussion].title}
						content={discussionDetail[discussion].content}
						tags={discussionDetail[discussion].tags}
						date={discussionDetail[discussion].date}
						username={discussionDetail[discussion].user.name}
						userGitHandler={discussionDetail[discussion].user.username}
						likeCount={discussionDetail[discussion].favorites.length}
						avatarUrl={discussionDetail[discussion].user.avatarUrl}
					/*favoriteAction={toggleFavorite}
					userFavorited={userFavorited}
					toggleingFavorite={toggleingFavorite}
					allowDelete={allowDelete}
					deletingDiscussion={deletingDiscussion}
					deleteAction={this.deleteDiscussion.bind(this)}*/
					></DiscussionContentDetail>
				}

				{ /* reply box */}
				<ReplyBox
					style={{ width: '60%', margin: "0 auto" }}
					title="评论"
					content={
						<RichEditor readOnly={false}></RichEditor>
					}
				></ReplyBox>

				{discussionDetail && discussionDetail[discussion] && discussionDetail[discussion].opinions && discussionDetail[discussion].opinions.length &&
					<OpinionList
						style={{ width: '60%', margin: "20px auto 0 auto" }}
						opinions={discussionDetail[discussion].opinions}
						deleteAction={() => { alert('delete option') }}
					// deletingOption={this.props.deletingOption}
					></OpinionList>
				}
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
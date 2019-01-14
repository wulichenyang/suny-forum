import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import OpinionList from '@components/OpinionList'
import ReplyBox from '@components/ReplyBox'
import RichEditor from '@components/RichEditor'
import DiscussionContentDetail from '@components/DiscussionContentDetail'

import {
	getDiscussionDetail,
	updateOpinionContent,
	addOpinion,
	deleteOpinion
} from '@actions/discussionDetail'

import './index.less'
import { message } from 'antd';

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

	async submitNewOpinion(resetContentCallback) {
		const {
			newOpinionContent,
			discussionDetail,
			addOpinion,
			params: {
				discussion
			},
			userinfo,
		} = this.props

		const newOpinion = {
			forum_id: discussionDetail[discussion].forum._id,
			discussion_id: discussionDetail[discussion]._id,
			user_id: userinfo._id,
			content: newOpinionContent
		}
		console.log(newOpinion, discussion)
		let res = await addOpinion(newOpinion, discussion)
		if (res === true) {
			resetContentCallback()
			message.success('评论成功！')
		} else {
			message.error('评论失败！')
		}
	}

	async deleteOpinion(opinionId) {
		const {
			params: {
				discussion
			},
			deleteOpinion,
		} = this.props

		let res = await deleteOpinion(opinionId, discussion)
		if (res === true) {
			message.success('删除评论成功！')
		} else {
			message.error('删除评论失败！')
		}
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
			updateOpinionContent,
			userinfo,
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
				{(userinfo.authenticated) ? (
					<ReplyBox
						style={{ width: '60%', margin: "0 auto" }}
						title="评论"
						content={
							<RichEditor
								readOnly={false}
								onChange={(content) => { updateOpinionContent(content) }}
								onSubmit={(resetContentCallback) => this.submitNewOpinion(resetContentCallback)}
							></RichEditor>
						}
					></ReplyBox>
				) : (
						<p className="login-tip">请登录发表评论~</p>
					)
				}

				{discussionDetail && discussionDetail[discussion] && discussionDetail[discussion].opinions && discussionDetail[discussion].opinions.length &&
					<OpinionList
						style={{ width: '60%', margin: "20px auto 0 auto" }}
						opinions={discussionDetail[discussion].opinions}
						deleteAction={(opinionId) => this.deleteOpinion(opinionId)}
						currentUserId={userinfo._id}
						currentUserRole={userinfo.role}
					// deletingOption={this.props.deletingOption}
					></OpinionList>
				}
			</div>
		)
	}

}

const mapStateToProps = (state, ownProps) => ({
	// ... computed data from state and optionally ownProps
	// fetching discussionDetail
	fetchingDiscussionDetail: state.discussionDetail.fetchingDiscussionDetail,
	discussionDetail: state.discussionDetail.discussionDetail,
	fetchingDiscussionDetailError: state.discussionDetail.fetchingDiscussionDetailError,

	// post a new opinion
	postingOpinion: state.discussionDetail.postingOpinion,
	newOpinionContent: state.discussionDetail.newOpinion,
	postOpinionError: state.discussionDetail.postOpinionError,
	userinfo: state.user
	// currentForumSlug: state.forum.currentForum,
	// currentForumInfo: selectedForumSelector(state),

	// delete an opinion

});

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		// dispatching plain actions
		...bindActionCreators({
			getDiscussionDetail,
			updateOpinionContent,
			addOpinion,
			deleteOpinion
		}, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DiscussionDetail);
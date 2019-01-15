import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import BoxWrapper from '@components/BoxWrapper'
import RichEditor from '@components/RichEditor'
import ReplyBox from '@components/ReplyBox'
// import Loading from '@components/Loading'
// import Error from '@components/Error'
import {
	Button,
	Input
} from 'antd'

import './index.less'
// import {
// 	// getUser
// } from '@actions/user'

// import {
// 	// getForums,
// 	// updateCurrentForum
// } from '@actions/forum'

class NewDiscussion extends Component {
	componentDidMount() {
		// const {
		// 	params,
		// 	getForums,
		// 	getUser,
		// 	updateCurrentForum,
		// } = this.props

		// getUser()
		// getForums()

		// const currentForum = params.forum || 'general';
		// updateCurrentForum(currentForum)
	}

	componentDidUpdate(prevProps) {
		// const {
		// 	params,
		// 	updateCurrentForum,
		// 	currentForum
		// } = this.props

		// if (params.forum !== currentForum && prevProps.params.forum !== undefined) {
		// 	updateCurrentForum(params.forum)
		// }
	}
	
	updateDiscussionContent(content) {

	}

	submitNewDiscussion(resetContentCallback) {

	}

	renderHeader() {
		return (
			<div
				className="new-discussion-header"
			>
				<Button
				className="add-discussion"
				type="primary"
				shape="circle"
				icon="plus"
				size={"large"}
				text={"选择话题"}
			/>
			<Input
				placeholder={"你的题目啦"}
			/>
			</div>
		)
	}

	renderContent() {
		return (
			/* reply box */
			// {(userinfo.authenticated) ? (
				<ReplyBox
					title="发帖"
					content={
						<RichEditor
							readOnly={false}
							onChange={(content) => { this.updateDiscussionContent(content) }}
							onSubmit={(resetContentCallback) => this.submitNewDiscussion(resetContentCallback)}
						></RichEditor>
					}
				/>
			// ) : (
			// 		<p className="login-tip">请登录发表评论~</p>
			// 	)
			// }
		)
	}

	render() {
		const {
			// forums,
			// currentForum,
			// fetchingForums,
			// fetchingForumsError,
			// userinfo,
		} = this.props

		return (
			<div className='new-discussion-wrapper'>
				<p>开启一个有趣的帖子吧~</p>
				<BoxWrapper
					header={this.renderHeader()}
					content={this.renderContent()}
				/>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	// ... computed data from state and optionally ownProps
	// userinfo: state.user,
	// fetchingForums: state.forum.fetchingForums,
	// forums: state.forum.forums,
	// currentForum: state.forum.currentForum,
	// fetchingForumsError: state.forum.error,
});

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		// dispatching plain actions
		...bindActionCreators({
			// getUser,
			// getForums,
			// updateCurrentForum
		},
			dispatch)
		// clearUserInfo: () => dispatch({ type: CLEAR_USER_INFO })
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NewDiscussion);

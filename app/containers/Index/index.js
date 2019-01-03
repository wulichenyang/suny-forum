import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Loading from '@components/Loading'
import Error from '@components/Error'
import './index.less'

import {
	getUser
} from '@actions/user'

import {
	getForums,
	updateCurrentForum
} from '@actions/forum'

class Index extends Component {
	componentDidMount() {
		const {
      params,
			getForums,
			getUser,
			updateCurrentForum,
    } = this.props

		getUser()
		getForums()

		const currentForum = params.forum || 'general';
		updateCurrentForum(currentForum)
	}

	componentDidUpdate(prevProps) {
		const {
      params,
			updateCurrentForum,
			currentForum
    } = this.props

		if (params.forum !== currentForum && prevProps.params.forum !== undefined) {
			updateCurrentForum(params.forum)
		}
	}

	render() {
		const {
			forums,
			currentForum,
			fetchingForums,
			fetchingForumsError,
		} = this.props

		return (
			<div className='wrapper'>
				{fetchingForums &&
					<Loading></Loading>
				}
				{!fetchingForums && !fetchingForumsError &&
					<div>
						<Header
							forums={forums}
							currentForum={currentForum}
						/>
						<main id="content">
							{this.props.children}
						</main>
						<Footer>Footer</Footer>
					</div>
				}
				{fetchingForumsError &&
					<Error
						text={fetchingForumsError}
					></Error>
				}
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	// ... computed data from state and optionally ownProps
	userinfo: state.user,
	fetchingForums: state.forum.fetchingForums,
	forums: state.forum.forums,
	currentForum: state.forum.currentForum,
	fetchingForumsError: state.forum.error,
});

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		// dispatching plain actions
		...bindActionCreators({ getUser, getForums, updateCurrentForum }, dispatch)
		// clearUserInfo: () => dispatch({ type: CLEAR_USER_INFO })
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Index);

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '@components/Header'
import Footer from '@components/Footer'
import './index.less'

import {
	getUser
} from '@actions/user'

import {
	getForums,
	updateCurrentForum
} from '@actions/forum'

class Index extends Component {
	componentWillMount() {
		const {
      params,
			getForums,
			getUser,
			updateCurrentForum,
    } = this.props

		getUser()
		getForums()

		const currentForum = params.forum || '';
		updateCurrentForum(currentForum)
	}

	componentDidUpdate() {
		const {
      params,
			updateCurrentForum,
			currentForum
    } = this.props

		if (params.forum !== currentForum) {
			updateCurrentForum(params.forum)
		}
	}

	render() {
		const {
			forums,
			currentForum
		} = this.props

		return (
			<div className='wrapper'>
				<Header
					forums={forums}
					currentForum={currentForum}
				/>
				<main id="content">
					{this.props.children}
				</main>
				<Footer>Footer</Footer>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	// ... computed data from state and optionally ownProps
	userinfo: state.user,
	forums: state.forum.forums,
	currentForum: state.forum.currentForum
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

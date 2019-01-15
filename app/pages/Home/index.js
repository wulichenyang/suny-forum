import React, { Component } from 'react'
import DiscussionList from '@containers/DiscussionList'
import { Button } from 'antd';
import { Link } from 'react-router';

import './index.less'

class Home extends Component {

	render() {

		return (
			<div className="home">
				<DiscussionList></DiscussionList>
				<Link to="/forum/newDiscussion">
					<Button
						className="add-discussion"
						type="primary"
						shape="circle"
						icon="plus"
						size={"large"}
					/>
				</Link>
			</div>
		)
	}

}

export default Home

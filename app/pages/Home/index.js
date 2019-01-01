import React, { Component } from 'react'
import DiscussionList from '@containers/DiscussionList'

import './index.less'

class Home extends Component {
	render() {

		return (
			<div className="home">
				<DiscussionList></DiscussionList>
			</div>
		)
	}

}

export default Home

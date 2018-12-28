import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '@components/Header'
import Footer from '@components/Footer'
import './index.less'

class Index extends Component {
	componentWillMount() {
	}

	render() {
		return (
			<div className='wrapper'>
				<Header />
        <main id="content">
          {this.props.children}
        </main>
        <Footer>Footer</Footer>
			</div>
		)
	}
}
export default Index

// const mapStateToProps = (state) => {
// 	return {
// 		// data:state.loginPart,
// 		// data2:state
// 	}
// }
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		// onLogin:(data)=>{
// 		// 	dispatch(login(data))
// 		// }
// 	}
// }

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(Index);

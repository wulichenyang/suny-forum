import React, { Component, Fragment } from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import Loading from '@components/Loading'
import Error from '@components/Error'
import PropTypes from 'prop-types'
import BoxWrapper from '@components/BoxWrapper'
import './index.less'

class ReplyBox extends Component {
  componentDidMount() {

  }

  componentWillReceiveProps(nextProp) {

  }

  render() {
    const {
      style
		} = this.props

    return (
      <section className="reply-box"
        style={style}
      >
        <BoxWrapper
          style={{marginTop: '20px'}}
        >
        </BoxWrapper>
      </section>
    )
  }
}
ReplyBox.defaultProps = {
  style: {}
}

ReplyBox.propTypes = {
  style: PropTypes.object,
}

export default ReplyBox
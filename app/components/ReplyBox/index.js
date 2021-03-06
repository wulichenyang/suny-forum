import React, { Component, Fragment } from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import Loading from '@components/Loading'
import Error from '@components/Error'
import PropTypes from 'prop-types'
import BoxWrapper from '@components/BoxWrapper'
import './index.less'

class ReplyBox extends Component {

  render() {
    const {
      style,
      title,
      content
    } = this.props

    return (
      <section
        className="reply-box"
        style={style}
      >
        <BoxWrapper
          style={{ marginTop: '20px' }}
          header={title}
          content={content}
        >
        </BoxWrapper>
      </section>
    )
  }
}
ReplyBox.defaultProps = {
  style: {},
  header: (<h2>评论</h2>),
  content: (<h2>回复</h2>)
}

ReplyBox.propTypes = {
  style: PropTypes.object,
  header: PropTypes.any,
  content: PropTypes.any,
}

export default ReplyBox
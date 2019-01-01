import React, { Component } from 'react'
import './index.less'

class Discussion extends Component {
  render() {
    const {
			discussion
		} = this.props

    return (
      <article className='discussion-wrapper'>
        {JSON.stringify(discussion)}
      </article>
    )
  }
}

export default Discussion;

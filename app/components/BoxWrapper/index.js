import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './index.less'
class BoxWrapper extends Component {
  render() {
    return (
      < article
        className='box-wrapper'
        style={this.props.style}
      >
        <div className="box-inner">
          <section className="box-header">
            {this.props.header}
          </section>
          <section className="box-content">
            {this.props.content}
          </section>
        </div>
      </article >
    )
  }
}

BoxWrapper.defaultProps = {
  header: (<div>title</div>),
  content: (<div>content</div>),
  style: {}
}

BoxWrapper.propTypes = {
  content: PropTypes.any,
  content: PropTypes.any,
  style: PropTypes.object
}


export default BoxWrapper

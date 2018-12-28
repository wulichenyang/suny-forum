import React, { Component } from 'react'
import './index.less'

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="footer-wrapper">
          {this.props.children}
        </div>
      </footer>
    )
  }
}

export default Footer
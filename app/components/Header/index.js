import React, { Component } from 'react'
import { Link, hashHistory } from 'react-router'
import NavList from './NavList'

import './index.less'
class Header extends Component {
  render() {
    const {
      forums,
      currentForum
    } = this.props

    return (
      <header id="header">
        <div className="nav-wrapper">
          <div id="logo">
            <Link to="/" className="logo">
              <img alt="dribbble" src="/images/logo.png" />
            </Link>
          </div>
          <NavList
            navList={forums}
          />
        </div>
      </header>
    )
  }
}

export default Header
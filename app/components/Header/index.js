import React, { Component } from 'react'
import { Link, hashHistory } from 'react-router'
import NavList from './NavList'
import UserMenu from './UserMenu'
import PropTypes from 'prop-types';

import './index.less'
class Header extends Component {
  render() {
    const {
      forums,
      currentForum,
      userinfo
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
        <UserMenu 
          userinfo={userinfo}
        />
      </header>
    )
  }
}

Header.defaultProps = {
  forums: [],
  currentForum: '',
  userinfo: {}
}

Header.propTypes = {
  forums: PropTypes.array,
  currentForu: PropTypes.string,
  userinfo: PropTypes.object
}

export default Header
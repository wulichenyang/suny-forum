import React, { Component } from 'react'
import { Link, hashHistory } from 'react-router'
import UserBrief from '@components/UserBrief'
import onClickOutside from 'react-onclickoutside';
import PropTypes from 'prop-types';
import {
  userApi
} from '@api'

import './index.less'
import { UserProfile } from '@pages/UserProfile';
import { authViaGitHub } from '../../../api/apis/user';
class UserMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { showSubMenu: false };
  }

  handleClickOutside() {
    this.setState({ showSubMenu: false });
  }

  toggleSubMenu() {
    this.setState(prevState => {
      return {
        showSubMenu: !prevState.showSubMenu
      }
    })
  }

  signinByGithub() {
    // userApi.authViaGitHub()
    this.toggleSubMenu()
  }
  
  async signout() {
    let res = await userApi.signout();
    if (res.status === 0) {
      hashHistory.push('/')
      window.history.go(0)
    }
    this.toggleSubMenu()
  }

  render() {
    const renderSubMenu = ({
      showSubMenu = false,
      authenticated = false,
      name = '大名',
      signinByGithub = () => { },
      signout = () => { },
    }) => {
      if (showSubMenu) {
        // 已登录
        if (authenticated) {
          return (
            <div
              className="user-sub-menu"
            >
              <ul>
                <li>
                  <Link
                    to={`/user/${name}`}
                  >
                    My Profile
                  </Link>
                </li>
                <li>
                  <a
                    onClick={signout}
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )
          // 未登录
        } else {
          return (
            <div
              className="user-sub-menu"
            >
              <a
                href="/api/user/authViaGitHub"
                // toggle submenu
                onClick={signinByGithub}
              >
                By github
              </a>
            </div>
          )
        }
      }
    }

    const {
      authenticated,
      name,
      username,
      avatarUrl
    } = this.props.userinfo

    const {
      showSubMenu
    } = this.state

    const signout = () => this.signout()
    const signinByGithub = () => this.signinByGithub()

    // 已登录
    if (authenticated) {
      return (
        <div className="user-menu">
          <UserBrief
            avatarUrl={avatarUrl}
            username={name}
            isMenu={true}
            onClick={() => this.toggleSubMenu()}
          />
          {renderSubMenu({
            showSubMenu,
            authenticated,
            name,
            signout
          })}
        </div>
      )
    } else { // 未登录
      return (
        <div className="user-menu">
          {/* {JSON.stringify(this.props.userinfo)} */}
          <div
            className="sign-trigger"
            onClick={() => this.toggleSubMenu()}
          >
            <span>Sign in / Sign up</span>
          </div>
          {renderSubMenu({
            showSubMenu,
            authenticated,
            signinByGithub
          })}
        </div>
      )
    }
  }
}

UserMenu.defaultProps = {
  userinfo: {}
}

UserMenu.propTypes = {
  userinfo: PropTypes.object
}

export default onClickOutside(UserMenu)
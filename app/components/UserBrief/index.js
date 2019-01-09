import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router';
import {
  Avatar,
  Icon,
} from 'antd';
import './index.less'

class UserBrief extends Component {
  render() {
    const {
      avatarUrl,
      username,
      githubHandler,
      avatarSize
		} = this.props

    return (
      <div className="user-brief">
        <Link to={`/user/${username}`}>
          <Avatar
            size={avatarSize}
            src={avatarUrl}
          >
          </Avatar>
          <span className="username">{username}</span>
        </Link>

        <a
          className="github"
          target="_blank"
          href={`https://www.github.com/${githubHandler}`}
        >
          <Icon type="github" />
          &nbsp;
                {githubHandler}
        </a>
      </div>
    )
  }
}

UserBrief.defaultProps = {
  avartarUrl: '/',
  username: '大名',
  githubHandler: 'github',
  avatarSize: 'default'
}

UserBrief.propTypes = {
  avartarUrl: PropTypes.string,
  username: PropTypes.string,
  githubHandler: PropTypes.string,
  avatarSize: PropTypes.string,
}

export default UserBrief
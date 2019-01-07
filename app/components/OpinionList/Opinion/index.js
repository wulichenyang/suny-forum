import React, { Component, Fragment } from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import Moment from 'moment';
import Loading from '@components/Loading'
import Error from '@components/Error'
import './index.less'

class Opinion extends Component {
  render() {
    const {
      opinionId,
      content,
      username,
      userGitHandler,
      date,
      avatarUrl,
      userId,
      currentUserId,
      currentUserRole,
      // deleteAction,
      // deletingOpinion,
    } = this.props

    return (
      <article className="opinion">
        opinionId:    {opinionId} <br /><br />
        content:    {content} <br /><br />
        username:    {username} <br /><br />
        userGitHandler:    {userGitHandler} <br /><br />
        date:    {date} <br /><br />
        avatarUrl:    {avatarUrl} <br /><br />
        userId:    {userId} <br /><br />
        currentUserId:    {currentUserId} <br /><br />
        currentUserRole:    {currentUserRole} <br /><br />
      </article>
    )
  }
}

Opinion.defaultProps = {
  opinionId: '12345',
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  username: '大名',
  userGitHandler: 'github',
  date: Moment(),
  avatarUrl: '/',
  userId: '12345',
  currentUserId: '12345',
  currentUserRole: 'user',
  // deleteAction: () => { },
  // deletingOpinion: null
}

Opinion.propTypes = {
  opinionId: PropTypes.string,
  content: PropTypes.any,
  username: PropTypes.string,
  userGitHandler: PropTypes.string,
  date: PropTypes.any,
  avatarUrl: PropTypes.string,
  userId: PropTypes.string,
  currentUserId: PropTypes.string,
  currentUserRole: PropTypes.string,
  // deleteAction: PropTypes.func,
  // deletingOpinion: PropTypes.any
}

export default Opinion
import React, { Component, Fragment } from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import Moment from 'moment';
import Loading from '@components/Loading'
import BoxWrapper from '@components/BoxWrapper'
import UserBrief from '@components/UserBrief'
import Error from '@components/Error'
import { toPostTime } from '@utils/date';

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

    const timeDisplay = toPostTime(date)

    // Opinion header
    const opinionHeader = ({
      avatarUrl,
      username,
      githubHandler,
      timeDisplay,
    }) => {
      return (
        <div className="opinion-header">
          <UserBrief
            avatarUrl={avatarUrl}
            username={username}
            githubHandler={userGitHandler}
          ></UserBrief>
          <div className="date">
            <span>{timeDisplay}</span>
          </div>
        </div>
      )
    }

    // Opinion content
    const opinionContent = ({
      content
    }) => {
      return (
        <div>{content}</div>
      )
    }

    return (
      <article className="opinion">
        <BoxWrapper
          header={opinionHeader({
            avatarUrl,
            username,
            userGitHandler,
            timeDisplay,
          })}
          content={opinionContent({
            content
          })}
        >
        </BoxWrapper>
        opinionId:    {opinionId} <br /><br />
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
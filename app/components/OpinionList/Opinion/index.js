import React, { Component, Fragment } from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import Moment from 'moment';
import Loading from '@components/Loading'
import BoxWrapper from '@components/BoxWrapper'
import UserBrief from '@components/UserBrief'
import RichEditor from '@components/RichEditor'
import Delete from '@components/Delete'
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
      deleteAction,
      // deletingOpinion,
    } = this.props

    const timeDisplay = toPostTime(date)

    // Opinion header
    const opinionHeader = ({
      opinionId,
      avatarUrl,
      username,
      githubHandler,
      timeDisplay,
      currentUserId,
      userId,
    }) => {
      return (
        <div className="opinion-header">
          <UserBrief
            avatarUrl={avatarUrl}
            username={username}
            githubHandler={userGitHandler}
          ></UserBrief>
          <div className="opinion-header-right">
            <div className="date">
              <span>{timeDisplay}</span>
            </div>
            {(currentUserId === userId) &&
              <Delete
                style={{ marginLeft: '10px' }}
                deleteAction={() => deleteAction(opinionId)}
              />
            }
          </div>
        </div>
      )
    }

    // Opinion content
    const opinionContent = ({
      content
    }) => {
      return (
        <RichEditor
          content={content}
          editable={false}
        ></RichEditor>
      )
    }

    // Main render()
    return (
      <article className="opinion">
        <BoxWrapper
          header={opinionHeader({
            opinionId,
            avatarUrl,
            username,
            userGitHandler,
            timeDisplay,
            currentUserId,
            userId
          })}
          content={opinionContent({
            content
          })}
        >
        </BoxWrapper>
        {/* opinionId:    {opinionId} <br /><br />
        userId:    {userId} <br /><br />
        currentUserId:    {currentUserId} <br /><br />
        currentUserRole:    {currentUserRole} <br /><br /> */}
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
  userId: '123451',
  currentUserId: '12345',
  currentUserRole: 'user',
  deleteAction: () => { },
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
  deleteAction: PropTypes.func,
  // deletingOpinion: PropTypes.any
}

export default Opinion
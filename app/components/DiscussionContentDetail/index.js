import React, { Component, Fragment } from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
import Moment from 'moment';
// import Loading from '@components/Loading'
// import Error from '@components/Error'
import Tag from '@components/Tag'
import BoxWrapper from '@components/BoxWrapper'
import UserBrief from '@components/UserBrief'
import RichEditor from '@components/RichEditor'
import Like from '@components/Like'
import { Link } from 'react-router';
import { toPostTime } from '@utils/date';

import './index.less'

class DiscussionContentDetail extends Component {
  render() {
    const {
      forumSlug,
      title,
      content,
      username,
      userGitHandler,
      date,
      tags,
      likeCount,
      avatarUrl,
      favoriteAction,
      userFavorited,
      togglingFavorite,
      allowDelete,
      deletingDiscussion,
      deleteAction,
		} = this.props

    const timeDisplay = toPostTime(date)

    // Header
    const userInfo = ({
      avatarUrl,
      username,
      userGitHandler,
      timeDisplay
    }) => {
      return (
        <section className="user-info">
          <UserBrief
            avatarUrl={avatarUrl}
            username={username}
            githubHandler={userGitHandler}
            avatarSize="large"
          >
          </UserBrief>

          <div className="user-right-date">
            <span>{timeDisplay}</span>
          </div>
        </section>
      )
    }

    // Content
    const DiscussionContent = ({
      tags,
      discussionTitle,
      content

      // favoriteAction
    }) => {
      return (
        <Fragment>
          <section className="discussion-content">
            <h2>
              {discussionTitle}
            </h2>
            <RichEditor
              content={content}
              readOnly={true}
            ></RichEditor>
          </section>

          <section className="discussion-bottom">
            <div>
              {
                tags.map((tag, i) => {
                  return (
                    <Tag
                      key={i}
                      text={tag}
                    ></Tag>
                  )
                })
              }
            </div>
            <Like
              favoriteAction={favoriteAction}
            ></Like>
          </section>
        </Fragment>
      )
    }

    // Main render()
    return (
      <section id="discussion-content-detail">

        { /* user detail */}
        <BoxWrapper
          header={userInfo({
            avatarUrl,
            username,
            userGitHandler,
            timeDisplay
          })}
          content={DiscussionContent({
            discussionTitle: title,
            tags,
            content
          })}
          style={{ marginTop: '20px' }}
        >
        </BoxWrapper>

      </section >
    )
  }
}
// {
//   <div>
//     forumSlug:   {forumSlug} <br /><br />
//     title:   {title} <br /><br />
//     content:   {content} <br /><br />
//     username:   {username} <br /><br />
//     userGitHandler:   {userGitHandler} <br /><br />
//     date:   {date} <br /><br />
//     tags:   {tags} <br /><br />
//     likeCount:   {likeCount} <br /><br />
//     avatarUrl:   {avatarUrl} <br /><br />
//     favoriteAction:   {favoriteAction.toString()} <br /><br />
//     userFavorited:   {userFavorited} <br /><br />
//     togglingFavorite:   {togglingFavorite} <br /><br />
//     allowDelete:   {allowDelete} <br /><br />
//     deletingDiscussion:   {deletingDiscussion} <br /><br />
//     deleteAction:   {deleteAction.toString()} <br /><br />
//   </div>
// }

DiscussionContentDetail.defaultProps = {
  forumSlug: 'general',
  title: '是我标题',
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  username: '大名',
  userGitHandler: 'github',
  date: Moment(),
  tags: ['你好', '再见'],
  likeCount: 0,
  avatarUrl: '/',
  favoriteAction: () => { },
  userFavorited: false,
  togglingFavorite: false,
  allowDelete: false,
  deletingDiscussion: false,
  deleteAction: () => { },

}

DiscussionContentDetail.propTypes = {
  forumSlug: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.any,
  username: PropTypes.string,
  userGitHandler: PropTypes.string,
  date: PropTypes.any,
  tags: PropTypes.array,
  likeCount: PropTypes.number,
  avatarUrl: PropTypes.string,
  favoriteAction: PropTypes.func,
  userFavorited: PropTypes.bool,
  toggleingFavorite: PropTypes.bool,
  allowDelete: PropTypes.bool,
  deletingDiscussion: PropTypes.bool,
  deleteAction: PropTypes.func,
}

export default DiscussionContentDetail
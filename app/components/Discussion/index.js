import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Moment from 'moment';
import Tag from '@components/Tag'
import BoxWrapper from '@components/BoxWrapper'
import { Link } from 'react-router';
import {
  Avatar,
  Icon,
} from 'antd';

import './index.less'
class Discussion extends Component {
  render() {
    const {
      forumSlug,
      title,
      content,
      username,
      userGitHandler,
      date,
      opinionCount,
      tags,
      likeCount,
      avatarUrl,
      link,
      // userProfile,
    } = this.props;

    const postTime = Moment(date);
    const timeDisplay = postTime.from(Moment());

    return (
      <BoxWrapper>
        <div className="top-wrapper">
          <Link to={`/user/${username}`}>
            <Avatar
              src={avatarUrl}
            >
            </Avatar>
          </Link>
          <div className="user-info-right">
            <div className="forum-info">
              <Link to={`/user/${username}`}>
                <h3>{username}</h3>
              </Link>
              <Link
                className="forum-info-bottom"
                to={`/${forumSlug}`}
              >
                <span>{forumSlug}</span>
              </Link>
              &nbsp;·&nbsp;
                <span>{timeDisplay}</span>
            </div>
          </div>
        </div>

        <h2>
          <Link to={link}>
            {title}
          </Link>
        </h2>

        <p>
          <a
            className="github"
            target="_blank"
            href={`https://www.github.com/${userGitHandler}`}
          >
            <Icon type="github" />
            &nbsp;
              {userGitHandler}
          </a>
        </p>

        <div className="bottom-wapper">
          <div className="tags-wrapper">
            {tags.map((tag, id) => (
              <Tag
                key={id}
                text={tag}
              >
              </Tag>
            ))}
          </div>
          <div className="details-wrapper">
            <span className="detail">{likeCount} 喜欢</span>
            <span className="detail">{opinionCount} 回复</span>
          </div>
        </div>
      </BoxWrapper>
    /* 
        {`title: ${title}`}
        {`content: ${content}`} <br /> <br />
        {`username: ${username}`} <br /> <br />
        {`userGitHandler: ${userGitHandler}`} <br /> <br />
        {`date: ${date}`} <br /> <br />
        {`opinionCount: ${opinionCount}`} <br /> <br />
        {`tags: ${tags}`} <br /> <br />
        {`likeCount: ${likeCount}`} <br /> <br />
        {`link: ${link}`} <br /> <br />
        } */
    )
  }
}

Discussion.defaultProps = {
  forumSlug: 'general',
  title: '是我标题',
  content: '是我内容',
  username: '大名',
  userGitHandler: 'github',
  date: Moment(),
  opinionCount: 0,
  tags: ['你好', '再见'],
  likeCount: 0,
  link: '/',
  avatarUrl: '/',
}

Discussion.propTypes = {
  forumSlug: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  username: PropTypes.string,
  userGitHandler: PropTypes.string,
  date: PropTypes.any,
  opinionCount: PropTypes.number,
  tags: PropTypes.array,
  likeCount: PropTypes.number,
  link: PropTypes.string,
  avatarUrl: PropTypes.string,
}

export default Discussion;

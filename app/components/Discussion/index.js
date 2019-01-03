import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Moment from 'moment';
import Tag from '@components/Tag'
import { Link } from 'react-router';
import './index.less'
class Discussion extends Component {
  render() {
    const {
      title,
      content,
      username,
      userGitHandler,
      date,
      opinionCount,
      tags,
      likeCount,
      link,
      // userProfile,
    } = this.props;

    return (
      <article className='discussion-wrapper'>
        <div className="discussion-inner">

          <h2>
            <Link to={link}>
              {title}
            </Link>
          </h2>

          <p>
            <Link to={`/user/${userGitHandler}`}>
              {username}
            </Link> -
            <a target="_blank" href={`https://www.github.com/${userGitHandler}`}>
              icon: {userGitHandler}
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
              <span className="detail">{date}</span>
              <span className="detail">{likeCount} 喜欢</span>
              <span className="detail">{opinionCount} 回复</span>
            </div>
          </div>

        </div>
        {/* 
        {`title: ${title}`}
        {`content: ${content}`} <br /> <br />
        {`username: ${username}`} <br /> <br />
        {`userGitHandler: ${userGitHandler}`} <br /> <br />
        {`date: ${date}`} <br /> <br />
        {`opinionCount: ${opinionCount}`} <br /> <br />
        {`tags: ${tags}`} <br /> <br />
        {`likeCount: ${likeCount}`} <br /> <br />
        {`link: ${link}`} <br /> <br />
        } */}
      </article>
    )
  }
}

Discussion.defaultProps = {
  title: '是我标题',
  content: '是我内容',
  username: '大名',
  userGitHandler: 'github',
  date: Moment(),
  opinionCount: 0,
  tags: ['你好', '再见'],
  likeCount: 0,
  link: '/'
}

Discussion.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  username: PropTypes.string,
  userGitHandler: PropTypes.string,
  date: PropTypes.any,
  opinionCount: PropTypes.number,
  tags: PropTypes.array,
  likeCount: PropTypes.number,
  link: PropTypes.string,
}

export default Discussion;

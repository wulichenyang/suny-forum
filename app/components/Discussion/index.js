import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Moment from 'moment';
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
        {`title: ${title}`} <br /> <br />
        {`content: ${content}`} <br /> <br />
        {`username: ${username}`} <br /> <br />
        {`userGitHandler: ${userGitHandler}`} <br /> <br />
        {`date: ${date}`} <br /> <br />
        {`opinionCount: ${opinionCount}`} <br /> <br />
        {`tags: ${tags}`} <br /> <br />
        {`likeCount: ${likeCount}`} <br /> <br />
        {`link: ${link}`} <br /> <br />
        }
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
  likeCount: PropTypes.array,
  link: PropTypes.string,

}
export default Discussion;

import React, { Component } from 'react'
import { Link, hashHistory } from 'react-router'
import PropTypes from 'prop-types'
import './index.less'

class NavList extends Component {
  render() {
    const { navList } = this.props
    return (
      <nav role="nav" className="nav">
        <ul>
          {navList && navList.length &&
            navList.map(forum => {
              return (
                <li key={forum._id}>
                  <Link
                    to={forum.forum_slug}
                    activeClassName="active"
                  >
                    {forum.forum_name}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
    )
  }
}

NavList.defaultProps = {
  navList : [
    {
      _id: "0",
      forum_slug: 'general',
      forum_name: 'General'
    }
  ]
}

NavList.propTypes = {
  navList: PropTypes.array,
};

export default NavList
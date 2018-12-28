import React, { Component } from 'react'
import { Link, hashHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './index.less'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    return (
      <header id="header">
        <div className="nav-wrapper">
          <div id="logo">
            <Link to="/home" className="logo">
              <img alt="dribbble" src="/images/logo.png" />
            </Link>
          </div>
          <nav role="nav" className="nav">
            <li>
              <Link to="/home" activeClassName="active">Home</Link>
            </li>
            <li>
              <Link to="/dustbin" activeClassName="active">Dustbin</Link>
            </li>
            <li>
              <Link to="/finacial" activeClassName="active">Finacial</Link>
            </li>
            <li>
              <Link to="page3" activeClassName="active">page3</Link>
            </li>
          </nav>
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // ... computed data from state and optionally ownProps
  // username: state.user.username
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // dispatching plain actions
    // ...bindActionCreators({ setUserInfo, clearUserInfo }, dispatch)
    // clearUserInfo: () => dispatch({ type: CLEAR_USER_INFO })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
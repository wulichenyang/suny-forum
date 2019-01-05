import React, { Component, Fragment } from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import Opinion from './Opinion'
import Loading from '@components/Loading'
import Error from '@components/Error'
import './index.less'

class OpinionList extends Component {
  componentDidMount() {

  }

  componentWillReceiveProps(nextProp) {

  }

  render() {
    const {

		} = this.props

    return (

      <section className="opinion-list">
        OpinionList
        <Opinion></Opinion>
      </section>
      
    )
  }
}

export default OpinionList
import React, { Component, Fragment } from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import Opinion from './Opinion'
// import Loading from '@components/Loading'
// import Error from '@components/Error'
import './index.less'

class OpinionList extends Component {
  render() {
    const {
      opinions,
      // deleteAction,
      // deletingOpinion
    } = this.props
    return (
      <section className="opinion-list">
        {opinions &&
          opinions.map(opinion => {
            return (
              <Opinion
                key={opinion._id}
                opinionId={opinion._id}
                content={opinion.content}
                username={opinion.user.name}
                userGitHandler={opinion.user.username}
                date={opinion.date}
                avatarUrl={opinion.user.avatarUrl}
                userId={opinion.user._id}
                currentUserId={opinion.currentUserId}
                currentUserRole={opinion.currentUserRole}
              // deleteAction={deleteAction}
              // deletingOpinion={deletingOpinion}
              >
              </Opinion>
            )
          })
        }
      </section>

    )
  }
}
Opinion.defaultProps = {
  opinions: [],
  // deleteAction: () =>{},
  // deletingOpinion: null
}

Opinion.propTypes = {
  opinions: PropTypes.array,
  // deleteAction: PropTypes.func,
  // deletingOpinion: PropTypes.any
}

export default OpinionList
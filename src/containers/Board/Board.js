import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getUsers } from '../../actions/hiringBoardActions'
import { BOARD_COLUMNS } from '../../constants/common'
import UserCard from '../../components/UserCard'

import styles from './board.scss'

class Board extends Component {
  static propTypes = {
    getUsers: PropTypes.func.isRequired
  }

  componentDidMount () {
    this.props.getUsers()
  }

  render () {
    return (
      <div className={styles.container}>
        { BOARD_COLUMNS.map(status =>
          <div>
            <h1>{status}</h1>
            <UserCard key={status} />
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getUsers
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Board)

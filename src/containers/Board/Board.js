import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import _ from 'lodash'
import { connect } from 'react-redux'
import { getUsers, configureFilter } from '../../actions/hiringBoardActions'
import { BOARD_COLUMNS } from '../../constants/common'
import UserCard from '../../components/UserCard'
import Input from '../../components/Common/Input'
import Loader from '../../components/Loader'
import { filterByCityAndName } from '../../utils/boardUtils'
import './board.css'

class Board extends Component {
  static propTypes = {
    getUsers: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    filters: PropTypes.shape({
      name: '',
      city: ''
    }),
    users: PropTypes.shape({
      applied: PropTypes.array,
      interviewing: PropTypes.array,
      hiring: PropTypes.array
    }),
    configureFilter: PropTypes.func.isRequired
  }

  componentDidMount () {
    this.props.getUsers()
  }

  renderCards = (users = [], column) => {
    const { filters } = this.props
    const filteredUsers = filterByCityAndName(users[column], filters)
    return filteredUsers.map(user => {
      const { id, name, avatar, city } = user
      return (
        <UserCard {...{
          key: id,
          type: column,
          name,
          avatar,
          city
        }} />
      )
    })
  }

  render () {
    const { users, loading, filters, configureFilter } = this.props

    return (
      <div className='container'>
        <div className='filter'>
          <div>
            <Input label='Name' value={filters.name} onChange={value => configureFilter('name', value)} />
            <Input label='City' value={filters.city} onChange={value => configureFilter('city', value)} />
          </div>
        </div>
        <div className='board'>
          <Loader condition={() => !loading}>
            { BOARD_COLUMNS.map(column =>
              <div key={column.id} className='column'>
                <h1>{column.label}</h1>
                {this.renderCards(users, column.id)}
              </div>
            )}
          </Loader>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.hiringBoard.users,
  filters: state.hiringBoard.filters,
  loading: _.get(state.hiringBoard, 'loading', false)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getUsers,
  configureFilter
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Board)

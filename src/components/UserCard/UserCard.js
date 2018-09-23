import React from 'react'
import PropTypes from 'prop-types'
import { BOARD_COLUMNS_TYPES } from '../../constants/common'
import './userCard.css'

const renderControls = (type) => {
  // @TODO: Refactor it, time is up. It's not finished part
  switch (type) {
    case BOARD_COLUMNS_TYPES[0]: {
      return <span>right</span>
    }
    case BOARD_COLUMNS_TYPES[1]: {
      return (
        <div>
          <span>left</span>
          <span>right</span>
        </div>
      )
    }
    case BOARD_COLUMNS_TYPES[2]: {
      return <span>right</span>
    }

    default: return null
  }
}

const UserCard = ({ name, avatar, city, type }) =>
  <div className='userCard'>
    <img src={avatar} alt='avatar' />
    <div>
      <p>Name: {name}</p>
      <p>City: {city}</p>
      {renderControls(type)}
    </div>
  </div>

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  type: PropTypes.oneOf(BOARD_COLUMNS_TYPES)
}

export default UserCard

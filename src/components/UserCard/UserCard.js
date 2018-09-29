import React from 'react'
import PropTypes from 'prop-types'
import { BOARD_COLUMNS_TYPES } from '../../constants/common'
import MaterialIcon from 'material-icons-react'
import './userCard.css'

const renderButton = (icon, column, onClick) =>
  <MaterialIcon icon={icon} onClick={() => onClick(column)} />

const renderControls = (type, onClick) => {
  switch (type) {
    case BOARD_COLUMNS_TYPES[0]: {
      return renderButton('chevron_right', BOARD_COLUMNS_TYPES[1], onClick)
    }
    case BOARD_COLUMNS_TYPES[1]: {
      return (
        <div>
          {renderButton('chevron_left', BOARD_COLUMNS_TYPES[0], onClick)}
          {renderButton('chevron_right', BOARD_COLUMNS_TYPES[2], onClick)}
        </div>
      )
    }
    case BOARD_COLUMNS_TYPES[2]: {
      return renderButton('chevron_left', BOARD_COLUMNS_TYPES[1], onClick)
    }

    default: return null
  }
}

const UserCard = ({ name, avatar, city, type, onClick }) =>
  <div className='userCard'>
    <div className='userContainer'>
      <img src={avatar} alt='avatar' />
      <div>
        <p>Name: {name}</p>
        <p>City: {city}</p>
      </div>
    </div>
    <div className='controls'>
      {renderControls(type, onClick)}
    </div>
  </div>

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(BOARD_COLUMNS_TYPES)
}

export default UserCard

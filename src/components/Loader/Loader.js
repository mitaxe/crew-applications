import React from 'react'
import PropTypes from 'prop-types'

const Loader = ({ condition, children }) =>
  condition()
    ? children
    : <div>Loading...</div>

Loader.propTypes = {
  condition: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Loader

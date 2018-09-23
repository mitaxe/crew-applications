import React from 'react'
import PropTypes from 'prop-types'
import './input.css'

const Input = ({ id, label, type, value, placeholder, onChange }) => {
  return (
    <div className='inputContainer'>
      <label htmlFor={id}>{label}</label>
      <input {...{
        id,
        type,
        placeholder,
        value,
        onChange: event => onChange(event.target.value)
      }}
      />
    </div>
  )
}

Input.defaultProps = {
  type: 'text'
}

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default Input

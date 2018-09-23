import * as actionTypes from '../constants/actionTypes'

export default function hiringBoard (state = {}, action) {
  const { GET_USERS } = actionTypes
  switch (action.type) {
    case GET_USERS.REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case GET_USERS.SUCCESS: {
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    }
    case GET_USERS.FAIL: {
      return {
        ...state,
        loading: false
      }
    }
    default: {
      return state
    }
  }
}

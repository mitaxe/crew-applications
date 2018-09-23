import * as actionTypes from '../constants/actionTypes'

const initialState = {
  users: {
    applied: [],
    interviewing: [],
    hiring: []
  },
  filters: {
    name: '',
    city: ''
  }
}

export default function hiringBoard (state = initialState, action) {
  const { GET_USERS, APPLY_FILTER } = actionTypes
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
    case APPLY_FILTER: {
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value
        }
      }
    }
    default: {
      return state
    }
  }
}

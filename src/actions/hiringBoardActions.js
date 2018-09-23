import axios from 'axios'
import * as actionTypes from '../constants/actionTypes'
import _ from 'lodash'

// Getting users from randomusers API
export const getUsers = () => dispatch => {
  const { GET_USERS } = actionTypes
  dispatch({ type: GET_USERS.REQUEST })

  axios.get('https://randomuser.me/api/?nat=gb&results=5')
    .then(response => {
      const users = _.get(response, 'data.results', [])
      const parsedUsers = users.map(user => ({
        id: user.id.value,
        name: `${user.name.first} ${user.name.last}`,
        avatar: user.picture.medium,
        city: user.location.city
      }))

      dispatch({
        type: GET_USERS.SUCCESS,
        payload: {
          applied: parsedUsers,
          interviewing: [],
          hiring: []
        }
      })
    })
    .catch(e => {
      dispatch({
        type: GET_USERS.FAIL,
        payload: e
      })
      console.warn('Can\'t get users', e)
    })
}

export const configureFilter = (name, value) => dispatch => {
  const { APPLY_FILTER } = actionTypes
  dispatch({
    type: APPLY_FILTER,
    payload: { name, value }
  })
}

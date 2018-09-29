export const GET_USERS = createActionType('GET_USERS')
export const APPLY_FILTER = 'APPLY_FILTER'
export const MOVE_CARD = 'MOVE_CARD'

function createActionType (name) {
  return {
    REQUEST: `${name}_REQUEST`,
    SUCCESS: `${name}_SUCCESS`,
    FAIL: `${name}_FAIL`
  }
}

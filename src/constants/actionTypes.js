export const GET_USERS = createActionType('GET_USERS')
export const APPLY_FILTER = 'APPLY_FILTER'

function createActionType (name) {
  return {
    REQUEST: `${name}_REQUEST`,
    SUCCESS: `${name}_SUCCESS`,
    FAIL: `${name}_FAIL`
  }
}

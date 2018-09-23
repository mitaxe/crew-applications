export const GET_USERS = createActionType('GET_USERS')

function createActionType (name) {
  return {
    REQUEST: `${name}_REQUEST`,
    SUCCESS: `${name}_SUCCESS`,
    FAIL: `${name}_FAIL`
  }
}

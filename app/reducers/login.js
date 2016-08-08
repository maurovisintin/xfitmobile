import {
  TOKEN_ASSIGN,
  TOKEN_REMOVE,
  tokenAssign,
  tokenRemove
} from '../actions/login'

//reducer is a pure function wich recieves the current state
//and an action and returns the next state
//has the same name as the property of the store that manages
function authToken(state = "", action) {
  switch (action.type) {
    case TOKEN_ASSIGN:
      return action.authToken
    case TOKEN_REMOVE:
      return ""
    default:
      return state
  }
}

export default authToken

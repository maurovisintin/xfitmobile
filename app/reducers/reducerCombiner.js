import {
  combineReducers
} from 'redux'

import authToken from './login'

//combining all reducers in one
const rootReducer = combineReducers({
  authToken
})

export default rootReducer

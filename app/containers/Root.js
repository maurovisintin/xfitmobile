import React, {
  Component
} from 'react'
import LoginContainer from '../containers/login'

import {
  tokenAssign,
  tokenRemove
} from '../actions/login'

import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'

import Reactotron from 'reactotron'
import { Provider } from 'react-redux'

import rootReducer from '../reducers/reducerCombiner'

//use command:  node_modules/.bin/reactotron
Reactotron.connect({enabled: __DEV__})

const enhancer = compose(
  // If you have other enhancers..
  Reactotron.storeEnhancer()
)
//createStore initializes the store based on the reducers
const store = createStore(
  rootReducer,
  enhancer
)
Reactotron.addReduxStore(store)

export default class Root extends Component {
  render() {
    return (
        //provider handles passing the store to all childs
        <Provider store={store}>
            <LoginContainer />
        </Provider>
    )
  }
}

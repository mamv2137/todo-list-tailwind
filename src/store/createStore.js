import { createStore } from 'redux'
import RootReducer from './rootReducers'

const store = createStore(RootReducer)

export default store;
import { combineReducers } from 'redux'
import todoReducer from './todos/reducers'
import filterReducer from './filters/reducers'


const reducers = {
  filters: filterReducer,
  todos: todoReducer,
}

export default combineReducers({
  ...reducers
});
import {
  GET_FIELDS,
  CLEAN_FIELDS
} from './types'

const INIT_STATE = {
  favorites: {
    task: '',
    date: '',
  },
  todos: {
    task: '',
    date: '',
  }
}

export default (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case GET_FIELDS:
      
      return {
        ...state,
        [payload.route]: {
          ...state[payload.route],
          [payload.filter]: payload.value
        }
      };
    
    case CLEAN_FIELDS:
      
      return INIT_STATE
  
    default:
      return state;
  }
}
import {
ADD_TODO,
EDIT_TODO,
DELETE_TODO,
DELETE_SELECTED_TODOS,
TOGGLE_TODO_COMPLETE,
TOGGLE_TODO_FAVORITE,
SELECTED_TODOS
} from './types'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid';

function randomDate() {
    return moment(new Date(+(new Date()) - Math.floor(Math.random()*10000000000))).format('YYYY-MM-DD');
}

const data = Array.from(
  {
    length: 10,
  },
  () => ({
    id: uuidv4(),
    task: `${Math.random().toString(36).substring(7)} 🥩...`,
    date: randomDate(),
    isDone: false,
    isSelected: false,
    isFavorite: Math.round(Math.random()),
  })
);

const INIT_STATE = {
  data,
}

export default (state = INIT_STATE, { type, payload }) => {
  const newTasks = [...state.data];
  switch (type) {
    case ADD_TODO:
      
      return {
        ...state,
        data: [payload.task, ...state.data]
      }
    
    case EDIT_TODO:
      
      return { 
        ...state,
        data: newTasks.map(item => {
          const matchTask = item.id === payload.task.id
          if (matchTask) {
            return Object.assign({}, item, {
              ...payload.task
            })
          }
          return item
        })
      }
        
    case DELETE_TODO:
      newTasks.splice(
          newTasks.find((task) => task.id === payload.id),
          1
      );

      return { 
        ...state,
        data: newTasks,
      }
      
    case TOGGLE_TODO_COMPLETE:
      return { 
        ...state,
        data: newTasks.map(item => {
          const matchTask = item.id === payload.id
          if (matchTask) {
            return Object.assign({}, item, {
              isDone: !item.isDone
            })
          }
          return item
        })
      }
    
    case TOGGLE_TODO_FAVORITE:
      return { 
        ...state,
        data: newTasks.map(item => {
          const matchTask = item.id === payload.id
          if (matchTask) {
            return Object.assign({}, item, {
              isFavorite: !item.isFavorite
            })
          }
          return item
        })
      }
    
    case SELECTED_TODOS:
      return { 
        ...state,
        data: newTasks.map(item => {
          const matchTask = item.id === payload.id
          if (matchTask) {
            return Object.assign({}, item, {
              isSelected: !item.isSelected
            })
          }
          return item
        })
      }
    
    case DELETE_SELECTED_TODOS:
      return { 
        ...state,
        data: newTasks.filter(item => {
          return !item.isSelected
        })
      }
      
    default:
      return state;
  }
}
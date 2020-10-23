import {
ADD_TODO,
EDIT_TODO,
DELETE_TODO,
DELETE_SELECTED_TODOS,
TOGGLE_TODO_COMPLETE,
TOGGLE_TODO_FAVORITE,
SELECTED_TODOS,
} from './types'

export const onAddTodo = (task) => {
    return {
        type: ADD_TODO,
        payload: {
            task
        } 
    }
}

export const onEditTodo = (task) => {
    return {
        type: EDIT_TODO,
        payload: {
            task
        } 
    }
}

export const onDeleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: {
            id
        }  
    }
}

export const onDeleteSelectedItems = () => {
    return {
        type: DELETE_SELECTED_TODOS,
    }
}

export const onCompleteTodo = (id) => {
    return {
        type: TOGGLE_TODO_COMPLETE,
        payload: {
            id
        }  
    }
}

export const addFavoriteTodo = (id) => {
    return {
        type: TOGGLE_TODO_FAVORITE,
        payload: {
            id
        }  
    }
}

export const selectedItems = (id) => {
    return {
        type: SELECTED_TODOS,
        payload: {
            id
        }  
    }
}
export const getTodos = store => store.todos.data

export const getFavorites = store => store.todos.data.filter(item => item.isFavorite)
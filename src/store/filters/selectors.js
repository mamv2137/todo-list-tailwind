import moment from 'moment';
import { getTodos, getFavorites } from '../todos/selectors'

const getTodoFilters = store => store.filters.todos;
const getFavoritesFilters = store => store.filters.favorites;

export const getFilteredData = store => {
    const todos = getTodos(store);
    const filters = getTodoFilters(store);
    
    let filteredData = todos
    
    for (const elem in filters) {
        const filter = filters[elem]
        if (filter.length > 0) {
            filteredData = filteredData.filter(item => item[elem].includes(filter.toLowerCase()) || moment(item[elem]).isSame(filter))
        }
    }

    return filteredData
}

export const getFilteredFavoritesData = store => {
    const todos = getFavorites(store);
    const filters = getFavoritesFilters(store);
    
    let filteredData = todos
    
    for (const elem in filters) {
        const filter = filters[elem]
        if (filter.length > 0) {
            filteredData = filteredData.filter(item => item[elem].includes(filter.toLowerCase()) || moment(item[elem]).isSame(filter))
        }
    }

    return filteredData
}
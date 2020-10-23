import React from 'react'
import { useSelector } from 'react-redux'
import List from '../components/List'

import { getFilteredFavoritesData } from '../store/filters/selectors'

const Favorite = () => {
    const tasks = useSelector(getFilteredFavoritesData);

    return  <List items={tasks} title="Favorites"/>
}

export default Favorite;
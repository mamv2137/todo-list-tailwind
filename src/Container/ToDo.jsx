import React from 'react'
import { useSelector } from 'react-redux'
import List from '../components/List'

import { getFilteredData } from '../store/filters/selectors'


const ToDo = () => {
    const task = useSelector(getFilteredData);

    return <List items={task} title='ToDo' />
}

export default ToDo;
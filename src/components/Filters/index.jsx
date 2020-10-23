import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useDispatch, useStore } from 'react-redux'

import Input from '../inputs/Input'
import InputDate from '../inputs/InputDate'
import SearchIcon from '../Icons/SearchIcon'

import { getFields, cleanFilter } from '../../store/filters/actions'

import { FiltersContainer } from './Filters.styles.tw'

const Filters = () => {
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const route = pathname.includes('favorites') ? 'favorites' : 'todos'

    useEffect(() => {
        cleanAllFilters()
    }, [pathname])


    const handleFilters = (e) => {
        const value = e.target.value
        const filter = e.target.name
  
        dispatch(getFields(filter, value, route))
    }

    const clearDateFilter = () => {
        dispatch(getFields('date', '', route))
    }

    const cleanAllFilters = () => {
        dispatch(cleanFilter())
    }

    return (
        <FiltersContainer>
            <Input
                onChange={handleFilters}
                name="task"
                type="text"
                placeholder="Search by task..."
                icon={SearchIcon}
            />
            <InputDate
                onBlur={handleFilters}
                onClear={clearDateFilter}
                name="date"
            />
            
        </FiltersContainer>
    )
}
export default Filters
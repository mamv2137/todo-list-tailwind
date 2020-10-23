import React, { useState, useContext } from 'react'
import { useDispatch } from 'react-redux'
import {ModalContext} from '../Modal/context'

import HeaderList from './HeaderList'
import ItemList from './ItemList'

import { onDeleteTodo, onCompleteTodo, addFavoriteTodo, selectedItems, onDeleteSelectedItems } from '../../store/todos/actions'

import {ListContainer, ListItemsContainer} from './List.styles.tw'

const List = ({ items, title }) => {
    const { handleModalCreator } = useContext(ModalContext)
    const dispatch = useDispatch();

    const onCompleteItem = (id) => dispatch(onCompleteTodo(id));

    const onSelectItem = (id) => dispatch(selectedItems(id));

    const onEditItem = (item) => handleModalCreator(item);

    const onDeleteItem = (id) => dispatch(onDeleteTodo(id));
    
    const onFavoriteItem = (id) => dispatch(addFavoriteTodo(id));

    const renderItems = () => items.map(item => ( 
        <ItemList 
            key={item.id}
            item={item}
            onEdit={onEditItem}
            onComplete={onCompleteItem}
            onDelete={onDeleteItem}
            addToFavorite={onFavoriteItem}
            onSelect={onSelectItem}
        />
    ))

    return (
        <ListContainer>
            <HeaderList title={title} />
            <ListItemsContainer> 
                {renderItems()}
            </ListItemsContainer>
        </ListContainer>
    )
}

export default List;
import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { DropdownContainer, DropdownTrigger, DropdownContainerItem, DropdownItem, DropdownItemText } from './Dropdown.styles.tw'

import { onDeleteSelectedItems } from '../../store/todos/actions'


const Dropdown = () => {
    const [isOpenMenu, setOpenMenu] = useState(false)
    const dispatch = useDispatch();

    const toggleMenu = () => setOpenMenu(!isOpenMenu)

    const deleteSelectedItem = () => {
        dispatch(onDeleteSelectedItems())
        toggleMenu()
    }

    return (
        <DropdownContainer>
            <DropdownTrigger onClick={toggleMenu}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
            </DropdownTrigger>
            {
                isOpenMenu && (
                    <DropdownContainerItem>
                        <DropdownItem onClick={deleteSelectedItem}>
                            <DropdownItemText>Delete</DropdownItemText>
                            <svg className="w-5 h-5 mx-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </DropdownItem>
                    </DropdownContainerItem>
                )
            }
        </DropdownContainer>
    )
}

export default Dropdown
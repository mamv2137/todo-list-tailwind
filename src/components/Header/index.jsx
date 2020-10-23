import React, { useRef, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import Filters from '../Filters'

import { ModalContext } from '../Modal/context'

import { HeaderContainer, AddTaskButton } from './Header.styles.tw'

const Header = () => {
    const { openModal } = useContext(ModalContext);

    return (
        <HeaderContainer>
            <AddTaskButton onClick={openModal}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
            </AddTaskButton>
            <Filters />                
        </HeaderContainer>
    )
} 

export default Header;
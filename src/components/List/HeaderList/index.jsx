import React from 'react'
import Dropdown from '../../Dropdown'

import { HeaderContainer, HeaderTitle } from './HeaderList.styles.tw'

const HeaderList = ({title}) => {
    return (
        <HeaderContainer>
            <HeaderTitle>{title} List</HeaderTitle>
            <Dropdown />
        </HeaderContainer>
    )
}

export default HeaderList;
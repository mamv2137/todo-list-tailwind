import React from 'react'
import { NavLink } from 'react-router-dom'
import FavoriteIcon from '../Icons/FavoriteIcon'
import TaskIcon from '../Icons/Task'
import Avatar from '../Avatar'

import { SidebarContainer, SidebarMenuContainer } from './Sidebar.styles.tw'

const Sidebar = () => {
    const activeClass = "text-blue-500"
    return (
        <SidebarContainer>
            <SidebarMenuContainer>
                <NavLink exact activeClassName={activeClass} to='/'>
                    <TaskIcon />
                </NavLink>
                <NavLink activeClassName={activeClass} to='/favorites'>
                    <FavoriteIcon />
                </NavLink>
            </SidebarMenuContainer>
            <Avatar src='https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' alt="Profile Avatar" />
        </SidebarContainer>
    )
}

export default Sidebar;
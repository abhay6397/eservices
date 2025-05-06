import React from 'react'
import { NavLink } from 'react-router'

export const Header = () => {
  return (
    <header class="site-header">
    <div class="container header-content">
        <h1 class="logo">UrbanService</h1>
        <input type="text" placeholder="Search for services..." class="search-bar" />
        <nav>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/services'}>Services</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>
        </nav>
    </div>
</header>
  )
}

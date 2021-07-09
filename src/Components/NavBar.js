import React from 'react'
import {NavLink} from 'react-router-dom' 

function NavBar() {
    return (
        <nav >
            <NavLink exact to="/">Characters</NavLink>
            <NavLink to="/locations">Locations</NavLink>
        </nav>
    )
}

export default NavBar

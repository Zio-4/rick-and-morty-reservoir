import React from 'react'
import {Link} from 'react-router-dom' 

function NavBar() {
    return (
        <nav>
            <Link to="/characters">Characters</Link>
            <Link to="/locations">Locations</Link>
        </nav>
    )
}

export default NavBar

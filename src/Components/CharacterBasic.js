import React from 'react'
import {Link} from 'react-router-dom'

function CharacterBasic({name, status, species, image, id}) {



    return (
 <div className="ui link card">
    <Link to={`/characters/${id}`}>
        
                <img src={image} alt="Character Avatar"></img>
                <p className="center aligned">Name: {name}</p>  
                <p className="center aligned">Status: {status}</p>
                <p className="center aligned">Species: {species}</p>
        
    </Link>
    </div>
    )
}

export default CharacterBasic

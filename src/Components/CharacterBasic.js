import React from 'react'
import {Link} from 'react-router-dom'

function CharacterBasic({name, status, species, image, id}) {



    return (
    
    <Link to={`/characters/${id}`}>
        <div className="ui link card">
                <img src={image} alt="Character Avatar"></img>
                <p className="center aligned">Name: {name}</p>  
                <p className="center aligned">Status: {status}</p>
                <p className="center aligned">Species: {species}</p>
        </div>
    </Link>
    )
}

export default CharacterBasic

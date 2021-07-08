import React from 'react'
import {Link} from 'react-router-dom'

function CharacterBasic({name, status, species, image, id}) {



    return (
    <>
        <Link to={`/characters/${id}`}>
        <div className="ui link card">
            <img src={image} alt="Character Avatar"></img>
            <p>Name: {name}</p>  
            <p>Status: {status}</p>
            <p>Species: {species}</p>
        </div>
        </Link>

    </>
    )
}

export default CharacterBasic

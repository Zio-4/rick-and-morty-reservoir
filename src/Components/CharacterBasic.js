import React from 'react'

function CharacterBasic({name, status, species, image}) {
    return (
        <div className="ui link card">
            <img src={image} alt="Character Avatar"></img>
            <p>Name: {name}</p>  
            <p>Status: {status}</p>
            <p>Species: {species}</p>
        </div>
    )
}

export default CharacterBasic

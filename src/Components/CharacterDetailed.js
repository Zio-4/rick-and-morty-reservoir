import React from 'react'

function CharacterDetailed() {
    return (
        <div className="ui link card">
            <img src={image} alt="Character Avatar"></img>
            <p>Name: {name}</p>  
            <p>Status: {status}</p>
            <p>Species: {species}</p>
            <p>Type: {type}</p>
            <p>Gender: {gender}</p>
            <p>Origin: {origin}</p>
            <p>Location: {location}</p>
            <p>Episode(s): {/*episode*/}</p>
        </div>
    )
}

export default CharacterDetailed

import React from 'react'
import {Link} from 'react-router-dom'

function CharacterBasic({name, status, species, image, id}) {



    return (
 <div className="ui link card">
    <Link to={`/characters/${id}`}>
        
                <img src={image} alt="Character Avatar" height={300} width={300}></img>
                <p className="center aligned"><b>Name: {name}</b></p>  
                <p className="center aligned">Status: {status}</p>
                <p className="center aligned">Species: {species}</p>
        
    </Link>
    </div>
    )
}

export default CharacterBasic

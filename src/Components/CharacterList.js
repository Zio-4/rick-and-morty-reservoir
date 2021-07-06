import React from 'react'
import Character from './Character'

function CharacterList({characters}) {

   const displayCharacters = characters.map(obj => <Character key={obj.id} name={obj.name} status={obj.status} species={obj.species} image={obj.image}/>)


    return (
        <div className="ui grid two column cards">
            {displayCharacters}
        </div>
    )
}

export default CharacterList

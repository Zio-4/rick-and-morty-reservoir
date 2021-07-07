import React from 'react'
import CharacterBasic from './CharacterBasic'

function CharacterList({characters}) {

   const displayCharacters = characters.map(obj => <CharacterBasic key={obj.id} name={obj.name} status={obj.status} species={obj.species} image={obj.image} />)


    return (
        <div className="ui grid six column cards">
            {displayCharacters}
        </div>
    )
}

export default CharacterList

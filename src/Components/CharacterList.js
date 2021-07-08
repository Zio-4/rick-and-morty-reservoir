import React from 'react'
import CharacterBasic from './CharacterBasic'

function CharacterList({characters}) {

   const displayCharacters = characters.map(obj => <CharacterBasic key={obj.id} name={obj.name} status={obj.status} species={obj.species} image={obj.image} type={obj.type} gender={obj.gender} origin={obj.origin.name} location={obj.location.name} id={obj.id} />)


    return (
        <div className="ui grid six column cards">
            {displayCharacters}
        </div>
    )
}

export default CharacterList

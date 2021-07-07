import React, {useEffect, useState} from 'react'
import NewCharForm from './NewCharForm'
import Header from './Header'
import NavBar from './NavBar'
import CharacterList from './CharacterList'

function App() {

    const [characters, setCharacters] = useState([])
    const [nameSort, setNameSort] = useState("A - Z")
    const [statusFilter, setStatusFilter] = useState("Alive")

   useEffect(() => {
        fetch('http://localhost:3000/characters')
             .then(r => r.json())
             .then(data => {
                 console.log("data:", data)
                setCharacters(data)
             })
    }, []) 



 console.log("characters:", characters)

    function changeSortValue(sortValue) {
        setNameSort(sortValue)
    }

    function changeFilterValue(filterValue) {
        setStatusFilter(filterValue)
    }



    const displayedCharacters = () => {
        // Needs to be default of all
        const filteredCharacters = characters.filter(c => statusFilter === c.status)

        if (nameSort === "A - Z") {
            return filteredCharacters.sort((charA, charB) => {
              return charA.name <= charB.name ? -1 : 1
            })
        } else if (nameSort === "Z - A") {
            return filteredCharacters.sort((charA, charB) => {
                return charA.name >= charB.name ? -1 : 1
            })
        } else return filteredCharacters
        
    }

    return (
        <div>
            <Header />
            <NavBar nameSort={nameSort} statusFilter={statusFilter} changeSortValue={changeSortValue} changeFilterValue={changeFilterValue}/>
            <br></br>
            <CharacterList characters={displayedCharacters()}/>
        </div>
    )
}

export default App

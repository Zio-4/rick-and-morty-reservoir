import React, {useEffect, useState} from 'react'
import NewCharForm from './NewCharForm'
import Header from './Header'
import NavBar from './NavBar'
import CharacterList from './CharacterList'

function App() {

    const [characters, setCharacters] = useState([])
    const [nameSort, setNameSort] = useState("Default")
    const [statusFilter, setStatusFilter] = useState("All")

   useEffect(() => {
        fetch('http://localhost:3000/characters')
             .then(r => r.json())
             .then(data => {
                setCharacters(data)
             })
    }, []) 



    function changeSortValue(sortValue) {
        setNameSort(sortValue)
    }

    function changeFilterValue(filterValue) {
        setStatusFilter(filterValue)
    }



    const displayedCharacters = () => {
        if (nameSort === "Default" && statusFilter === "All") {
            return characters
        }
       
        const filteredCharacters = characters.filter(c => {
             if (statusFilter === "All") {
                return characters
            } else return statusFilter === c.status})

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

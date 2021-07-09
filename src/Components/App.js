import React, {useEffect, useState} from 'react'
import NewCharForm from './NewCharForm'
import Header from './Header'
import FilterButtons from './FilterButtons'
import CharacterList from './CharacterList'
import {Switch, Route} from "react-router-dom"
import NavBar from "./NavBar"
import CharacterDetailed from './CharacterDetailed'
import ClickInfo from './ClickInfo'

function App() {

    const [characters, setCharacters] = useState([])
    const [nameSort, setNameSort] = useState("Default")
    const [statusFilter, setStatusFilter] = useState("All")

   useEffect(() => {
        fetch('http://localhost:3001/characters')
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

    function addNewCharacter(newChar) {
        const addedCharacter = [...characters, newChar]
        setCharacters(addedCharacter)
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
        <div className="App-header">
            <Header />
            <NavBar />
            <Switch>
                <Route path="/newcharacterform">
                    <NewCharForm addNewCharacter={addNewCharacter} />
                </Route>
                <Route exact path={`/characters/:id`}>
                    <CharacterDetailed />
                </Route>
                <Route exact path="/">
                    <FilterButtons nameSort={nameSort} statusFilter={statusFilter} changeSortValue={changeSortValue} changeFilterValue={changeFilterValue} addNewCharacter={addNewCharacter} />
                    <ClickInfo />
                    <CharacterList characters={displayedCharacters()}/>
                </Route>
               <Route path="*">
                    <h1>404 not found</h1>
                </Route> 
            </Switch>
        </div>
    )
}

export default App

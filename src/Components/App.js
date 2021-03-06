import React, {useEffect, useState} from 'react'
import NewCharForm from './NewCharForm'
import Header from './Header'
import FilterButtons from './FilterButtons'
import CharacterList from './CharacterList'
import {Switch, Route} from "react-router-dom"
import NavBar from "./NavBar"
import CharacterDetailed from './CharacterDetailed'
import ClickInfo from './ClickInfo'
import Author from './Author'
import Locations from './Locations'

function App() {

    const [characters, setCharacters] = useState([])
    const [nameSort, setNameSort] = useState("Default")
    const [statusFilter, setStatusFilter] = useState("All")
    const [search, setSearch] = useState("")

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

    function updateSearch(searchValue) {
        setSearch(searchValue)
    }



    const displayedCharacters = () => {
        if (nameSort === "Default" && statusFilter === "All" && search === "") {
            return characters
        }
       
        const filteredCharacters = characters.filter(c => c.name.toLowerCase().includes(search.toLowerCase())).filter(c => {
             if (statusFilter === "All") {
                return true
            } else return statusFilter === c.status})

        if (nameSort === "A - Z") {
            return filteredCharacters.sort((charA, charB) => {
              return charA.name.toLowerCase() <= charB.name.toLowerCase() ? -1 : 1
            })
        } else if (nameSort === "Z - A") {
            return filteredCharacters.sort((charA, charB) => {
                return charA.name.toLowerCase() >= charB.name.toLowerCase() ? -1 : 1
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
                <Route path="/locations">
                    <Locations />
                </Route>
                <Route path="/">
                    <FilterButtons nameSort={nameSort} statusFilter={statusFilter} changeSortValue={changeSortValue} changeFilterValue={changeFilterValue} addNewCharacter={addNewCharacter} search={search} updateSearch={updateSearch}/>
                    <ClickInfo />
                    <CharacterList characters={displayedCharacters()}/>
                </Route>
               <Route path="*">
                    <h1>404 not found</h1>
                </Route> 
            </Switch>
            <Author />
        </div>
    )
}

export default App

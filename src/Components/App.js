import React, {useEffect, useState} from 'react'
import NewCharForm from './NewCharForm'
import Header from './Header'
import NavBar from './NavBar'
import CharacterList from './CharacterList'

function App() {

    const [characters, setCharacters] = useState([])
    const [nameSort, setNameSort] = useState("A - Z")
    const [statusFilter, setStatusFilter] = useState("Alive")
    const [page, setPage] = useState(1)

   /* useEffect(() => {
        if (page >= 35) {
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
             .then(r => r.json())
             .then(data => {
                setCharacters(mUV => [...mUV, ...data.results])
                setPage(mUV => mUV + 1)
             })}
    }, [page]) */
    

    //   useEffect(() => {
    //     let tmpArray = []
    //     for (let j=1; j < 35; j++) {
    //         fetch(`https://rickandmortyapi.com/api/character/?page=${j}`)
    //         .then(r => r.json())
    //         .then(data => {
    //             tmpArray = [...tmpArray, ...data.results]
    //         // const tmpArray = []
    //           /*  for (var i = 0; i < data.results.length; i++) {
    //                 tmpArray.push(data.results[i]) 
    //             } */
    //         }) 
    //     }
    //         console.log("tmp:", tmpArray)
    //         setCharacters(tmpArray)
    //         //const actualList = characters.slice(20)
    //        // setCharacters(actualList)
    // }, []) 



 console.log("characters:", characters)

    function changeSortValue(sortValue) {
        setNameSort(sortValue)
    }

    function changeFilterValue(filterValue) {
        setStatusFilter(filterValue)
    }



    const displayedCharacters = () => {
        const filteredCharacters = characters.filter(c => statusFilter === c.status)

        if (nameSort === "A - Z") {
            return filteredCharacters.sort((charA, charB) => {
              return charA.name <= charB.name ? -1 : 1
            })
        } else return filteredCharacters
    }

    return (
        <div>
            <Header />
            <NavBar nameSort={nameSort} statusFilter={statusFilter} changeSortValue={changeSortValue} changeFilterValue={changeFilterValue}/>
            <NewCharForm />
            <CharacterList characters={characters}/>
        </div>
    )
}

export default App

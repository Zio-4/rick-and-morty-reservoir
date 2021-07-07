import React, {useState} from 'react'
import NewCharForm from './NewCharForm'

function NavBar({nameSort, statusFilter, changeSortValue, changeFilterValue}) {
    const [buttonText, setButtonText] = useState("Add New Character")
    
    function handleSortChange(e) {
        changeSortValue(e.target.value)
    }

    function handleFilterChange(e) {
        changeFilterValue(e.target.value)
    }

    function handleButtonText() {
        buttonText === "Add New Character" ? setButtonText("Hide Character Form") : setButtonText("Add New Character")
    }

    return (
        <div>
            <label>Sort by Name:</label>
            <select name="character-sort" value={nameSort} onChange={handleSortChange}>
            <option value="A - Z">A - Z</option>
            <option value="Z - A">Z - A</option>
            </select>

            <label>Filter by Status:</label>
            <select name="character-sort" value={statusFilter} onChange={handleFilterChange}>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
            </select>

            <button onClick={handleButtonText}>{buttonText}</button>
            {buttonText === "Add New Character" ? null : <NewCharForm />}
        </div>
    )
}

export default NavBar

import React from 'react'

function NavBar({nameSort, statusFilter, changeSortValue, changeFilterValue}) {
    
    function handleSortChange(e) {
        changeSortValue(e.target.value)
    }

    function handleFilterChange(e) {
        changeFilterValue(e.target.value)
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

            <button>Add New Character</button>
        </div>
    )
}

export default NavBar

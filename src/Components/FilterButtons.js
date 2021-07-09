import React from 'react'
import {Link} from "react-router-dom"

function FilterButtons({nameSort, statusFilter, changeSortValue, changeFilterValue, search, updateSearch}) {
    
    function handleSortChange(e) {
        changeSortValue(e.target.value)
    }

    function handleFilterChange(e) {
        changeFilterValue(e.target.value)
    }

    function handleSearch(e) {
        updateSearch(e.target.value)
    }

    return (
        <div className="ui centered grid">
            <div className="ui inverted input">
                <label className="search">Search for a character: </label>
                <input type="text" placeholder="'Pickle Morty'" value={search} onChange={handleSearch}></input>
            </div>

            <label className="dropdown">Sort by Name: </label>
            <select  name="character-sort" value={nameSort} onChange={handleSortChange}>
            <option value="Default">Default Order</option>
            <option value="A - Z">A - Z</option>
            <option value="Z - A">Z - A</option>
            </select>

            <label className="dropdown">Filter by Status: </label>
            <select  name="character-sort" value={statusFilter} onChange={handleFilterChange}>
            <option value="All">All</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
            </select>
            
            <div id="submitBtn">
            <Link to="/newcharacterform">
                <div className="ui animated fade inverted green button" tabIndex="0">
                    <div className="visible content">Add New Character</div>
                    <div className="hidden content">
                        <i className="user plus icon"></i>
                    </div>
                </div>
            </Link>
            </div>
    </div>
    )
}

export default FilterButtons
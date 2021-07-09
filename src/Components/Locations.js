import React from 'react'
import {useState, useEffect} from 'react'

function Locations() {
    const [locations, setLocations] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/locations')
        .then(r => r.json())
        .then(data => {
            setLocations(data)
        })
    }, [])

    const displayLocations = locations.map(l => {
    return <div className="ui link card" key={l.id}>
        <p className="center aligned">Name: {l.name}</p>
        <p className="center aligned">Type: {l.type}</p>
        <p className="center aligned">Dimension: {l.dimension}</p>
        </div>})

    return (
        <div className="ui six cards">
            {displayLocations}
        </div>
    )
}

export default Locations

import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

function CharacterDetailed() {
    const [character, setCharacter] = useState(null)
    const params = useParams()
    console.log("params:", params)

    useEffect(() => {
        fetch(`http://localhost:3001/characters/${params.id}`)
        .then(r => r.json())
        .then(data => {
            setCharacter(data)})
    }, [params.id])


    if (!character) return <h2>Loading...</h2>

    const {name, status, species, type, gender, origin, location, image } = character

    return (
    <>
        <div className="ui centered card">
        <img src={image} alt="Character Avatar" ></img>
            <p><b>Name: {name}</b></p>  
            <p>Status: {status}</p>
            <p>Species: {species}</p>
            <p>Type: {type}</p>
            <p>Gender: {gender}</p>
            <p>Origin: {origin.name}</p>
            <p>Location: {location.name}</p>
        </div>
    </>
    )
}

export default CharacterDetailed

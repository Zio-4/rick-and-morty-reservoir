import React, {useState} from 'react'
import {useHistory} from "react-router-dom"

function NewCharForm({addNewCharacter}) {
    const [formData, setFormData] = useState({
        name: "",
        status: "",
        species: "",
        type: "",
        gender: "",
        origin: {name: ""},
        location: {name: ""},
        image: ""
    })
    const history = useHistory()

    function handleChange(e) {
        setFormData({
            ...formData, [e.target.id]: e.target.value
        })
    }


    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:3001/characters', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({image: formData.image, name: formData.name, status: formData.status, species: formData.species, type: formData.type, gender: formData.gender, origin: formData.origin.name, location: formData.location.name})
            })
            .then(r => r.json())
            .then(data => {
                addNewCharacter(data)
                setFormData({
                    name: "",
                    status: "",
                    species: "",
                    type: "",
                    gender: "",
                    origin: {name: ""},
                    location: {name: ""},
                    image: ""
                })
                history.push(`/characters/${data.id}`)
            })
    }



    return (
        <form onSubmit={handleSubmit}>
            <div className="ui inverted segment">
                <div className="ui inverted form">
                    <div className="two fields">
                        <div className="field">
                            <label>Character Name: </label>
                            <input 
                                type="text"
                                id="name"
                                value={formData.name}
                                placeholder="'Pickle Rick'"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="field">
                            <label>Status: </label>
                            <select
                                id="status"
                                value={formData.status}
                                onChange={handleChange}
                            >
                            <option value="">Select a status</option>
                            <option value="Alive">Alive</option>
                            <option value="Dead">Dead</option>
                            <option value="unknown">Unknown</option>
                            </select>
                        </div>
                    </div>
                    <div className="three fields">
                        <div className="field">
                            <label>Species: </label>
                            <input 
                                type="text"
                                id="species"
                                value={formData.species}
                                placeholder="Human, Pickle, etc..."
                                onChange={handleChange}
                            />
                        </div>
                        <div className="field">
                            <label>Type: </label>
                            <input 
                                type="text"
                                id="type"
                                value={formData.type}
                                placeholder="Type or subspecies of the character"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="field">
                            <label>Gender: </label>
                            <input 
                                type="text"
                                id="gender"
                                value={formData.gender}
                                placeholder="Female, Male, Genderless or unknown"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="field">
                            <label>Origin: </label>
                            <input 
                                type="text"
                                value={formData.origin.name}
                                placeholder="Where is the character from?"
                                onChange={(e) => setFormData({...formData, origin: {name: e.target.value}})}
                            />
                        </div>
                        <div className="field">
                            <label>Location: </label>
                            <input 
                                type="text"
                                value={formData.location.name}
                                placeholder="Last known location"
                                onChange={(e) => setFormData({...formData, location: {name: e.target.value}})}
                            />
                        </div>
                    </div>
                        <label>Character Image (Must be hosted from another source. Use https://rickandmortyapi.com/api/character/avatar/19.jpeg for default avatar when no image available): </label>
                        <input 
                            type="text"
                            id="image"
                            value={formData.image}
                            placeholder="https://rickandmortyapi.com/api/character/avatar/19.jpeg"
                            onChange={handleChange}
                        />
                        <button className="ui inverted green submit button" tabIndex="0">
                            Submit Character
                        </button>
                </div>
            </div>
        </form>
    )
}



export default NewCharForm

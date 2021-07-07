import React, {useState} from 'react'


function NewCharForm({addNewCharacter}) {
    const [formData, setFormData] = useState({
        name: "",
        status: "",
        species: "",
        type: "",
        gender: "",
        origin: {name: ""},
        location: {name: ""},
        image: "",
        episode: [""]
    })

    function handleChange(e) {
        setFormData({
            ...formData, [e.target.id]: e.target.value
        })
    }


    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:3000/characters', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({image: formData.image, name: formData.name, status: formData.status, species: formData.species, type: formData.type, gender: formData.gender, origin: formData.origin.name, location: formData.location.name, episode: formData.episode})
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
                    image: "",
                    episode: [""]
                })
            })
    }



    return (
        <form onSubmit={handleSubmit}>

            <label>Character Name: </label>
            <input 
                type="text"
                id="name"
                value={formData.name}
                placeholder="'Pickle Rick'"
                onChange={handleChange}
            />
            <label>Status: </label>
            <input 
                type="text"
                id="status"
                value={formData.status}
                placeholder="Alive, Dead, Unknown"
                onChange={handleChange}
            />
            <label>Species: </label>
            <input 
                type="text"
                id="species"
                value={formData.species}
                placeholder="Human, Pickle, etc..."
                onChange={handleChange}
            />
            <label>Type: </label>
            <input 
                type="text"
                id="type"
                value={formData.type}
                placeholder="Type or subspecies of the character"
                onChange={handleChange}
            />
            <label>Gender: </label>
            <input 
                type="text"
                id="gender"
                value={formData.gender}
                placeholder="Female', 'Male', 'Genderless' or 'unknown"
                onChange={handleChange}
            />
            <label>Origin: </label>
            <input 
                type="text"
                value={formData.origin.name}
                placeholder="Where is the character from?"
                onChange={(e) => setFormData({...formData, origin: {name: e.target.value}})}
            />
            <label>Location: </label>
            <input 
                type="text"
                value={formData.location.name}
                placeholder="Last known location"
                onChange={(e) => setFormData({...formData, location: {name: e.target.value}})}
            />
            <label>Character Image (Must be hosted from another source. Use https://rickandmortyapi.com/api/character/avatar/19.jpeg for default avatar when no image available): </label>
            <input 
                type="text"
                id="image"
                value={formData.image}
                placeholder="https://rickandmortyapi.com/api/character/avatar/19.jpeg"
                onChange={handleChange}
            /> 
            <label>Episode(s): </label>
            <input 
                type="text"
                value={formData.episode}
                placeholder="1, 2, 3"
                onChange={(e) => setFormData({...formData, episode: [e.target.value]})}
            />
            <button type="submit">Submit Character</button>
        </form>
    )
}



export default NewCharForm

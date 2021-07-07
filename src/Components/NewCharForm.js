import React, {useState} from 'react'


function NewCharForm() {
    const [formData, setFormData] = useState({
        image: "",
        name: "",
        status: "",
        species: "",
        type: "",
        gender: "",
        origin: "",
        location: "",
        episode: ""
    })

    return (
        <form>
            <label>Character Image (Must be hosted from another source): </label>
            <input 
                type="text"
                value={formData.image}
                placeholder="https://rickandmortyapi.com/api/character/avatar/19.jpeg"
                onChange={(e) => setFormData({...formData, image: e.target.value})}
            />
            <label>Character Name: </label>
            <input 
                type="text"
                value={formData.name}
                placeholder="'Pickle Rick'"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <label>Status: </label>
            <input 
                type="text"
                value={formData.status}
                placeholder="Alive, Dead, Unknown"
                onChange={(e) => setFormData({...formData, status: e.target.value})}
            />
            <label>Species: </label>
            <input 
                type="text"
                value={formData.species}
                placeholder="Human, Pickle, etc..."
                onChange={(e) => setFormData({...formData, species: e.target.value})}
            />
            <label>Type: </label>
            <input 
                type="text"
                value={formData.type}
                placeholder="Type or subspecies of the character"
                onChange={(e) => setFormData({...formData, type: e.target.value})}
            />
            <label>Gender: </label>
            <input 
                type="text"
                value={formData.gender}
                placeholder="Female', 'Male', 'Genderless' or 'unknown"
                onChange={(e) => setFormData({...formData, gender: e.target.value})}
            />
            <label>Origin: </label>
            <input 
                type="text"
                value={formData.origin}
                placeholder="Where is the character from?"
                onChange={(e) => setFormData({...formData, origin: e.target.value})}
            />
            <label>Location: </label>
            <input 
                type="text"
                value={formData.location}
                placeholder="Last known location"
                onChange={(e) => setFormData({...formData, location: e.target.value})}
            />
            <label>Episode(s): </label>
            <input 
                type="text"
                value={formData.episode}
                placeholder="1, 2, 3"
                onChange={(e) => setFormData({...formData, episode: e.target.value})}
            />
            

        </form>
    )
}

export default NewCharForm

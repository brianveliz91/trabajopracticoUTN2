
document.addEventListener('DOMContentLoaded', () => {
    const API_URL = 'https://hp-api.onrender.com/api/characters';
    let characters = [];

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            characters = data;
            renderCharacters('personajes-con-imagen', characters.filter(character => character.image));
            renderCharacters('personajes-sin-imagen', characters.filter(character => !character.image));
        })
       

    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredCharactersConImagen = characters.filter(character => character.image && character.name.toLowerCase().includes(searchTerm));
        const filteredCharactersSinImagen = characters.filter(character => !character.image && character.name.toLowerCase().includes(searchTerm));

        renderCharacters('personajes-con-imagen', filteredCharactersConImagen);
        renderCharacters('personajes-sin-imagen', filteredCharactersSinImagen);
    });
});

function renderCharacters(containerId, characters) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    characters.forEach(character => {
        const characterDiv = createCharacterElement(character);
        container.appendChild(characterDiv);
    });
}

function createCharacterElement(character) {
    const characterDiv = document.createElement('div');

    if (character.image) {
        characterDiv.classList.add('character');
        characterDiv.innerHTML = `
            <h3>${character.name}</h3>

            <img src="${character.image}" alt="${character.name}">
            <p>House: ${character.house || 'No tiene'}</p>
            <p>Ancestry: ${character.ancestry || 'No tiene'}</p>
            <p>Date of Birth: ${character.dateOfBirth || 'No tiene'}</p>
            <p>Patronus: ${character.patronus || 'No tiene'}</p>
        `;
    } else {
        characterDiv.classList.add('character-no-image');
        characterDiv.innerHTML = `
            <h3>${character.name}</h3>

            <p>House: ${character.house || 'No tiene'}</p>
            <p>Ancestry: ${character.ancestry || 'No tiene'}</p>
            <p>Date of Birth: ${character.dateOfBirth || 'No tiene'}</p>
            <p>Patronus: ${character.patronus || 'No tiene'}</p>
        `;
    }

    return characterDiv;
}
const pokemonContainer = document.querySelector(".container");

function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
        createPokemon(data);
    });
}

function fetchPokemons(number) {
    for (let i = 1; i <= number; i++) {
        fetchPokemon(i);
    }
}
function displayPokemonCard(pokemonData) {
    const cardContainer = document.getElementById('pokemon-card');
    const card = document.createElement('div');
    card.classList.add('card');

    const name = document.createElement('h2');
    name.textContent = `Name: ${pokemonData.name}`;

    const id = document.createElement('p');
    id.textContent = `ID: ${pokemonData.id}`;

    const weight = document.createElement('p');
    weight.textContent = `Weight: ${pokemonData.weight}`;

    const image = document.createElement('img');
    image.src = pokemonData.sprites.front_default;
    image.alt = pokemonData.name;

    card.appendChild(name);
    card.appendChild(id);
    card.appendChild(weight);
    card.appendChild(image);

    cardContainer.appendChild(card);
}

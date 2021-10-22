const pokemonContainer = document.querySelector('.pokemon-container');

function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => res.json())
        .then(data => {
            
            createPokemon(data)
        });
}

function fetchPokemons(number) {
    for (let i = 1; i <= number; i++) {
        fetchPokemon(i);
    }
}


function createPokemon(pokemon) {
    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;

    spriteContainer.appendChild(sprite);

    const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name;

    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = ('Price: $9.999');

    const btnAdd = document.createElement('a');
    btnAdd.setAttribute('href',"http://www.index.html");
    btnAdd.setAttribute('onclick',function(){alert('Got it!');})
    btnAdd.classList.add('btnAdd');
    btnAdd.textContent=('Catch!');

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(btnAdd);

    pokemonContainer.appendChild(card);

}

fetchPokemons(15);



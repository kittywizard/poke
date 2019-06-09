
document.getElementById('search').addEventListener('click', getPokemon);

function getPokemon() {
    const pokemon = document.getElementById('pokemonSearch').value.toLowerCase();

        return new Promise((resolve, reject) => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(res => res.json())
            .then(data => resolve(displayPokemon(data)))
            .catch(err => reject(err));
        });

    }

function displayPokemon(data) {
    console.log("working?");
}


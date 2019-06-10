
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
    console.log(data);

    let display = `Name: ${data.name} <br>
                    ID: ${data.id} <br>
                    Abilities: <ul>`;

    // display += `Abilities #: ${data.abilities.length} `;
  data.abilities.forEach(element => {
        console.log(element.ability.name);
        display += ` <li>${element.ability.name} </li>`;
    });
    display += `</ul>`;
    document.querySelector('div').innerHTML = display;

    
}



document.getElementById('search').addEventListener('click', getPokemon);

function getPokemon() {
    const pokemon = document.getElementById('pokemonSearch').value.toLowerCase();
        
        //error check
        if(pokemon === ''){
            let display = `Please enter a valid Pokemon name.`;
            document.getElementById('display').innerHTML = display;
            return;
        }

        return new Promise((resolve, reject) => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(res => res.json())
            .then(data => resolve(displayPokemon(data)))
            .catch(err => reject(err));
        });

    }

function displayPokemon(data) {

    let display = `Name: ${data.name} <br>
                    ID: ${data.id} <br>
                    Abilities: <ul>`;

  data.abilities.forEach(element => {
        display += ` <li>${element.ability.name} </li>`;
     });
    display += `</ul>`;
    
    document.getElementById('display').innerHTML = display;
    
    
}

/* some garbage div creation
    let newDiv = document.createElement('div');
    newDiv.className = "three columns";
    newDiv.appendChild(document.createTextNode(display));
    let contentGoesHere = document.querySelector('.content');
    contentGoesHere.appendChild(newDiv);
*/
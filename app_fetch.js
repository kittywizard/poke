
document.getElementById('search').addEventListener('click', getPokemon);

function get(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(res => res.json())
        .then(data => resolve(displayPokemon(data)))
        .catch(err => reject(err));
    });
}

function getPokemon() {
    const pokemon = document.getElementById('pokemonSearch').value.toLowerCase();
        
        //error check for no entry
        if(pokemon === ''){
            let display = `Please enter a valid Pokemon name.`;
            document.getElementById('display').innerHTML = display;
            return;
        }

        get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    }

function displayPokemon(data) {
    
    const pokeName = convertName(data.name);    

    let display = `<span class="headline">Name:</span> ${pokeName} <br>
                    <span class="headline">ID:</span> ${data.id} <br>
                    <span class="headline">Abilities:</span> <ul>`;

  data.abilities.forEach(element => {
        let eleName = element.ability.name.charAt(0).toUpperCase() + element.ability.name.slice(1);
        display += ` <li>${eleName}</li>`;
     });
    display += `</ul>`;
    
    document.getElementById('display').innerHTML = display;


}

function convertName(name) {
    //return the name, with the first character upper case
    //then slice the rest of the string at the second letter and put it back together
    return name.charAt(0).toUpperCase() + name.slice(1);
   
}
/* some garbage div creation
    let newDiv = document.createElement('div');
    newDiv.className = "three columns";
    newDiv.appendChild(document.createTextNode(display));
    let contentGoesHere = document.querySelector('.content');
    contentGoesHere.appendChild(newDiv);
*/
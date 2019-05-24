document.getElementById('search').addEventListener('click', getPokemon);

function getPokemon(e){
    const data = document.getElementById('pokemonSearch').value;
    //console.log(data);

    //creating a variable to start the API request
    const xhr = new XMLHttpRequest();

    //opening the request to get the info
    xhr.open('GET',`https://pokeapi.co/api/v2/pokemon/${data}`, true);

    xhr.onload = function(){
        if(this.status === 200) {
            console.log('its a start');
            const result = JSON.parse(this.responseText);
            if (result.type === 'success') {
                console.log(result.type);
            }
        }
        else {
            console.log('oops');
        }
    }

    xhr.send();
    e.preventDefault();
}
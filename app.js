document.getElementById('search').addEventListener('click', getPokemon);

function getPokemon(e){
    const data = document.getElementById('pokemonSearch').value.toLowerCase();

    console.log(data);

    //creating a variable to start the API request
    const xhr = new XMLHttpRequest();

    //opening the request to get the info
    xhr.open('GET',`https://pokeapi.co/api/v2/pokemon/${data}`, true);

    xhr.onload = function(){
        //check to make sure status is good before moving on
        if(this.status === 200) {
            //grab data from API and parse
            const result = JSON.parse(this.responseText);

            //use result to pull in the rest of the data you want
            console.log("Name: " + result.name);
            console.log("ID: " + result.id);
        }
        else {
            console.log('Something went terribly wrong.');
        }
    }

    xhr.send();
    e.preventDefault();
}
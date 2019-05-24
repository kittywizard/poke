
var pokeResult; //junk variable probably

//event listener for the button to grab search results
var searchForPoke = document.getElementById('search').addEventListener('click', function() {
  pokeResult = document.getElementById('pokemonSearch').value;
  //console.log(pokeResult);
  var pokeURL = "https://pokeapi.co/api/v2/pokemon/" + pokeResult + "/";
  //console.log(pokeURL);
  apiCall(pokeURL, editPage);

});

//create a function to call the API and get teh data
function apiCall(pokeURL, callback) {
  const pokemonResult = {
    //the URL will need to be edited to account for search results later..
    url: pokeURL,
    dataType: 'json',
    type: 'GET',
    success: callback,
    error: function(){
      console.log("you done messed up.");
      //display error message on screen
    }
      /* callback. when you call the original apiCall function, you can put two arguments
      one being the URL variable and one being the callback function
      that function can take the data as a success: callback and then
      do shit with it so its not here cluttering things up
      */
    
  };

  //this jquery thing makes the call so you don't have to
  $.ajax(pokemonResult);
}

//function to serve as the apiCall's callback
function editPage(data) {
      $('.display').html(`<h1>${data.name}</h1>
        <p>${data.id}</p>
        `);
}



var pokeResult; //junk variable probably

//event listener for the button to grab search results
var searchForPoke = document.getElementById('search').addEventListener('click', function() {
  pokeResult = document.getElementById('pokemonSearch').value;

  console.log(pokeResult);
  var pokeURL = "https://pokeapi.co/api/v2/pokemon/" + pokeResult + "/";
  console.log(pokeURL);
  apiCall(pokeURL);

});

//create a function to call the API and get teh data
function apiCall(pokeURL) {
  const pokemonResult = {
    //the URL will need to be edited to account for search results later..
    url: pokeURL,
    dataType: 'json',
    type: 'GET',
    success: function(data) { //put a real function call in here
      var test = data.name;
      console.log(test);
      $('.display').html(`<h1>${data.name}</h1>`);
      //lookup what a template literal is

      /* callback. when you call the original apiCall function, you can put two arguments
      one being the URL variable and one being the callback function
      that function can take the data as a success: callback and then
      do shit with it so its not here cluttering things up
      */

    }
  };

  //this jquery thing makes the call so you don't have to
  $.ajax(pokemonResult);
}

//this is a new event listener using jquery
/* function submit() {
  $(.'form').submit(event => {
    event.preventDefault();
    const queryTarget = $(event.currentTarget).find('#pokemonSearch');
    const query = queryTarget.val();

  });
}
$(submit); */
/*
var url = "https://pokeapi.co/api/v2/pokemon/25";

$.getJSON(url, function(data) {
  var name = data.name;
  console.log(name);
});
*/

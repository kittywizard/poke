
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

    }
  };

  //this jquery thing makes the call so you don't have to
  $.ajax(pokemonResult);
}

function editHTML() {

}

function testFunction(data){
  var test = data.name;
  console.log(test);
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

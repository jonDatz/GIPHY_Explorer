
let buttons = [];
let searchTerm = "Cat";







$.ajax({
    url: "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=wH45n8pCbWdmGgONQpIimBMLweZWUWKQ",
    method: "GET"
  }).then(function(response) {
      
    console.log(response);


  });
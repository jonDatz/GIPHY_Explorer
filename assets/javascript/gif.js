
let shows = ["Adventure Time", "Courage the Cowardly Dog", "Misadventures of Flapjack"];





function displayShow (){

let show = $(this).attr("data-name");
let queryURL = "http://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=wH45n8pCbWdmGgONQpIimBMLweZWUWKQ";

console.log(queryURL);
console.log(show);
console.log(shows);
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    console.log(response);


  });


}

function showButtons () {
    $('#buttonBox').empty();

    for (let i = 0; i < shows.length; i++) {
        var b = $("<button>");

        b.addClass("btn btn-dark showButtons");

        b.attr("data-name", shows[i]);

        b.text("#" + shows[i]);

        $("#buttonBox").append(b);
        
    }
}


$("#add-Show").on("click", function(event) {
    event.preventDefault();
    // This line of code will grab the input from the textbox
    var show = $("#show-input").val().trim();

    // The movie from the textbox is then added to our array
    shows.push(show);
    $('#show-input').val('');

    // Calling renderButtons which handles the processing of our movie array
    showButtons();
  });


$(document).on("click", ".showButtons", displayShow);
showButtons();

//   Bootstrap button NEEDS: <button type="button" class="btn btn-dark">Dark</button>
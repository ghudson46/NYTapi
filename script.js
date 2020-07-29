// HTML calls
var userTitle = $('#titleSearch').val();
var userAuthor = $('#titleAuthor').val();


// Constructing a queryURL 
var queryTitle = "https://api.nytimes.com/svc/books/v3/reviews.json?title=" +
userTitle + "&api-key=aqvQpOKb6juiiQDAQ3wgBzn2ar8ZFh1F";

var queryAuthor = "https://api.nytimes.com/svc/books/v3/reviews.json?author=" +
userAuthor + "&api-key=aqvQpOKb6juiiQDAQ3wgBzn2ar8ZFh1F";


$('#title-btn').on('click', function(){
    userTitle.html = ""; //reset input box
    
    //API title key
    $.ajax({
        url: queryTitle,
        method: 'GET'
    }).then(function(response) {
        console.log(queryTitle);
        var results = response.data;
        $('articles').html(results.book_title);

    })
})    

$('#author-btn').on('click', function(){
    userAuthor.html = ""; //reset input box
    
    //API title key
    $.ajax({
        url: queryAuthor,
        method: 'GET'
    }).then(function(response) {
        console.log(queryAuthor);
        var results = response.data;
        $('articles').html(results.book_author);

    })
})    





        //user inputs title
        // when user clicks submit take user input and call API, reset text form
        // display result in a container
var source = $('#book-template').html();
var template = Handlebars.compile(source);

$('button').on('click', function(e){
    e.preventDefault();
    $('.present-book').empty();

    fetch();
});

//Fetch the JSON
var fetch = function () {
    $.ajax({
        method: "GET",
        url: 'https://www.googleapis.com/books/v1/volumes?q=intitle:' + $('#title-key').val(),
        dataType: "json",
        success: function(data) {
            console.log(data);

            var newHTML = template({
                title: data.items[0].volumeInfo.title,
                author: data.items[0].volumeInfo.authors[0],
                description: data.items[0].volumeInfo.description,
                imgurl: data.items[0].volumeInfo.imageLinks.thumbnail,
                numpages: data.items[0].volumeInfo.pageCount,
                minday: $('#min-day').val()
            });



            $('.present-book').append(newHTML);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });
};
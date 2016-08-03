var source = $('#book-template').html();
var template = Handlebars.compile(source);

$('button').on('click', function(e){
    e.preventDefault();
    $('.present-book').empty();

    console.log('clickaaa');
    var newHTML = template({
        title: $('#book-title').val(),
        author: $('#book-author').val(),
        description: $('#book-description').val(),
        imgurl: $('#img-url').val(),
        numpages: $('#num-pages').val(),
        minday: $('#min-day').val()
    });

    $('.present-book').append(newHTML);
});
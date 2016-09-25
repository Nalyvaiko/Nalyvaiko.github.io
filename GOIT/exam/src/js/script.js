$(document).ready(function() {

var owl = $('.owl-carousel');
owl.owlCarousel({
    loop: true,
    items:1,
    nav:true,
    navText: ['<div class="sliders__controls previous"></div>','<div class="sliders__controls next"></div>']
});

var grid = $('.holiday__grid');
grid.masonry({
	itemSelector: '.grid-item',
	columnWidth: '.grid-sizer',
	persentPosition: true
});

window.pixabayCallback = function(){
    return;
};

function search(){
	grid.html('');
	var name = $('.search__input').val()

	$.ajax({
	  url: 'https://pixabay.com/api/',
        data: {
            key: '2752016-4fdc55509940bb2ec126f7894',
            q: name,
            callback: pixabayCallback(),
        },
        method: 'GET',
        dataType: 'jsonp',
        error: function(){
            alert('smth go wrong!');
        },
        success: function(data){

            var hits = data.hits;
            if (hits.length == 0){
            	grid.html('<figure class="holiday__grid-item--error grid-item"><img class="holiday__grid-img" src="img/404.png" alt="error"></figure>');
           		return;
            }   else {

	            for (var i = 0; i < 7; i++) {
	                var url = hits[i].webformatURL;
	                var tags = hits[i].tags;
	               if (i == 4 || i == 5){
		  			grid.append('<figure class="holiday__grid-item--width2 grid-item--width2"><img class="holiday__grid-img" src="' + url + '"><figcaption class="holiday__grid-text">' + tags + '</figcaption></figure>' );
		  			} else
		  			grid.append('<figure class="holiday__grid-item grid-item"><img class="holiday__grid-img" src="' + url + '"><figcaption class="holiday__grid-text">' + tags + '</figcaption></figure>' );
            		}
            }

        },
    });
}

search();

$('.search__btn').on('click', search);
$('.search__input').on('keydown', function(e){
	if (e.keyCode == 13){search();};
});
});

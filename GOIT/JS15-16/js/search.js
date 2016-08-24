$(function() {

    var $inputQuery = $('#text');

    $inputQuery.keydown(function(e) {
        if (e.keyCode == 13) search();
    });

    $('#submit').on('click', search);

    function search() {
        var query = $inputQuery.val();
        console.log(query);
        var API_KEY = '3081108-3600af9249191bafd908e3d21';
        var URL = "https://pixabay.com/api/?key="+ API_KEY +"&q="+encodeURIComponent(query);

        $.getJSON(URL, function(data) {
            if (parseInt(data.totalHits) > 0) {
                var ul = document.createElement("ul")
                $.each(data.hits, function(i, hit) {
                    var li = document.createElement("li");
                    li.innerHTML = '<a href="'+ hit.pageURL +'" target="_blank"><img src="'+ hit.webformatURL +'"></a>';
                    ul.appendChild(li);
                });
                $('.search-result').html(ul);
            }
            else {
                console.log('No hits');
            }
        });

    }

});

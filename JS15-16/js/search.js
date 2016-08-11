

(function() {
  var cx = '006061209710297603962:gt2pwouess0';
  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);
})();


// 'https://www.googleapis.com/customsearch/v1?q=query&cx=006061209710297603962%3Agt2pwouess0&key={AIzaSyCthIt7Tu3LvJVZI6joT8cHKnHtSTCioFk}'



'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=AIzaSyCthIt7Tu3LvJVZI6joT8cHKnHtSTCioFk&rsz=large&q='+ 'test' + '&callback=GoogleCallback&context=?',

function GoogleCallback() {
  console.log('arguments', arguments);
}

$(function(){



  $.ajax({
    url: 'https://www.googleapis.com/customsearch/v1?q='+ 'test' + '&cx=006061209710297603962%3Agt2pwouess0&key={AIzaSyCthIt7Tu3LvJVZI6joT8cHKnHtSTCioFk}',
    dataType: 'jsonp'
  });



});


 // $.getJSON("http://ajax.googleapis.com/ajax/services/search/web?v=1.0?key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q=PHP&callback=GoogleCallback&context=?",
 //  function(data){
 //    var ul = document.createElement("ul");
 //    $.each(data.results, function(i, val){
 //      var li = document.createElement("li");
 //      li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a> - "+val.content;
 //      ul.appendChild(li);
 //    });
 //    $('body').html(ul);
 //  });

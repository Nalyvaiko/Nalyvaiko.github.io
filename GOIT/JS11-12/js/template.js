$(function() {

    var html = $('#test').html();
    var pageData =
      {
        name: "Vitalii Nalyvaiko",
        photoSrc: "../Homework_1/img/photo.jpg",
        position: "Self-employed",
        reasonTitle: "Reasons why I'm FE Dev.",
        reason1: "like beauty things",
        reason2: "like logic",
        reason3: "like JS",
        contactTitle: "Contacts",
        mobilePhone: "+380672165376",
        facebookTitle: "Facebook",
        facebookRef: "https://www.facebook.com/vitalii.nalyvaiko",
        facebookText: "My page at Facebook",
        feedBackTitle: "Feedback",
        feedBack: "Life is good!"
      };

    var content = tmpl(html, { data: pageData });

    $('body').append(content);

});

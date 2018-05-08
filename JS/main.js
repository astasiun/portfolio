$(document).ready(function () {
    fadeDiv();
    setDate();
});

function fadeDiv(e) {
    $("#show").click(function () {
        $(".searchbar").slideToggle("slow");
        $('.searchbar').removeClass('hidden');
        e.preventDefault;
    });
}

function setDate() {

    var today = new Date();
    var year = today.getFullYear();

    var rok = document.getElementById('mainfooter');
    rok.innerHTML = '<p>Copyright &copy;' + year + ' Adam Stasiun </p>';
}

//$(function loadBlog(e) {
//    $('#blogcontentloaded').load('/blog/page1.html');
//    e.preventDefault();
//    return false;
//});

$(window).on("load", function () {
    $('#blogcontentloaded').load('/blog/page1.html');
});


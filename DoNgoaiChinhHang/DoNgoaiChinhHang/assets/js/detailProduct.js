$(".lazy").click(function (e) {
    e.preventDefault();
    
    var thisSrc = $(this).attr("src");
    $("#mainImage").attr("src", thisSrc);
});
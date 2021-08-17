jQuery(document).ready(function () {
    $('.list-best-saler').html($('.labsaler'));
    Response.action(function () {
        if (Response.band(600)) {  //>= value
            $('.lright-inner').removeClass('mb');
            $('.lright .span').on('click', function (e) { return false; });
        }
        else {  //< 768
            $('.lright-inner').addClass('mb');
        }
    });
});

$(document).ready(function () {
    jQuery(window).scroll(function () {
        var h = $(window).height();
        var w = $(window).width();
        var st = $(window).scrollTop();
        var bsh = $('#best-seller-left').height();
        var nh = $('#news_hot').height();
        var condition1 = $(window).scrollTop() > 588;
        if (w > 800) {
            $('#best-seller-left').removeAttr('style');
            $('#best-seller-left').removeClass('fixed');
            if (condition1) {
                $('#best-seller-left').addClass('fixed');
                $('#best-seller-left').css({ 'position': 'fixed', 'top': '93px', 'width': 241 + 'px', 'z-index': 8 });
            } else if (st > bsh + nh + 180) {
                $('#best-seller-left').addClass('fixed');
                $('#best-seller-left').css({ 'position': 'fixed', 'top': '93px', 'width': 241 + 'px', 'z-index': 8 });
            }
        }
    });
});

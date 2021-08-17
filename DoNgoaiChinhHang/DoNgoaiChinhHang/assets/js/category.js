jQuery(document).ready(function(){
    $('.category-ul-rght .has-sub-cat').on('click', function () {
        var t = $(this);
        $('.category-ul-rght .has-sub-cat').removeClass('active');
        $('.category-ul-rght .has-sub-cat').find('ul').hide();

        if (!t.hasClass('active')) {
            t.addClass('active');
            t.find('ul').show();
        } else {
            t.removeClass('active');
            t.find('ul').hide();
        }
    });
});
jQuery(window).scroll(function () {
    var h = $(window).height();
    var w = $(window).width();
    var st = $(window).scrollTop();
    var bsh = $('#best-seller-left').height();
    var nh = $('#news_hot').height();
    var condition1 = $(window).scrollTop() > 488;
    if (w > 800) {
        $('#best-seller-left').removeAttr('style');
        $('#best-seller-left').removeClass('fixed');
        if (condition1) {
            $('#best-seller-left').addClass('fixed');
            $('#best-seller-left').css({ 'position': 'fixed', 'top': '50px', 'width': 241 + 'px', 'z-index': -8 });
        } else if (st > bsh + nh + 180) {
            $('#best-seller-left').addClass('fixed');
            $('#best-seller-left').css({ 'position': 'fixed', 'top': '82px', 'width': 241 + 'px', 'z-index': -8 });
        }
    }
});
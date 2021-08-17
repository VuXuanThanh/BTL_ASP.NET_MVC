jQuery(document).ready(function () {
    viewMore();
    $('.list-best-saler').html($('.labsaler'));
    Response.action(function () {
        if (Response.band(600)) {  //>= value
            detail_gallery();
            $('.quickview-link').fancybox({
                scrolling: 'no',
            });
            $('.lright-inner').removeClass('mb');
            $('.lright .span').on('click', function (e) { return false; });
        }
        else {  //< 768
            detail_gallery_mb();
            $('.quickview-link').fancybox({
                scrolling: 'no',
            });
            $('.lright-inner').addClass('mb');
            detail_gallery_mb();
        }
    });
});

function viewMore() {
    $('.lright .span').on('click', function (e) {
        e.preventDefault();
        var span = $(this);
        if (!span.hasClass('on')) {
            span.addClass('on');
            span.parent().find('.lright-inner').show();
        } else {
            span.removeClass('on');
            span.parent().find('.lright-inner').hide();
        }
    });
}
function detail_gallery() {
    if ($('.detail-gallery').length > 0) {
        $('.detail-gallery').each(function () {
            $(this).find(".carousel").jCarouselLite({
                btnNext: $(this).find(".gallery-control .next"),
                btnPrev: $(this).find(".gallery-control .prev"),
                speed: 800,
                visible: 3,
            });
            //Elevate Zoom
            $(this).find('.mid img').elevateZoom({
                zoomType: "inner",
                cursor: "crosshair",
                zoomWindowFadeIn: 500,
                zoomWindowFadeOut: 750
            });
            $(this).find(".carousel a").on('click', function (event) {
                event.preventDefault();
                $(this).parents('.detail-gallery').find(".carousel a").removeClass('active');
                $(this).addClass('active');
                $(this).parents('.detail-gallery').find(".mid img").attr("src", $(this).find('img').attr("src"));
                var z_url = $(this).parents('.detail-gallery').find('.mid img').attr('src');
                $('.zoomWindow').css('background-image', 'url("' + z_url + '")');
            });
        });
    }
}
//Detail Gallery
function detail_gallery_mb() {
    if ($('.detail-gallery').length > 0) {
        $('.detail-gallery').each(function () {
            $(this).find(".carousel").jCarouselLite({
                btnNext: $(this).find(".gallery-control .next"),
                btnPrev: $(this).find(".gallery-control .prev"),
                speed: 800,
                visible: 3,
            });
            $(this).find(".carousel a").on('click', function (event) {
                event.preventDefault();
                $(this).parents('.detail-gallery').find(".carousel a").removeClass('active');
                $(this).addClass('active');
                $(this).parents('.detail-gallery').find(".mid img").attr("src", $(this).find('img').attr("src"));
                var z_url = $(this).parents('.detail-gallery').find('.mid img').attr('src');
            });
        });
    }
}

function findCt(strObjectName) {
    return document.getElementById(strObjectName)
}

$("#starrating").change(function () {
    findCt('ratemsg').innerHTML = ' Bạn đánh giá điểm: <b>' + findCt('starrating').value + ' của 5 sao</b>, cám ơn bạn !';
});

$("#btnSend").click(function () {
    var ob;
    ob = findCt('txtEditor');
    if (ob.value == "") {
        alert("Nội dung bình luận không được trống !");
        ob.focus();
        return false
    }
    ob = findCt('txtName');
    if (ob.value == "") {
        alert("Vui lòng nhập Tên của Bạn !");
        ob.focus();
        return false
    }
    var obj = {};
    obj.Content = findCt('txtEditor').value;
    obj.Name = findCt('txtName').value;
    obj.Email = findCt('txtEmail').value;
    obj.Id = findCt('IdReply').value;
    obj.IdControl = findCt('IdControlReply').value;
    obj.IdPro = findCt('IdPro').value;
    obj.Rate = findCt('starrating').value;
    if (obj.Name == '' && obj.Content == '') return;
    var jsonData = JSON.stringify(obj);
    $.ajax({
        url: '/Comment.submit',
        type: 'POST',
        data: jsonData,
        success: function (data) {
            findCt('returnProcess').innerHTML = data;
        }
    });
    findCt('txtEditor').value = '';
    //findCt('txtName').value = '';
    //findCt('txtEmail').value = '';
    findCt('IdReply').value = '';
    findCt('IdControlReply').value = '';
    findCt('SpanReply').innerHTML = '';
});

function LikeClick(id, likeNumber) {
    var obj = {};
    obj.Id = id;
    obj.LikeNum = likeNumber;
    var jsonData = JSON.stringify(obj);
    $.ajax({
        url: '/CommentLikeNum.submit',
        type: 'POST',
        data: jsonData,
        success: function (data) {
            $("#IdNumLike" + id).text(data)
        }
    });
}

function CallFormAnserClick(id, idControl, name) {
    findCt('IdReply').value = id;
    findCt('IdControlReply').value = idControl;
    findCt('txtEditor').value = '@' + name + ': ';
    findCt('SpanReply').innerHTML = 'Bạn đang trả lời bình luận của: <b style="color:red">' + name + '</b>'
}

$("#cbHidePro").click(function () {
    if ($(this).prop("checked") == true) { $("#divHidePro").show(); findCt('iphidenpro').value = '...'; }
    else { $("#divHidePro").hide(); findCt('iphidenpro').value = ''; }
});
function IsNumeric(input) {
    input = input.replace(/ /g, "");
    return (input - 0) == input && ('' + input).trim().length > 0;
}
$("#btOrder").click(function () {
    var ob;
    ob = findCt('txtName');
    if (ob.value == "") {
        alert("Vui lòng nhập Tên của Bạn !");
        ob.focus();
        return false
    }
    ob = findCt('txtPhone');
    if (ob.value == "") { alert("Số Điện Thoại của bạn không được trống !"); ob.focus(); return false; }
    if (IsNumeric(ob.value) == false || ob.value.length < 9 || ob.value.length > 11) { alert("Số Điện Thoại của bạn chưa chính xác !"); ob.focus(); return false; }

    return true;
});

$("#btnSendOrder").click(function () {
    var ob;
    ob = findCt('txtFullName');
    if (ob.value == "") { alert("Tên của bạn không được trống !"); ob.focus(); return false; }

    ob = findCt('txtPhone');
    if (ob.value == "") { alert("Số Điện Thoại của bạn không được trống !"); ob.focus(); return false; }
    if (IsNumeric(ob.value) == false || ob.value.length < 9 || ob.value.length > 11) { alert("Số Điện Thoại của bạn chưa chính xác !"); ob.focus(); return false; }

    ob = findCt('btnSendOrder');
    ob.disabled = false
    ob.innerText = 'Đang xử lý...';

    var Style = findCt('hStyle').value;
    var obj = {};
    obj.Style = Style;

    obj.FullName = findCt('txtFullName').value;
    obj.Phone = findCt('txtPhone').value;

    obj.Address = findCt('txtAddress').value;
    obj.Email = (Style == 'QuickOrder') ? (findCt('iphidenpro').value = '...' ? findCt('txtEmailOrder').value + '.' : '') : findCt('txtEmailOrder').value;
    obj.Title = (Style == 'ContactUs') ? 'Khách hàng liên hệ tại dongoaichinhhang.com' : 'Khách đặt hàng nhanh ở trang chi tiết sản phẩm';
    obj.Note = findCt('txtNote').value;

    obj.IdGift = '0';
    obj.MinHaveGift = '0';
    obj.Qty = Style == 'ContactUs' ? '0' : $('#txtQty').val();
    obj.UrlRefer = '';
    obj.GiftName = '';
    obj.IdPro = Style == 'ContactUs' ? '0' : findCt('txtIdPro').value;

    var jsonData = JSON.stringify(obj);
    $.ajax({
        url: '/quick-order-form.submit',
        type: 'POST',
        data: jsonData,
        success: function (data) {
            if (Style == 'ContactUs') {
                findCt('redataorder').innerHTML = data;
                findCt('btnSendOrder').innerText = 'Gửi thông tin thành công !';
                findCt('formQuickOrder').reset();
            }
            else { window.location.href = data; }
        }
    });
    e.preventDefault();
});

$('#buy-fast').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $('.headdetail').offset().top - 100
    }, 'slow');
});

$('#aCmt').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $('#comment').offset().top - 150
    }, 'slow');
});

$(document).ready(function () {
    callSlider2($('.pro-slider'), false);
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
                $('#best-seller-left').css({ 'position': 'fixed', 'top': '58px', 'width': 241 + 'px', 'z-index': 0 });
            } else if (st > bsh + nh + 180) {
                $('#best-seller-left').addClass('fixed');
                $('#best-seller-left').css({ 'position': 'fixed', 'top': '90px', 'width': 241 + 'px', 'z-index': 0 });
            }
        }
    });

    $("#txt-cus-phone").focusin(function () {
        $(this).parent().children("h4").hide();
        var ob = $("#txt-cus-name");
        ob.show();
        $("#btn-send-cust").css("height", "52px");
        if (ob.val().trim() == "") { ob.focus(); }
    });
    $("#btn-send-cust").click(function () {
        var ob = $("#txt-cus-name");
        if (ob.val().trim() == "") { ob.focus(); alert('Vui lòng nhập Họ và Tên quý khách !'); return false; }

        ob = $("#txt-cus-phone");
        if (ob.val().trim() == "") { ob.focus(); alert('Vui lòng nhập số Điện Thoại cần liên lạc của quý khách !'); return false; }
        if (IsNumeric(ob.val()) == false || ob.val().trim().length != 10) { alert("Số Điện Thoại của bạn chưa chính xác (Phải 10 số) !"); ob.focus(); return false; }

        $("#btn-send-cust").disabled = false;
        $("#btn-send-cust").val('GỬI...');
        
        var obj = {};
        obj.Style = 'CallForMe';
        obj.FullName = findCt('txt-cus-name').value;
        obj.Phone = findCt('txt-cus-phone').value;
        obj.IdPro = findCt('txtIdPro').value;
        obj.NamePro = $('.title-detail').text();
        obj.Qty = $('#txtQty').val();

        var jsonData = JSON.stringify(obj);
        $.ajax({
            url: '/CallForMe.submit',
            type: 'POST',
            data: jsonData,
            success: function (data) {
                $(this).parent().children("h4").show();
                findCt('formcallme').innerHTML = data;
                $('#txt-cus-name').hide();
                $('#txt-cus-phone').hide();
                $('#btn-send-cust').hide();
            }
        });
        gtag_report_conversion();
    });
});

$("#cbPMix1").click(function () {
    checkselect();
    var price = parseInt($('#cbPMix1').val());
    var pTotal = parseInt($('#bTotalPrice').text().replace(/[^0-9]/g, ''));
    if ($(this).prop("checked") == true) {
        findCt('bTotalPrice').innerHTML = (pTotal + price).toLocaleString() + 'đ';
        $("#divIdpMix1").removeClass("disabled").addClass("current");
    }
    else {
        findCt('bTotalPrice').innerHTML = (pTotal - price).toLocaleString() + 'đ';
        $("#divIdpMix1").removeClass("current").addClass("disabled");
    }
});
$("#cbPMix2").click(function () {
    checkselect();
    var price = parseInt($('#cbPMix2').val());
    var pTotal = parseInt($('#bTotalPrice').text().replace(/[^0-9]/g, ''));
    if ($(this).prop("checked") == true) {
        findCt('bTotalPrice').innerHTML = (pTotal + price).toLocaleString() + 'đ';
        $("#divIdpMix2").removeClass("disabled").addClass("current");
    }
    else {
        findCt('bTotalPrice').innerHTML = (pTotal - price).toLocaleString() + 'đ';
        $("#divIdpMix2").removeClass("current").addClass("disabled");
    }
});
$("#cbPMix3").click(function () {
    checkselect();
    var price = parseInt($('#cbPMix3').val());
    var pTotal = parseInt($('#bTotalPrice').text().replace(/[^0-9]/g, ''));
    if ($(this).prop("checked") == true) {
        findCt('bTotalPrice').innerHTML = (pTotal + price).toLocaleString() + 'đ';
        $("#divIdpMix3").removeClass("disabled").addClass("current");
    }
    else {
        findCt('bTotalPrice').innerHTML = (pTotal - price).toLocaleString() + 'đ';
        $("#divIdpMix3").removeClass("current").addClass("disabled");
    }
});
$("#cbPMix4").click(function () {
    checkselect();
    var price = parseInt($('#cbPMix4').val());
    var pTotal = parseInt($('#bTotalPrice').text().replace(/[^0-9]/g, ''));
    if ($(this).prop("checked") == true) {
        findCt('bTotalPrice').innerHTML = (pTotal + price).toLocaleString() + 'đ';
        $("#divIdpMix4").removeClass("disabled").addClass("current");
    }
    else {
        findCt('bTotalPrice').innerHTML = (pTotal - price).toLocaleString() + 'đ';
        $("#divIdpMix4").removeClass("current").addClass("disabled");
    }
});
$("#cbPMix5").click(function () {
    checkselect();
    var price = parseInt($('#cbPMix5').val());
    var pTotal = parseInt($('#bTotalPrice').text().replace(/[^0-9]/g, ''));
    if ($(this).prop("checked") == true) {
        findCt('bTotalPrice').innerHTML = (pTotal + price).toLocaleString() + 'đ';
        $("#divIdpMix5").removeClass("disabled").addClass("current");
    }
    else {
        findCt('bTotalPrice').innerHTML = (pTotal - price).toLocaleString() + 'đ';
        $("#divIdpMix5").removeClass("current").addClass("disabled");
    }
});
function checkselect() {
    if ($('#cbPMix1:checked').length > 0 || $('#cbPMix2:checked').length > 0 || $('#cbPMix3:checked').length > 0 || $('#cbPMix4:checked').length > 0 || $('#cbPMix5:checked').length > 0) {
        $('#divHref').show();
    } else $('#divHref').hide();

    var iReq = '';
    if ($('#cbPMix1:checked').length > 0) { iReq += $('#ipIdProMix1').val() + ','; }
    if ($('#cbPMix2:checked').length > 0) { iReq += $('#ipIdProMix2').val() + ','; }
    if ($('#cbPMix3:checked').length > 0) { iReq += $('#ipIdProMix3').val() + ','; }
    if ($('#cbPMix4:checked').length > 0) { iReq += $('#ipIdProMix4').val() + ','; }
    if ($('#cbPMix5:checked').length > 0) { iReq += $('#ipIdProMix5').val() + ','; }

    findCt('spanfS').innerHTML = (iReq.length === 0) ? "" : " | Miễn phí Giao Hàng";

    $('#aHpMix').attr('href', '/gio-hang.html?i=' + iReq.slice(0, -1));
}
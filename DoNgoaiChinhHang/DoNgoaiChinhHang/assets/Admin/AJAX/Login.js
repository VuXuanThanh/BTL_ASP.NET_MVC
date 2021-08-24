$("#login").click(function (e) {
    e.preventDefault();
    var data = {};
    var formData = $('#formSubmit').serializeArray();
    $.each(formData, function (i, v) {
        $('#' + v.name + "2").text("");
        data["" + v.name + ""] = v.value;
    });
    $.ajax({
        type: 'POST',
        url: '/Admin/Home/Login',
        data: data,
        success: function (result) {
            if (result == "null") {
                window.location.href = "/Admin/Home";
            } else if (result == null) {
                thongbao("", "Đăng nhập thất bại, vui lòng thử lại .", "animated fadeInDown", "danger");
            } else {
                
                window.location.href = result;
            }
        },
        error: function () {
            thongbao("", "Đăng nhập thất bại, vui lòng thử lại .", "animated fadeInDown", "danger");
        }
    });
    

});
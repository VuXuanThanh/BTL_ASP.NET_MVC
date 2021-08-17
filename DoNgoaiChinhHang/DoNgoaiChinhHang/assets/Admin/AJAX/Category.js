$(".delCate").click(function (e) {
    e.preventDefault();
    var id = $(this).attr("id");
    var MSG = confirm("Bạn có chắc muốn xóa danh mục này?");
    if (MSG) {
        $.ajax({
            type: 'POST',
            url: '/Categories/Delete',
            data: { id: id },
            success: function (result) {
                if (result == true) {
                    thongbao("Thành công !", "Xóa danh mục thành công .", "animated fadeInDown", "success");
                    setTimeout(function () { location.reload(); }, 1000);
                } else {
                    thongbao("Danh mục này có chứa một số sản phẩm. Không thể xóa", "", "animated fadeInDown", "info");
                }

            },
            error: function () {
                alert("Có lỗi khi xóa!");
            }
        });
    }

});


$(".addCate").click(function (e) {
    e.preventDefault();
    var data = {};
    var formData = $('#formSubmit').serializeArray();
    var test = true;
    $("#Images2").text("");
    $.each(formData, function (i, v) {
        $('#' + v.name + "2").text("");
        data["" + v.name + ""] = v.value;
        if (v.value == "") {
            test = false;
            $('#' + v.name + "2").text("Không được để trống trống");
        }
    });
    var fakePath = $('#file').val();
    if (fakePath.length == 0) {
        test = false;
        $("#Images2").text("Bạn chưa chọn ảnh");
    }
    if (!test) {
        return;
    }
    data.Images = fakePath.slice(fakePath.lastIndexOf("\\") + 1, fakePath.length);
    
        $.ajax({
            type: 'POST',
            url: '/Categories/Create2',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result) {
                if (result) {
                    thongbao("Thành công !", "Thêm  mới danh mục thành công .", "animated fadeInDown", "success");
                    $.each(formData, function (i, v) {
                        $('#' + v.name).val("");
                    });
                }
                else {
                    thongbao("Thất bại !", "Mã danh mục đã tồn tại .", "animated fadeInDown", "warning");
                }

            },
            error: function () {
                alert("Có lỗi khi thêm!");
            }
        });

});


$(".editCate").click(function (e) {
    e.preventDefault();
    var data = {};
    var formData = $('#formSubmit').serializeArray();
    var test = true;
    $("#Images2").text("");
    $.each(formData, function (i, v) {
        $('#' + v.name + "2").text("");
        data["" + v.name + ""] = v.value;
        if (v.value == "") {
            test = false;
            $('#' + v.name + "2").text("Không được để trống trống");
        }
    });
    var fakePath = $('#file').val();
    if (fakePath.length == 0) {
        test = false;
        $("#Images2").text("Bạn chưa chọn ảnh");
    }
    if (!test) {
        return;
    }
    data.Images = fakePath.slice(fakePath.lastIndexOf("\\") + 1, fakePath.length);

    $.ajax({
        type: 'POST',
        url: '/Categories/Edit2',
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            if (result) {
                thongbao("Thành công !", "Sửa danh mục thành công .", "animated fadeInDown", "success");
                setTimeout(() => {
                    window.location.href = "https://localhost:44316/Admin/Categories";
                }, 1000)


            }

        },
        error: function () {
            alert("Có lỗi khi sửa!");
        }
    });

});


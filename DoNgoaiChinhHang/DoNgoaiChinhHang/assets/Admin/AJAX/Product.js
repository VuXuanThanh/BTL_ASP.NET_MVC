$(".delPro").click(function (e) {
    e.preventDefault();
    var id = $(this).attr("id");
    var MSG = confirm("Bạn có chắc muốn xóa sản phẩm này?");
    if (MSG) {
        $.ajax({
            type: 'POST',
            url: '/Products/Delete',
            data: { id: id },
            success: function (result) {
                if (result == true) {
                    alert("Xóa thành công")
                    setTimeout(function () { location.reload(); }, 1000);
                } else {
                    alert("Không thể xóa sản phẩm này");
                }

            },
            error: function () {
                alert("Có lỗi khi xóa!");
            }
        });
    }

});


$(".addPro").click(function (e) {
    e.preventDefault();
    var data = {};
    var formData = $('#formSubmit').serializeArray();
    var test = true;
    $.each(formData, function (i, v) {
        $('#' + v.name + "2").text("");
        data["" + v.name + ""] = v.value;
        if (v.value == "") {
            $('#' + v.name + "2").text("Không được để trống trống");
            test = false;
        }
    });

    if (!test) {
        return;
    }
    
        $.ajax({
            type: 'POST',
            url: '/Products/Create2',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result) {
                if (result) {
                    alert("Thêm mới thành công")
                    $.each(formData, function (i, v) {
                        $('#' + v.name).val("");
                    });
                }
                else {
                    alert("Mã sản phẩm đã tồn tại")
                }

            },
            error: function () {
                alert("Có lỗi khi thêm!");
            }
        });

});


$(".editPro").click(function (e) {
    e.preventDefault();
    var data = new Object();
    var formData = $('#formSubmit').serializeArray();
    var test = true;
    $.each(formData, function (i, v) {
        $('#' + v.name + "2").text("");
        data["" + v.name + ""] = v.value;
        if (v.value == "") {
            $('#' + v.name + "2").text("Không được để trống");
            test = false;
        }
    });
    if (!test) {
        return;
    }

    $.ajax({
        type: 'POST',
        url: '/Products/Edit2',
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            if (result) {
                alert("Sửa thành công")
                window.location.href = "https://localhost:44316/Admin/Products";
            }

        },
        error: function () {
            alert("Có lỗi khi sửa!");
        }
    });

});


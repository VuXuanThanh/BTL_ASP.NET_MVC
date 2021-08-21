$("#checkAll").click(function () {
    $('input:checkbox').not(this).prop('checked', this.checked);
});

$('input:checkbox').on('click', () => {
    if ($("#tbody input:checked").length == 0) {
        $(".delPro").attr('disabled', 'disabled');
    }
    else {
        $(".delPro").removeAttr('disabled');
    }
})


$(".delPro").click(function (e) {
    e.preventDefault();
    var ids = $('#tbody input[type=checkbox]:checked')
        .map(function () {
            return $(this).val();
        }).get();
    var MSG = confirm("Bạn có chắc muốn xóa " + ids.length+" sản phẩm này ? ");
    if (MSG) {
        $.ajax({
            type: 'POST',
            url: '/Admin/Products/Delete',
            data: { ids: ids },
            success: function (result) {
                if (result.length == 0) {
                    thongbao("", "Xóa tất cả sản phẩm đã chọn thành công .", "animated fadeInDown", "success");
                    setTimeout(() => {
                        location.reload();
                    }, 1000)
                } else {
                    alert("Chưa thể xóa các sản phẩm có ID: " + result)
                    location.reload()
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
    /*data.Image= "~/wwwroot/ProductsImages/" + data.ProductID*/

        $.ajax({
            type: 'POST',
            url: '/Admin/Products/Create2',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result) {
                if (result) {
                    thongbao("", "Thêm mới sản phẩm thành công .", "animated fadeInDown", "success");
                }
                else {
                    thongbao("", "Mã sản phẩm đã tồn tại", "animated fadeInDown", "warning");
                }

            },
            error: function () {
                alert("Có lỗi khi thêm!");
            }
        });

});


//$(".editPro").click(function (e) {
//    e.preventDefault();
//    var data = new Object();
//    var formData = $('#formSubmit').serializeArray();
//    var test = true;
//    $.each(formData, function (i, v) {
//        $('#' + v.name + "2").text("");
//        data["" + v.name + ""] = v.value;
//        if (v.value == "") {
//            $('#' + v.name + "2").text("Không được để trống");
//            test = false;
//        }
//    });
//    if (!test) {
//        return;
//    }

//    $.ajax({
//        type: 'POST',
//        url: '/Admin/Products/Edit2',
//        data: JSON.stringify(data),
//        contentType: "application/json; charset=utf-8",
//        dataType: "json",
//        success: function (result) {
//            if (result) {
//                thongbao("", "Sửa thông tin sản phẩm thành công .", "animated fadeInDown", "info");
//                setTimeout(() => {
//                    window.location.href = "/Admin/Products";
//                }, 1000)
//            }

//        },
//        error: function () {
//            alert("Có lỗi khi sửa!");
//        }
//    });

//});


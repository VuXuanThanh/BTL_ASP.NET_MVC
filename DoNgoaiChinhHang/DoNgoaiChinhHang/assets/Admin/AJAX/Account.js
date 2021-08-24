$("#checkAll").click(function () {
    $('input:checkbox').not(this).prop('checked', this.checked);
});
$('input:checkbox').on('click', () => {
    if ($("#tbody input:checked").length == 0) {
        $(".delAcc").attr('disabled', 'disabled');
        $(".delAcc").text("Xóa đã chọn")
    }
    else {
        $(".delAcc").removeAttr('disabled');
        $(".delAcc").text("Xóa (" + $("#tbody input:checked").length + ")")
    }
})

$(".delAcc").click(function (e) {
    e.preventDefault();
    var ids = $('#tbody input[type=checkbox]:checked')
        .map(function () {
            return $(this).val();
        }).get();
    var MSG = confirm("Bạn có chắc muốn xóa " + ids.length + " tài khoản này không ? ");
    if (MSG) {
        $.ajax({
            type: 'POST',
            url: '/Admin/Accounts/Delete',
            data: { ids: ids },
            success: function (result) {
                if (result.length == 0) {
                    thongbao("", "Xóa tất cả tài khoản đã chọn thành công .", "animated fadeInDown", "success");
                    setTimeout(function () { location.reload(); }, 1000);
                } else {
                    alert("Chưa thể xóa các tài khoản có ID: " + result)
                    location.reload()
                }

            },
            error: function () {
                alert("Có lỗi khi xóa!");
            }
        });
    }

});


$(".addAcc").click(function (e) {
    e.preventDefault();
    var data = {};
    var formData = $('#formSubmit').serializeArray();
    var test = true;
    $.each(formData, function (i, v) {
        $('#' + v.name + "2").text("");
        data["" + v.name + ""] = v.value;
        if (v.value == "") {
            test = false;
            $('#' + v.name + "2").text("** Không được để trống trống");
        }
    });

    if (!test) {
        return
    }

    $.ajax({
        type: 'POST',
        url: '/Admin/Accounts/Create2',
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            if (result) {
                thongbao("", "Thêm tài khoản  thành công .", "animated fadeInDown", "success");
            }
            else {
                thongbao("", "Email đã tồn tại.", "animated fadeInDown", "warning");
            }

        },
        error: function () {
            alert("Có lỗi khi thêm!");
        }
    });

});


$(".editAcc").click(function (e) {
    e.preventDefault();
    var data = {};
    var formData = $('#formSubmit').serializeArray();
    var test = true;
    $.each(formData, function (i, v) {
        $('#' + v.name + "2").text("");
        data["" + v.name + ""] = v.value;
        if (v.value == "") {
            test = false;
            $('#' + v.name + "2").text("Không được để trống trống");
        }
    });
    if (!test) {
        return;
    }
    data["Email"] = $('#Email').val();

    $.ajax({
        type: 'POST',
        url: '/Admin/Accounts/Edit2',
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            if (result) {
                thongbao("", "Sửa thông tin tài khoản thành công .", "animated fadeInDown", "info");
                setTimeout(() => {
                    window.location.href = "/Admin/Accounts";
                }, 1000)


            }

        },
        error: function () {
            alert("Có lỗi khi sửa!");
        }
    });

});


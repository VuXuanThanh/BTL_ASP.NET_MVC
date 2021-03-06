$("#checkAll").click(function () {
    $('input:checkbox').not(this).prop('checked', this.checked);
});
$('input:checkbox').on('click', () => {
    if ($("#tbody input:checked").length == 0) {
        $(".delCate").attr('disabled', 'disabled');
        $(".delCate").text("Xóa đã chọn")
    }
    else {
        $(".delCate").removeAttr('disabled');
        $(".delCate").text("Xóa (" + $("#tbody input:checked").length+")")
    }
})

$(".delCate").click(function (e) {
    e.preventDefault();
    var ids = $('#tbody input[type=checkbox]:checked')
        .map(function () {
            return $(this).val();
        }).get();
    var MSG = confirm("Bạn có chắc muốn xóa " + ids.length+" danh mục này không ? ");
    if (MSG) {
        $.ajax({
            type: 'POST',
            url: '/Admin/Categories/Delete',

            data: { ids: ids },

            success: function (result) {
                if (result.length == 0) {
                    thongbao("", "Xóa tất cả danh mục đã chọn thành công .", "animated fadeInDown", "success");
                    setTimeout(function () { location.reload(); }, 1000);
                } else {
                    alert("Chưa thể xóa các danh mục có ID: " + result)
                    location.reload()
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
            $('#' + v.name + "2").text("** Không được để trống trống");
        }
    });
    var fakePath = $('#file').val();
    if (fakePath.length == 0) {
        test = false;
        $("#Images2").text("** Bạn chưa chọn ảnh");
    }
    if (!test) {
        return;
    }
    data.Images = fakePath.slice(fakePath.lastIndexOf("\\") + 1, fakePath.length);
    uploadFile();
    
        $.ajax({
            type: 'POST',
            url: '/Admin/Categories/Create2',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result) {
                if (result) {
                    thongbao("", "Thêm  mới danh mục thành công .", "animated fadeInDown", "success");
                }
                else {
                    thongbao("", "Mã danh mục đã tồn tại.", "animated fadeInDown", "warning");
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
    var path = $('#output').attr('src');
    if (fakePath.length == 0) {
        data.Images = path.slice(path.lastIndexOf("\/") + 1, path.length);
    }
    else {
        data.Images = fakePath.slice(fakePath.lastIndexOf("\\") + 1, fakePath.length);
    }

    if (!test || data.Images == '') {
        $("#Images2").text("** Bạn chưa chọn ảnh");
        return;
    }
    uploadFile();

    $.ajax({
        type: 'POST',
        url: '/Admin/Categories/Edit2',
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            if (result) {
                thongbao("", "Sửa danh mục thành công .", "animated fadeInDown", "info");
                setTimeout(() => {
                    window.location.href = "/Admin/Categories";
                }, 1000)


            }

        },
        error: function () {
            alert("Có lỗi khi sửa!");
        }
    });

});


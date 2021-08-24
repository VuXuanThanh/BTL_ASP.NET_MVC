


$(".editOd").click(function (e) {
    e.preventDefault();
    var id = $(".editOd").val().trim()
    var MSG = confirm("Bạn có chắc khách hàng đã nhận đơn này ?");
    if (MSG) {
        $.ajax({
            type: 'POST',
            url: '/Admin/Orders/Edit',
            data: { id: id },
            success: function (result) {
                if (result) {
                    thongbao("", "Oke. Done .", "animated fadeInDown", "success");
                    setTimeout(function () { location.reload(); }, 1000);
                } else {
                    thongbao("", "Error .", "animated fadeInDown", "success");
                }

            },
            error: function () {
                alert("Có lỗi khi xóa!");
            }
        });
    }

});


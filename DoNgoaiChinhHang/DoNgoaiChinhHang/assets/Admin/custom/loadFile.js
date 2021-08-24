//const { default: da } = require("../plugins/moment/src/locale/da");

$(document).ready(function () {
    var kk = $("#files");
    
    if (window.File && window.FileList && window.FileReader) {
        $("#files").on("change", function (e) {
            var files = e.target.files,
                filesLength = files.length;
            for (var i = 0; i < filesLength; i++) {
                var f = files[i]
                var fileReader = new FileReader();
                fileReader.onload = (function (e) {
                    
                    var file = e.target;
                    $("<span class=\"pip\">" +
                        "<span class=\"remove\">x</span>" +
                        "<img class=\"imageThumb\" src=\"" + e.target.result + "\" title=\"" + file.name + "\"/>" +

                        "</span>").insertAfter("#files");
                    
                    $(".remove").click(function () {
                        $(this).parent(".pip").remove();
                        
                    });



                });
                fileReader.readAsDataURL(f);
            }
        });
    } else {
        alert("Your browser doesn't support to File API")
    }
});
$('.photo-delete-link').click(function (e) {
    
    $.ajax({
        url: "/Admin/Products/Delete_productImage",
        dataType: "text json",
        type: "POST",
        data: {filePath:this.href },
        success: function (data, textStatus) {
            alert("xoas thanh cong");
        }
        
    });
    location.reload();
    e.preventDefault();
});
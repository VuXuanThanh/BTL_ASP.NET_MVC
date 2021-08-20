
$(document).ready(function () {
    var kk = $("#files");
    console.log(kk[0].files)
    if (window.File && window.FileList && window.FileReader) {
        $("#files").on("change", function (e) {
            var files = e.target.files,
                filesLength = files.length;
            for (var i = 0; i < filesLength; i++) {
                var f = files[i]
                var fileReader = new FileReader();
                fileReader.onload = (function (e) {
                    $('.rowCon').append("<div class='col-xl-2 col-lg-3 col-sm-3 col-xs-12 pip'>"+
                        "<a href =" + e.target.result+" >"+
                        "<img class='ima' src='"+e.target.result+"' class='img-fluid' alt=''>"+
                                        "</a>"+
                        "<button class='btn-inverse-warning remove'>x</button>" +
                        "<span id='" + i + "' ></span > "+
                        "</div >"
                        

                    )
                    
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

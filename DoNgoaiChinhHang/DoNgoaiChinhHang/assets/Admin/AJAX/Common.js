
$('.btnReset').on('click', () => {
    $('#output').attr('src', '/assets/img/h0.png')
})

function loadFile(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
}


function uploadFile() {
    if (window.FormData !== undefined) {
        var files = $('#file')[0].files;
        var fileData = new FormData();
        if (files[0] != undefined) {
            fileData.append(files[0].name, files[0]);
            $.ajax({
                url: '/Admin/Categories/UploadFile',
                type: "POST",
                contentType: false,
                processData: false,
                data: fileData,
                success: function (result) {
                    console.log(result);
                },
                error: function (err) {
                    console.log(err.statusText);
                }
            });
        }
        
    } else {
        alert("FormData is not supported.");
    }
}
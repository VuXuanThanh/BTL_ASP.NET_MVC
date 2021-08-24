
$('.btnReset').on('click', () => {
    $('#output').attr('src', '/assets/img/h0.png')
})

function loadFile(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
}

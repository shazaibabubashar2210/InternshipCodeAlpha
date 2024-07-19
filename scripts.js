
var modal = document.getElementById("modal");

var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");

document.querySelectorAll('.gallery-item img').forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

modal.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

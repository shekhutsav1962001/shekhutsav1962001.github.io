var audio = new Audio('audio_file.mp3');

function abc(item) {

  if (item.dataset.val == "false") {
    item.dataset.val = "true";
    audio.play();
    var n = document.getElementById("notycount");
    m = parseInt(n.innerHTML) + 1;
    n.innerHTML = m;
  }
  else {
    alert("ietm already in the cart!!");
  }

}
function myfunc(item) {

  // audio.play();
  abc(item);
}
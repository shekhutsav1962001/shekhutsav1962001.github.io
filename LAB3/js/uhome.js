var audio = new Audio('audio_file.mp3');

function abc()
{
  var n = document.getElementById("notycount");
  m = parseInt(n.innerHTML) +1;
  n.innerHTML=m;
}
function myfunc() {

  audio.play();
  abc();
}

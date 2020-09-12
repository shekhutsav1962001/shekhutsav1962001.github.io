
function loading() {
  var ttl = 0;
  var Ip = $("input");
  var prc = $(".product-price")
  if (Ip.length <= 0) {
    $("#container1").remove();
    $("#container2").html(`<h1>Empty Cart</h1><br><img src="pic/empty-cart.png" class="img-fluid">`);
  }
  else {
    for (var i = 0; i < prc.length; i++) {
      ttl += parseInt(Ip[i].value) * parseInt(prc[i].innerHTML)
    }

    document.getElementsByClassName("tot")[0].innerHTML = ttl
    var gt = document.getElementsByClassName('gt')[0]
    gt.innerHTML = ttl + 50
  }
}

$(document).ready(function () {
  // input change
  var qtyIp = $("input");
  for (var i = 0; i < qtyIp.length; i++) {
    var ip = qtyIp[i]
    ip.addEventListener("change", qtychange)
  }

  // delete buttoms
  var removeCartItemButtons = $('.btnn')

  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener("click", removeCartItems)
  }
  if (removeCartItemButtons.length <= 0) {

    $("#container2").html(`<h1>Empty Cart</h1><br><img src="pic/empty-cart.png" class="img-fluid">`);
  }
});


function qtychange(event) {
  var ip = event.target
  if (isNaN(ip.value) || ip.value <= 0) {
    ip.value = 1
  }

  updateCartTotal()
}

function removeCartItems(event) {
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.parentElement.remove()

  if ($('.btnn').length <= 0) {

    $("#container1").remove();

    $("#container2").html(`<h1>Empty Cart</h1><br><img src="pic/empty-cart.png" class="img-fluid">`);
  }
  updateCartTotal()
}

function updateCartTotal() {
  var ttl = 0;
  var Ip = $("input");
  var prc = $(".product-price")

  for (var i = 0; i < prc.length; i++) {
    ttl += parseInt(Ip[i].value) * parseInt(prc[i].innerHTML)
  }

  document.getElementsByClassName("tot")[0].innerHTML = ttl;
  var gt = document.getElementsByClassName('gt')[0]
  gt.innerHTML = ttl + 50
}

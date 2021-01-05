var min = 14;
var max = 25;
var timeleft = Math.floor(Math.random() * (+max - +min)) + +min;
var downloadTimer = setInterval(function () {
  document.getElementById("countdown").innerHTML =
    timeleft +
    "<span style='color:000; font-size: 15pt'>  ESPERE ANTES DE HACER CLIC &#9995;</span>";
  timeleft -= 1;
  if (timeleft <= 0) {
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML =
      "<span style='color:#000; font-size: 15pt'> &#9196; AHORA PUEDES HACER CLIC &#9196;</span>";
  }
}, 1000);

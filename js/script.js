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

function muestra(id) {
  if (document.getElementById) {
    //se obtiene el id
    var contenido = document.getElementById(id); //se define la variable "el" igual a nuestro div
    contenido.style.display === "none" ? "block" : "none"; //damos un atributo display:none que oculta el div
  }
}
window.onload = function () {
  /*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
  muestra("contenido");
};

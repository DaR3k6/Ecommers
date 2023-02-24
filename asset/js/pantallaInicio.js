const dosBotones = document.querySelector("#dosBotones");
const btnIniciar = document.querySelector("#btnIniciar");
const btnRegistro = document.querySelector("#btnRegistro");
let rolesCambiados = false;
window.addEventListener("blur", () => {
  if (!rolesCambiados) {
    cambiarRoles(baseDatos);
    rolesCambiados = true;
    dosBotones.removeChild(btnIniciar);
    dosBotones.removeChild(btnRegistro);
  }
  dosBotones.addEventListener("click", () => {});
});

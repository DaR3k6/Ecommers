const dosBotones = document.querySelector("#dosBotones");
const btnIniciar = document.querySelector("#btnIniciar");
const btnRegistro = document.querySelector("#btnRegistro");
const contenedorPadre = document.querySelector("#contenedorPadre");
let rolesCambiados = false;
let llamarProducto = false;
window.addEventListener("blur", () => {
  if (!rolesCambiados) {
    cambiarRoles(baseDatos);
    rolesCambiados = true;
    dosBotones.removeChild(btnIniciar);
    dosBotones.removeChild(btnRegistro);
  }
  if (!llamarProducto) {
    traigoProductos(baseDatosProductos);
    llamarProducto = true;
  }
  dosBotones.addEventListener("click", () => {
    window.open("/crearProducto.html");
  });
  contenedorPadre.addEventListener("click", () => {
    console.log("click");
  });
});

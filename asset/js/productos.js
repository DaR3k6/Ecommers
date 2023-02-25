//CREO EL DOM
const botonSalir = document.querySelector("#botonSalir");
const btnSalir = document.createElement("button");
btnSalir.setAttribute(
  "class",
  "btn btn-danger bg-danger p-2 text-white bg-opacity-75 justify-content-center col-1 mt-3"
);
btnSalir.innerHTML = "Salir";
botonSalir.appendChild(btnSalir);

btnSalir.addEventListener("click", () => {
  window.open("/index.html");
});

//CREO EL OBJETO EN LA BASE DE DATOS
const nombreInput = document.querySelector("#nombreInput");
const descripcionInput = document.querySelector("#descripcionInput");
const imagenUrl = document.querySelector("#imagenUrl");
const btnCrear = document.querySelector("#btnCrear");

btnCrear.addEventListener("click", () => {
  let crear = {
    id: Math.random(1, 200),
    nombreProducto: nombreInput.value,
    precio: descripcionInput.value,
    foto: imagenUrl.value,
  };
  crearProducto(baseDatosProductos, crear);
});

//CREO EL DOM
const nombreInput = document.querySelector("#nombreInput");
const apellidoInput = document.querySelector("#apellidoInput");
const correoInput = document.querySelector("#correoInput");
const contraseñaInput = document.querySelector("#contraseñaInput");
const roles = document.querySelector("#roles");
const btnRegistrarse = document.querySelector("#btnRegistrarse");

btnRegistrarse.addEventListener("click", () => {
  let registrar = {
    id: Math.random(1, 200),
    nombre: nombreInput.value,
    apellido: apellidoInput.value,
    correo: correoInput.value,
    contraseña: contraseñaInput.value,
    roles: roles.value,
  };
  guardarRegistro(baseDatos, registrar);
});

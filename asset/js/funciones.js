const guardarRegistro = (baseDatos, registrar) => {
  let email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (email.test(registrar.correo)) {
    baseDatos.setItem(registrar.id, JSON.stringify(registrar));
    alert("CORREO REGISTRADO " + registrar.correo);
    window.open("http://127.0.0.1:5500/registrarse.html");
  } else {
    alert("CORREO INCORRECTO " + registrar.correo);
  }
};
//INICIO SESION
const inicioSesion = baseDatos => {
  const llaves = Object.keys(baseDatos);
  const correo = correoInput.value;
  const contraseña = contraseñaInput.value;

  const usuario = JSON.parse(baseDatos.getItem(llaves));
  if (usuario.correo === correo && usuario.contraseña === contraseña) {
    alert("Bienvenido a la página web.");
    window.open("http://127.0.0.1:5500/index.html");
  } else {
    alert("Correo o contraseña incorrectos.");
  }
};
//CAMBIO DE ROLES
const cambiarRoles = baseDatos => {
  const llaves = Object.keys(baseDatos);
  const dosBotones = document.querySelector("#dosBotones");
  llaves.forEach(element => {
    const usuario = JSON.parse(baseDatos.getItem(element));
    if (usuario.roles == 1) {
      const boton = document.createElement("button");
      boton.setAttribute("class", "btn btn-success");
      boton.innerHTML = `<i class="bi bi-person-fill"></i>${usuario.nombre}`;
      dosBotones.appendChild(boton);
    } else {
      cambiarRoles(baseDatos);
    }
  });
};

//CREO EL PRODUCTO
const crearProducto = () => {
  Window.open("/http://127.0.0.1:5500/crearProducto.html");
};

const guardarRegistro = (baseDatos, registrar) => {
  let email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (email.test(registrar.correo)) {
    baseDatos.setItem(registrar.id, JSON.stringify(registrar));
    alert("CORREO REGISTRADO " + registrar.correo);
    window.open("http://127.0.0.1:5500/iniciarSesion.html");
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
    } else if (usuario.roles == 2) {
      alert(
        `El usuario ${usuario.nombre} tiene roles 2 y no se agregará al botón.`
      );
    }
  });
};

//CREO EL PRODUCTO
const crearProducto = (baseDatosProductos, crear) => {
  let url = /^(ftp|http|https):\/\/[^ "]+$/;

  if (url.test(crear.foto)) {
    baseDatosProductos.setItem(crear.id, JSON.stringify(crear));
    //CREA EL PRODUCTO
    alert("Producto creado");
    window.location.href = "http://127.0.0.1:5500/index.html";
  } else {
    alert("El link de la imagen no es valida");
  }
};
//CREAR PRODUCTO
const traigoProductos = baseDatosProductos => {
  const clave = Object.keys(baseDatosProductos);
  const contenedorPadre = document.querySelector("#contenedorPadre");
  contenedorPadre.setAttribute("class", "row");

  for (let llave in clave) {
    const id = clave[llave];
    const producto = JSON.parse(baseDatosProductos.getItem(id));

    if (producto["nombreProducto"] && producto["foto"] && producto["precio"]) {
      //CREO LAS CARD
      const card = document.createElement("div");
      card.setAttribute("class", "card mt-3 col-3 col-md-6 mb-3");
      card.setAttribute("style", "width: 19rem; height: 20rem;");
      //CREO LA IMAGEN
      const img = document.createElement("img");
      img.setAttribute("class", "card-img-top");
      img.setAttribute("style", "width:18rem");
      //CREO EL CARDBODY
      const cardBody = document.createElement("div");
      cardBody.setAttribute("class", "card-body");
      //CREO EL TITULO
      const cardTitulo = document.createElement("h5");
      cardTitulo.setAttribute("class", "card-title");
      //CREO LA DESCRIPCION
      const descripcion = document.createElement("p");
      descripcion.setAttribute("class", "card-text");
      //BOTON BORRAR
      const borrar = document.createElement("button");
      borrar.setAttribute("class", "btn btn-danger");
      //Doy la poscion del objeto
      img.src = `${producto.foto}`;
      cardTitulo.innerHTML = `${producto.nombreProducto}`;
      descripcion.innerHTML = `${producto.precio}`;
      borrar.innerHTML = `Borrar producto`;
      //INVOCO LAS CARD
      contenedorPadre.appendChild(card);
      card.append(img, cardBody);
      cardBody.append(cardTitulo, descripcion, borrar);
    }
  }
};
//BORRAR PRODUCTO

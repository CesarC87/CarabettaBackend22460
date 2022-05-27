const levantarProductos = () => {
  let title = document.querySelector("#title");
  let price = document.querySelector("#price");
  let thumbnail = document.querySelector("#thumbnail");

  fetch("http://localhost:3019/api/prods")
    .then((res) => {
      if (res.ok) {
        res.json();
      } else {
        console.log("Todo bien");
      }
    })
    .then((data) => console.log(data))
    .catch((error) => console.log("Error"));
};

const levantarMensajes = (e) => {
  e.preventDefault();
  let email = document.querySelector("#email").value;
  let nombre = document.querySelector("#nombre").value;
  let apellido = document.querySelector("#apellido").value;
  let edad = document.querySelector("#edad").value;
  let alias = document.querySelector("#alias").value;
  let avatar = document.querySelector("#avatar").value;
  let mensaje = document.querySelector("#mensaje").value;

  let userInfo = {
    author: {
      email: email,
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      alias: alias,
      avatar: avatar,
    },
    text: mensaje,
  };

  document.querySelector("#mensajesView").innerHTML = `<div>
                                                          ${userInfo.author.email} dice: ${userInfo.text}
                                                        </div>`;
  fetch("http://localhost:3019/api/productosTest", {
    method: "POST",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((res) => res.json())
    .then((data) => console.log(data, "respuesta de data"))
    .catch((error) => console.log(error));
};

const logOut = () => {
  fetch("http://localhost:3019/api/logout", {
    method: "GET",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json", 
    },
  })
    .then((res) => res.json())
    .then((res) => {
      res.message === "Logout exitoso" && (window.location.replace("/api/login"));
    })
    .catch((error) => console.log('Error desde Script logout',error));
}
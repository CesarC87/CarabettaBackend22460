// Iniciamos socket del lado cliente
let socket = io();
let date = new Date();

const levantarProductos = () => {
  let title = document.querySelector('#title');
  let price = document.querySelector('#price');
  let thumbnail = document.querySelector('#thumbnail');

  fetch('http://localhost:3003/api/prods')
    .then(res => {
      if(res.ok){
        console.log('Todo bien')
        console.log(title,price,thumbnail)
        res.json()}
        else{
        console.log('Todo bien')
        }
      })
    .then(data => console.log(data))
    .catch(error => console.log('Error'))
}
const levantarMensajes = () => {
  let email = document.querySelector('#email');
  let mensaje = document.querySelector('#mensaje');
  
  fetch('http://localhost:3003/api/mensajes')
    .then(res => {
      if(res.ok){
        console.log('Todo bien')
        console.log(email, mensaje)
        res.json()}
        else{
        console.log('Todo bien')
        }
      })
    .then(data => console.log(data))
    .catch(error => console.log('Error'))
}

// fx render toma la data y la mapea dentro del div #mensajes
// function renderChat(data) {
//   const html = data
//     .map((elem, index) => {
//       return `<div>
//                 <strong style="color:blue;">${elem.author}</strong> ${date}:${elem.text}
//             </div>`;
//     })
//     .join(" ");
//   document.querySelector("#mensajes").innerHTML = html;
// }
// function renderProds(data) {
//   const html = data
//     .map((elem, index) => {
//       return `<div>
//                 <strong>Title:</strong>${elem.title}
//             </div>
//             <div>
//                 <strong>Price:</strong>${elem.price}
//             </div>
//             <div>
//                 <p><strong>Thumbnail:</strong>      </p><img src="${elem.thumbnail}">
//             </div>`;
//     })
//     .join(" ");
//   document.querySelector("#productos").innerHTML = html;
// }
// // on --> escucha el evento (chat y prods)
// socket.on("messages", (data) => {
//   console.log("Desde el cliente recibiendo esta data: ", data);
//   renderChat(data);
// });
// socket.on("prod-base", (data) => {
//   console.log("Desde el cliente recibiendo esta data: ", data);
//   renderProds(data);
// });

// function addMessage(e) {
//   const mensaje = {
//     author: document.querySelector("#username").value,
//     text: document.querySelector("#texto").value,
//   };
//   socket.emit("new-message", mensaje);
//   return false;
// }
// function addProduct(e) {
//   const mensaje2 = {
//     title: document.querySelector("#title").value,
//     price: document.querySelector("#price").value,
//     thumbnail: document.querySelector("#thumbnail").value,
//   };
//   socket.emit("prod-nuevos", mensaje2);  

//   return false;
// }



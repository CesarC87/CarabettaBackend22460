// let http = require('http');
// const PORT = 3000;
// let app = http.createServer((req,res) => {
//     res.end("hola!")
// })

// app.listen(PORT, () => {
//     console.log(`Mi servidor escuchando desde http://localhost:${PORT}`);
// });

let express = require('express');
let app = express();
const PORT = 3000;

app.get("/" , (req,res,next) => {
    res.send(`<h1>Hola , primer servidor con express</h1>`)
});

app.listen(PORT, () => {
    console.log(`Hola`)
})
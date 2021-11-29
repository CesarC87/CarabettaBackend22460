
let express = require('express');
let app = express();
const PORT = 3000;

app.get("/" , (req,res,next) => {
    res.send(`<h1>Hola , primer servidor con express</h1>`)
});

app.listen(PORT, () => {
    console.log(`Hola`)
})
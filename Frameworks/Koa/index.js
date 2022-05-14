const koa = require('koa')
const koaBody = require('koa-body')

const app = new koa();

app.use(koaBody())

let peliculas = require('./peliculas.js')
app.use(peliculas.routes())

app.listen(4000, () => {
    console.log('Server on')
})

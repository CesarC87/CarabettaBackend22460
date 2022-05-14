const Router = require('koa-router');

const router = new Router({
    prefix: '/peliculas'
});

let peliculas = [

]

router.get('/', ctx => {
    ctx.body = {
        status:200,
        peliculas
    }
})
router.get('/:id', ctx => {
    let {id} = ctx.params;
    let pelicula = peliculas.filter(pelicula => pelicula.id == id);
    ctx.body = {
        description: peliculas.length > 0 ? `Pelicula encontrada --> ${pelicula.nombre}` : 'Pelicula no encontrada',
        pelicula
    }
})

router.post('/', ctx => {
    let {nombre,anio, genero,director} = ctx.request.body;
    ctx.body = {
        status:200,
        peliculas
    }
    if(!nombre || !anio || !genero || !director){
        ctx.body = {
            status:400,
            description: 'Faltan datos'
        }
    }else{
        peliculas.push({            
            nombre,
            anio,
            genero,
            director
        })
        ctx.body = {
            
        }
    }
})

module.exports = router;
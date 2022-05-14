const faker = require('faker')
faker.locale = 'es'

const getFakeProducts = (req,res) => {
    let response = [];
 
    for (let i = 0; i < 5; i++) {
        const productoFaker = {
            title: faker.commerce.product(),
            price: faker.commerce.price(min = 1, max = 1000, dec= 2, symbol= ''),
            thumbnail: faker.image.abstract(width=300, height=300, randomize=true)
        }  
        response.push(productoFaker)        
    };
    res.render('fakerTest', {
        response
    }) 
}

  module.exports = { getFakeProducts }
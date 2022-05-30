const { productsEcomm } = require('../models/productsEcomm');

const getProducts = async (req, res, next) => {
  try {
    const productsList = await productsEcomm.find() 
    !productsList ? res.status(404).json({ message: "Producto no encontrado" }) : res.render('verProductos', { productsList: productsList })  
  } catch (error) {
    console.log(error)
  }
};
const postProducts = async (req, res, next) => {
  const { title, image, stock, description, price } = req.body;
  let newProduct = new productsEcomm({
    title,
    price,
    description,
    image,    
    stock
  })
  newProduct = await newProduct.save()
  !newProduct ? res.status(404).json({ message: "No se pudo crear el producto" }) : res.status(200).json(newProduct);
}

const deleteProducts = async (req, res, next) => {
  const { id } = req.params;
  const products = await productsEcomm.findByIdAndDelete(id);
  !products ? res.status(404).json({ message: "No se encontró el producto" }) : res.status(200).send("Producto eliminado");
}

module.exports = { getProducts, postProducts , deleteProducts };
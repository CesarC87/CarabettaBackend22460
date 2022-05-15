class Mensajes {
    constructor(conexion, tabla) {
      this.conexion = conexion;
      this.tabla = tabla;
    }
    async tableExists(){
        try{
          await this.conexion.schema.hasTable(this.tabla)
          .then(data => {
            !data && this.crearTabla();
          })
        } catch (error){
          console.log(error);
        }   
      }
    async crearTabla() {      
        try {
          // Crear database
          await this.conexion.schema.createTable(this.tabla, (table) => {
              table.increments("id").primary(),
              table.string("email"),
              table.string("mensaje")
              ;
          });
        } catch (error) {
          console.log(error);
        }
      
    }
    async addMensaje(message) {
      try {
        await this.conexion.from(this.tabla).insert({
          email: message.email,
          mensaje: message.mensaje        
        });
      } catch (error){
        console.log(error);
      }
    }
    getAll() {
      try {
        return this.productosBase;
      } catch (error) {
        console.log(error);
      }
    }
    getById(id) {
      try {
        this.id = id;
        let getByIdProducts = this.productosBase.filter((x) => x.id == id);
        let error = "Producto no encontrado";
        if (getByIdProducts.length == 0) {
          return error;
        } else {
          return getByIdProducts;
        }
      } catch (error) {
        console.log("Nada por aqui");
      }
    }
    deleteById(id) {
      try {
        this.id = id;
        let deleteByIdProducts = this.productosBase.filter((x) => x.id != id);
        return deleteByIdProducts;
      } catch (error) {
        console.log(error);
      }
    }
  }
  module.exports = Mensajes;
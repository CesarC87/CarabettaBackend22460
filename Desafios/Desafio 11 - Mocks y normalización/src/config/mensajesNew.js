class MensajesNew {
    constructor(conexion, tabla, URL, schema) {
      this.conexion = conexion;
      this.tabla = tabla;
      this.url = URL;
      this.schema = schema;
      this.connect();
    }
    async connect(){
        try{
            await this.conexion.connect(this.url, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
        }catch(err){
            console.log(err);
        }
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
          this.schema
        } catch (error) {
          console.log(error);
        }
      
    }
    async addMensaje(message) {
      try {
        const mensajeSaveModel = new model.this.schema(message)
        mensajeSaveModel.save()
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
  module.exports = MensajesNew;
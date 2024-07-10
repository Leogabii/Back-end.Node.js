export default class Product {

    constructor(id, name, descripcion,precio,img,codigo,stock,activo,categoria_id) {
        this.id = id
        this.name = name
        this.descripcion = descripcion
        this.precio = precio
        this.img = img
        this.codigo = codigo
        this.stock = stock
        this.activo = activo
        this.categoria_id = categoria_id
    }
}
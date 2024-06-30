export default class Producto {

    constructor(id, name, descripcion,precio,img,codigo,stock,activo) {
        this.id = id
        this.name = name
        this.descripcion = descripcion
        this.precio = precio
        this.img = img
        this.codigo = codigo
        this.stock = stock
        this.activo = activo
    }
}
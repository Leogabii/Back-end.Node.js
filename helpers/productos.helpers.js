import Producto from '../models/Producto.js'

export default class ProductosHelpers {

    createProducto(newData) {
        const { id, name, descripcion,precio,img,codigo,stock,activo} = newData
        const producto = new Producto(parseInt(id), name, descripcion,  parseInt(precio), img, parseInt(codigo), parseInt(stock), parseInt(activo)  )
        return producto
    }
}
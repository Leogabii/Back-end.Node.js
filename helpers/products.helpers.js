import Products from '../models/Product.js'

export default class ProductsHelpers {

    createProduct(newData) {
        const { id, name, descripcion,precio,img,codigo,stock,activo,categoria_id} = newData
        const product = new Products(parseInt(id), name, descripcion,  parseInt(precio), img, parseInt(codigo), parseInt(stock), parseInt(activo), parseInt(categoria_id) )
        return product
    }

modificaProduct(newData,id) {
    const {name, descripcion,precio,img,codigo,stock,activo,categoria_id} = newData
    const product = new Products(parseInt(id), name, descripcion,  parseInt(precio), img, parseInt(codigo), parseInt(stock), parseInt(activo), parseInt(categoria_id) )
    return product
    }

}
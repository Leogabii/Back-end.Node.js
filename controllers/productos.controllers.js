import ProductosHelpers from '../helpers/productos.helpers.js'
import ProductosDaoMysql from '../daos/productos.dao.mysql.js'


export default class ProductosControllers {

    constructor() {
        this.db = new ProductosDaoMysql()
        this.helpers = new ProductosHelpers()
    }


    getProducts = async (req, res) => {
        const products = await this.db.getAllProductos()
        res.json(products)
    }


    getProductsById = async (req, res) => {
        const { id } = req.params
        const products = await this.db.getProductoById(id)
        res.json(products)
    }

    addProducts = async (req, res) => {
        const products = this.helpers.createProducto(req.body)
        const result = await this.db.addProducto(products)
        res.json(result)
    }


    modifyProducts = async (req, res) => {
        const products = this.helpers.createProducto(req.body)
        const result = await this.db.modifyProducto(products)
        res.json(result)
    }


    deleteProducts = async (req, res) => {
        const { id } = req.params
        const result = await this.db.deleteProducto(id)
        res.json(result)
    }
}
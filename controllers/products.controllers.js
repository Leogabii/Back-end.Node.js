import ProductsHelpers from '../helpers/products.helpers.js'
import ProductsDaoMysql from '../db/daos/products.dao.mysql.js'


export default class ProductsControllers {

    constructor() {
        this.db = new ProductsDaoMysql()
        this.helpers = new ProductsHelpers()
    }

    getProducts = async (req, res) => {
        
    const products = await this.db.getAllProducts()
    res.json(products)
        /*getProducts = (req, res) => {
            const products = { valor: "anda" }
            res.json(products)*/
    }

    addProducts = async (req, res) => {
    const products = this.helpers.createProduct(req.body)
    const result = await this.db.addProducto(products)
    res.json(result)
    }

    deleteProducts = async (req, res) => {
        try {
            const { id } = req.params;
            const result = await this.db.deleteProducto(id);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: 'Error al eliminar el producto' });
        }
    }
    getProductsById = async (req, res) => {
        const { id } = req.params;
        const product = await this.db.getProductoById(id);
        res.json(product);
    }
    modifyProduct = async (req, res) => {
        const product = this.helpers.createProduct(req.body)
        console.log(product)
        const result = await this.db.modifyProduct(product)
        res.json(result)
    }

}

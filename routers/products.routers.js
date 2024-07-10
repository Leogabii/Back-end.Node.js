import Routes from "./routes.js";
import ProductsControllers from "../controllers/products.controllers.js";

export default class ProductsRoutes extends Routes {

    constructor() {
        super()
        this.controller = new ProductsControllers()
        this.getRoutes()
    }

    getRoutes() {
        this.router
            .get('/products', this.controller.getProducts)
            .post('/create', this.controller.addProducts)
            .delete('/products/:id', this.controller.deleteProducts)
            .put('/products/:id', this.controller.modifyProduct)
            //.put('products/:id', this.controller.modifyProducts)
            .get('/products/:id', this.controller.getProductsById);
    }
    
}
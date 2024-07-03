import { Router } from 'express';
import ProductosControllers from '../controllers/productos.controllers.js';

const router = Router();
const productosControllers = new ProductosControllers();

router.get('/products', productosControllers.getProducts);
router.get('/products/:id', productosControllers.getProductsById);
router.post('/products', productosControllers.addProducts);
router.put('/products/:id', productosControllers.modifyProducts);
router.delete('/products/:id', productosControllers.deleteProducts);

export default router;
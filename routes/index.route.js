import { Router } from 'express';
import product_router from './products.route.js';

const router = Router();

//Rutas de productos
router.use('/products', product_router);

//RUtas de clientes

export default router;